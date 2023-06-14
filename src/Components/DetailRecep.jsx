import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataResepContext } from '../Contexts/DataResepContext';
import ProcessImage from '../Assets/process.svg';
import '../Styles/DetailRecep.scss';

// import komponent dari Mui5
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(8),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(8),
    },
}));
  
function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: -1,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  
const DetailRecep = () => {
    const { id } = useParams();
    const isLoggin = localStorage.getItem("Token");

    const { getDetailResep } = useContext(DataResepContext);
    
    const [DataResep, setDataResep] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    useEffect(()=>{
        (async function () {
            const data = await getDetailResep(id);
            setDataResep(data);
        } )()
    }
    ,[getDetailResep, id])


    if(!DataResep) return <h1>Loading...</h1> 

    return (
    <div className='ContainerDetail'>
        <div className='ContainerDetail__description'>
            <h1>{DataResep.nama_resep}</h1>
            <p>
                Merupakan Makanan Khas dari Provinsi {DataResep.kategori_daerah}, 
                dengan tingkat kesuilat membuat makanan ini yang cukup {DataResep.tingkat_kesulitan} untuk dibuat, 
                dan memakan waktu pembuatan selama  {DataResep.waktu_pembuatan}.
            </p>
        </div>
        <div className='ContainerDetail__poster'>
            <img src={DataResep.pictureUrl} alt='' />
        </div>
        <div className='ContainerDetail__Content'>
            <div className='ContainerDetail__Content__pembuatan-makanan'>
                <div className='ContainerDetail__Content__pembuatan-makanan__title'>
                    <h1>Cara Pembuatan</h1>
                </div>
                <ol>
                    {DataResep.cara_pembuatan.map(cp => {
                        return (
                            <li key={cp.item}>{cp.item}</li>
                        ) 
                    })}
                </ol>
            </div>
            <div className='ContainerDetail__Content__bahan-makanan'>
                <div className='ContainerDetail__Content__bahan-makanan__title'>
                    <h1>Bahan Makanan</h1>
                </div>
                <div className='ContainerDetail__Content__bahan-makanan__content'>
                    {DataResep.bahan_makanan.map(bh => {
                        return (
                            <div key={bh.item}>
                            <p> {bh.item} </p>
                            </div>
                        ) 
                    })}
                </div>
                {isLoggin ? 
                <div className='ContainerDetail__Content__btn-cart'>
                    <button onClick={handleClickOpen}>
                            Beli Bahan Makanan
                    </button>
                </div>
                : null}
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                 <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} />
                 <DialogContent  className='ContainerDetail__Dialog' dividers>
                    <img src={ProcessImage} alt="Proses" />
                   <Typography className='ContainerDetail__Dialog__text' gutterBottom>
                     Fitur Masih Dalam proses Pengembangan.
                   </Typography>
                 </DialogContent>
               </BootstrapDialog>
            </div>
        </div>
    </div>
    )
};

export default DetailRecep;