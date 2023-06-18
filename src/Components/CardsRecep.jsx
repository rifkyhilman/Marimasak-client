import React, { useContext, useEffect, useState } from 'react';
import { DataResepContext } from '../Contexts/DataResepContext';
import { Link } from 'react-router-dom';
import Loading from './Loading';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';




const CardsRecep = () => {
 
    // mengambil fungsi getListResep dari context
    const { getListResep } = useContext(DataResepContext);

    const [ ListReseps, setListResep ] = useState(null);

    const [ Visible, setVisible ] = useState(6);

    useEffect(() => {
        (async function () {
            const data = await getListResep();
            setListResep(data);
          })();
    },[getListResep]);

    const showMoreCards = () => {
        setVisible((prevValue) => prevValue + 6)
    }
    const showLessCards = () => {
        setVisible(6);
    }

    // kondisi loading

    if(!ListReseps) {
        return <Loading />
    }

    return (
        <div className="Cards">
            <div className="Cards__List">
                {ListReseps.slice(0, Visible).map(data => {
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
            <div className='Cards__btn-more'>
                { Visible === 54 ?        
                    <button onClick={showLessCards}>
                        <ExpandLessIcon />
                    </button> :
                    <button onClick={showMoreCards}>
                        <ExpandMoreIcon />
                    </button>
                }         
            </div>
        </div>
    )
}

export default CardsRecep;