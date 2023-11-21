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
            <div className="HeroCategori__image-section">
                <img src={filterdaerah[0].image} alt={filterdaerah[0].nama} />
            </div>
        </div>
    );
}

export default HeroCategori;