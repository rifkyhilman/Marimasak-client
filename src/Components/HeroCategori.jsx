import React from 'react';
import { useParams } from 'react-router-dom';
import { ListCategories } from "../Utility/DropdownList";
import "../Styles/HeroCategori.scss";

const HeroCategori = () => {

    // mengambil data nama daerah dari parameter link
    const { daerah } = useParams(); 

    const filterdaerah = ListCategories.filter(daerahh => {
        return daerahh.nama === daerah;
    })

    return (
        <div className="HeroCategori">
            {/* <div className="hero-container__text-section">
                <h1 className="hero-container__text-section__heading">
                Bersiaplah untuk perjalanan kuliner Khas Provinsi {filterdaerah[0].nama} yang tak terlupakan!
                </h1>
            </div> */}
            <div className="HeroCategori__image-section">
                <img src={filterdaerah[0].image} alt={filterdaerah[0].nama} />
            </div>
        </div>
    );
}

export default HeroCategori;