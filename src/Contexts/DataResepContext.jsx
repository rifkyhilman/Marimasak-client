import React from "react";
import axios from "axios";
import { createContext, useState } from "react";

export const DataResepContext = createContext(null);

const Provider = ({children}) => {
    const [ ListReseps, setListResep ] = useState([]);

    // fungsi GET list data resep menggunakan axios
    const getListResep = async () => {
        const response = await axios.get('https://marimasak-api.vercel.app/api/list');

        setListResep(response.data.resep);
    };

    // fungsi GET detail data resep menggunakan axios
    const getDetailResep = async (id) => {
        const response = await axios.get('https://marimasak-api.vercel.app/api/detail/' + id);
        return response.data.resep;
    }

    // const getKategoriResep = async (daerah) => {
    //     const response = await axios.get('https://marimasak-api.vercel.app/api/kategori/' + daerah);
    //     return response.data.resep;
    // }

    return (
        <DataResepContext.Provider value={{ListReseps, getListResep, getDetailResep}}>
                {children}
        </DataResepContext.Provider>
    )
}

export { Provider };