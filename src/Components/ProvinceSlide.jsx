import React from "react";
import Slider from "react-slick";
import { ListCategories } from "../Utility/DropdownList";

import '../Styles/ProvinceSlide.scss';

const ProvinceSlide = () => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true
          }
        }
      ]
    };

    return (
      <section className="ContainerSlide">
        <div className="ContainerSlide__title" >
           <h1> Provinsi Pulau Sumatera </h1> 
        </div>
        <Slider {...settings} >
          {ListCategories.map(daerah => {
            return (
              <div key={daerah.nama} className="ContainerSlide__Card">
                  <img src={daerah.image} alt={daerah.nama} />
              </div>
            )
          })}
        </Slider>
      </section>
    );
}

export default ProvinceSlide;