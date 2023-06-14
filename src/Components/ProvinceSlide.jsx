import React from "react";
import Slider from "react-slick";
import { ListCategories } from "../Utility/DropdownList";

import '../Styles/ProvinceSlide.scss';

const ProvinceSlide = () => {
    const settings = {
      infinite: true,
      Padding: "150px",
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    };

    return (
      <div className="ContainerSlide">
        <Slider {...settings} >
          {ListCategories.map(daerah => {
            return (
              <div key={daerah.nama} className="ContainerSlide__Card">
                  <img src={daerah.image} alt={daerah.nama} />
              </div>
            )
          })}
        </Slider>
      </div>
    );
}

export default ProvinceSlide;