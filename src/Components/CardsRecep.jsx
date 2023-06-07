import React, { useContext, useEffect } from 'react';
import { DataResepContext } from '../Contexts/DataResepContext';
import { Link } from 'react-router-dom';
import '../Styles/CardsRecep.scss';

// Import component Card dari MUI05
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// Import Icon dari MUI05
import AccessTime from '@mui/icons-material/AccessTime';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';




const CardsRecep = () => {
 
    // mengambil fungsi getListResep dari context
    const { ListReseps, getListResep } = useContext(DataResepContext);
  

    useEffect(() => {
        getListResep();
    },[getListResep]);

    return (
        <div className="Cards">
            <div className="Cards__List">
                {ListReseps.map(data => {
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
                                    <div  className="Cards__List__card__content__waktu-pembuatan">
                                        <AccessTime />
                                        <Typography variant="body2" color="text.secondary">
                                         {data.waktu_pembuatan}
                                        </Typography>
                                    </div>
                                    <div className="Cards__List__card__content__tingkat-kesulitan">
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

export default CardsRecep;