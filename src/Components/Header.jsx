import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ListCategories } from "../Utility/DropdownList";
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
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';


const Header = () => {
  
  const [openMenu, setOpenMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const navigate = useNavigate();


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

  const isLoggedIn = window.sessionStorage.getItem("Token");

  const isLogout = (e) => {
    e.preventDefault();
    window.sessionStorage.clear();
    navigate('/login');
  }


  

  return (
      <nav className="navbar">
        <div className="navbar__logo-container">
          <Link to="/"><img src={Logo} alt="logo" /></Link>
        </div>
        <div className="navbar__links-container">
          <Link to="/"> Beranda </Link>
          <Link to="/about"> Tentang </Link>
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
                          {ListCategories.slice(0,5).map(daerah => {
                              return (
                              <Link to={daerah.path} key={daerah.nama}>
                                <MenuItem onClick={handleClose}>{daerah.nama}</MenuItem>
                              </Link>
                              )
                          })}
                        </div>
                        <div>
                          {ListCategories.slice(5,10).map(daerah => {
                                return (
                                <Link to={daerah.path} key={daerah.nama}>
                                  <MenuItem onClick={handleClose}>{daerah.nama}</MenuItem>
                                </Link>
                                )
                            })}
                        </div>
                      </MenuList> 
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Link>
          {isLoggedIn && (
            <Link to="/keranjang">
              Keranjang
            </Link>
          )}
        </div>
        <div className="navbar__btn-daftar">
          { isLoggedIn ? 
            (
              <button onClick={isLogout}>
                <LogoutIcon /> 
                Keluar 
              </button>
            ) :
            (
              <Link to="/register">
                <button> 
                  <LoginIcon /> 
                  Daftar 
                </button>
              </Link>
            )
          }
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
                    <Link to="/about">
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
                  {ListCategories.map(daerah => {
                    return (
                      <ListItemButton sx={{ pl: 4 }} key={daerah.nama}>
                        <Link to={daerah.path}>
                          {daerah.nama}
                        </Link>
                      </ListItemButton>
                      )}
                    )}
                </List>
              </Collapse>
              <ListItemButton>
                    <Link to="/keranjang">
                        Keranjang
                    </Link>
              </ListItemButton>
                <div className="drawer__btn-daftar">
                { isLoggedIn ? 
                  (
                    <button onClick={isLogout}>
                      <LogoutIcon /> 
                      Keluar 
                    </button>
                  ) :
                  (
                    <Link to="/register">
                      <button> 
                        <LoginIcon /> 
                        Daftar 
                      </button>
                    </Link>
                  )
                }
                </div>
            </List>
            <Divider />
          </Box>
        </Drawer>
      </nav>
  );
};

export default Header;
