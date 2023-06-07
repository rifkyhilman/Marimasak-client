import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ListKategori } from "../Utils/DropdownList";
import Logo from "../Assets/Logo.png";
import '../Styles/Header.scss';

// import component dari mui5
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Collapse from '@mui/material/Collapse';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

// import icon dari mui5
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';



const Header = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  return (
      <nav className="navbar">
        <div className="navbar__logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="navbar__links-container">
          <Link to="/"> Beranda </Link>
          <Link to="/"> Tentang </Link>
          <Link to="#">
          <button
            className="navbar__btn-dropdown"
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? 'composition-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              onClick={handleToggle}
            >
            Kategori Daerah
            {open ? <ExpandLess /> : <ExpandMore />}
            </button>
         
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >  
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom-start' ? 'left top' : 'left bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList className="navbar__dropdown-list">
                        <div>
                          <Link to="/kategori/Aceh">
                            <MenuItem onClick={handleClose}>Aceh</MenuItem>
                          </Link>
                          <Link to="/kategori/Bengkulu">
                            <MenuItem onClick={handleClose}>Bengkulu</MenuItem>
                          </Link>
                          <Link to="/kategori/Bangka Belitung">
                            <MenuItem onClick={handleClose}>Bangka Belitung</MenuItem>
                          </Link>
                          <Link to="/kategori/Jambi">
                            <MenuItem onClick={handleClose}>Jambi</MenuItem>
                          </Link>
                          <Link to="/kategori/Kepulauan Riau">
                            <MenuItem onClick={handleClose}>Kepulauan Riau</MenuItem>
                          </Link>
                        </div>
                        <div>
                          <Link to="/kategori/Lampung">
                            <MenuItem onClick={handleClose}>Lampung</MenuItem>
                          </Link>                 
                          <Link to="/kategori/Riau">
                            <MenuItem onClick={handleClose}>Riau</MenuItem>
                          </Link>
                          <Link to="/kategori/Aceh/Sumatera Barat">
                            <MenuItem onClick={handleClose}>Sumatera Barat</MenuItem>
                          </Link>
                          <Link to="/kategori/Sumatera Selatan">
                            <MenuItem onClick={handleClose}>Sumatera Selatan</MenuItem>
                          </Link>
                          <Link to="/kategori/Sumatera Utara">
                            <MenuItem onClick={handleClose}>Sumatera Utara</MenuItem>
                          </Link>
                        </div>
                      </MenuList> 
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Link>
          <Link to="/">
             Keranjang
          </Link>
        </div>
        <div className="navbar__btn-daftar">
          <Link to="/register">
            <button> Daftar </button>
          </Link>
        </div>
        <div className="navbar__menu-container">
          <Button  onClick={() => setOpenMenu(true)}>
            <MenuOutlinedIcon />
          </Button>
        </div>


        {/* Navbar versi mobile  */}

        <Drawer open={openMenu} anchor="right"  className="drawer">
          <Box
            sx={{ width: 250 }}
            role="presentation"
          >
            <div className="drawer__bnt-close">
              <Button onClick={() => setOpenMenu(false)}>
                <CloseIcon />
              </Button>
            </div>
            <List>  
                <ListItemButton>
                    <Link to="/">
                        Beranda
                    </Link>
                </ListItemButton>
                <ListItemButton>
                    <Link to="/">
                        Tentang
                    </Link>
                </ListItemButton>
                <ListItemButton onClick={() => setOpenDropdown(!openDropdown)}>
                    Kategori Daerah
                    <div className="drawer__icon-down">
                      {openDropdown ? <ExpandLess /> : <ExpandMore />}
                    </div>
                </ListItemButton>
                <Collapse in={openDropdown} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {ListKategori.map(daerah => {
                    return (
                      <ListItemButton sx={{ pl: 4 }} key={daerah.nama}>
                        <Link to={daerah.link}>
                          {daerah.nama}
                        </Link>
                      </ListItemButton>
                      )}
                    )}
                </List>
              </Collapse>
              <ListItemButton>
                    <Link to="/">
                        Keranjang
                    </Link>
              </ListItemButton>
                <div className="drawer__btn-daftar">
                  <button>Daftar</button>
                </div>
            </List>
            <Divider />
          </Box>
        </Drawer>
      </nav>
  );
};

export default Header;
