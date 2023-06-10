import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataResepContext } from '../Contexts/DataResepContext';
import '../Styles/DetailRecep.scss';

//  Import Icon dari MUI5
// import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';

const DetailRecep = () => {
    const { id } = useParams();

    const { getDetailResep } = useContext(DataResepContext);

    const [DataResep, setDataResep] = useState(null);

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
                <div className='ContainerDetail__Content__btn-cart'>
                    <button>
                            Beli Bahan Makanan
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
};

export default DetailRecep;