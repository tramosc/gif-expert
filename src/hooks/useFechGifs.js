import { useState, useEffect } from "react";
import { getGifts } from "../Helpers/GetGifts";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifts( category ).then( imgs => {
            setTimeout( () => {

               setState({
                data: imgs,
                loading: false
                });
            }, 2000);   
        })

    }, [category])


    return state; //state=> data:   , loading: 
}