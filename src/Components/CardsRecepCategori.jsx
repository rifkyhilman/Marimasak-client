import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { DataResepContext } from "../Contexts/DataResepContext";
import '../Styles/CardsRecep.scss';

// import icon dari mui05
import AccessTime from "@mui/icons-material/AccessTime";
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';

// import komponent dari mui05
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';


const CardsRecepCategori = () => {

    // mengambil data nama daerah dari parameter link
    const { daerah } = useParams();
    
    // mengambil data dari context
    const { getKategoriResep } = useContext(DataResepContext);
    
    // menyimpan data resep sesuai kategori daerah
    const [DaerahResep, setDaerahResep] = useState(null);

    // mengirim data daerah dari parameter ke context
    useEffect(()=>{
        (async function () {
            const data = await getKategoriResep(daerah);
            setDaerahResep(data);
        } )()
    }
    ,[getKategoriResep, daerah])


    if(!DaerahResep) return <CircularProgress color="secondary" />

    return (
        <div className="Cards">
            <div className="Cards__List">
                {DaerahResep.map(data => {
                    return (
                        <Card className="Cards__List__card" key={data.id}>
                            <CardActionArea>
                                <Link to= {`/detail/${data.id}`} underline="none">
                                    <CardMedia
                                    component="img"
                                    height="200"
                                    image={data.pictureUrl}
                                    alt={data.nama_resep}
                                    />
                                </Link>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {data.nama_resep}
                                </Typography>
                                <div className="Cards__List__card__content">
                                    <div className="Cards__List__card__content__waktu-pembuatan">
                                        <AccessTime />
                                        <Typography variant="body2" color="text.secondary">
                                            {data.waktu_pembuatan}
                                        </Typography>
                                    </div>
                                    <div  className="Cards__List__card__content__tingkat-kesulitan">
                                        <LocalDiningOutlinedIcon />
                                        <Typography variant="body2" color="text.secondary">
                                            {data.tingkat_kesulitan}
                                        </Typography>
                                    </div>
                                </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )}
                )}
            </div>
        </div>
    )
}

export default CardsRecepCategori;