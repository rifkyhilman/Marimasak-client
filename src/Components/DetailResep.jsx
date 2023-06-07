import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataResepContext } from '../Contexts/DataResepContext';
import '../Styles/DetailResep.scss';


const DetailResep = () => {
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
        <img src={DataResep.pictureUrl} alt='' />
        <h1>{DataResep.nama_resep}</h1>
        <p>{DataResep.kategori_daerah}</p>
        <p>{DataResep.tingkat_kesulitan}</p>
        <p>{DataResep.waktu_pembuatan}</p>
        <ol>
            {DataResep.peralatan.map(p => {
                return (
                    <li key={p.item}>{p.item}</li>
                ) 
            })}
        </ol><br></br>
        <ol>
            {DataResep.bahan_makanan.map(bh => {
                return (
                    <li key={bh.item}>{bh.item}</li>
                ) 
            })}
        </ol><br></br>
        <ol>
            {DataResep.cara_pembuatan.map(cp => {
                return (
                    <li key={cp.item}>{cp.item}</li>
                ) 
            })}
        </ol>
    </div>
    )
};

export default DetailResep;