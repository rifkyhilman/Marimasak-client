import {React, useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Header from '../Components/Header';
import '../Styles/Home.scss';

const Home = () => {

  const [DataMakanan, setDataMakanan] = useState([]);

  const getListMakanan = async ()=> {
    const reqData = await fetch('https://api-marimasak.vercel.app/list');
    const response = await reqData.json();

    setDataMakanan(response.resep);
  }; 

  useEffect(()=> {
    getListMakanan();
  })

  return (
    <div>
      <Header />
      {DataMakanan.map(data => {
        return (
        <Card sx={{ maxWidth: 345 }}>
           <CardActionArea>
             <CardMedia
               component="img"
               height="140"
               image={data.pictureUrl}
               alt="green iguana"
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                 {data.nama_resep}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                 {data.tingkat_kesulitan}
               </Typography>
             </CardContent>
           </CardActionArea>
         </Card>
        )}
        )}
  </div>
  );
}

export default Home;