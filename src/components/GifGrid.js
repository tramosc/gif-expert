import React from 'react';
import { useFetchGifs } from '../hooks/useFechGifs';
import GifGridItem from './GifGridItem';
//import { getGifts } from '../Helpers/GetGifts';

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category);
    /*
    useEffect( () => {
        getGifts(category).then(setImages);
    }, [category])
*/
//[] significa las veces que va a ser lanzado

    
    return ( 
        <>
        <h3 className="animate__animated animate__backInUp">{category}</h3>

        {loading ? <h1 className="animate__animated animate__bounceInDown">Cargando...</h1>: null}
        

        <div className="card-grid animate__animated animate__bounceInDown">
                {
                    images.map( img => (
                        <GifGridItem 
                        key={img.id}
                        {...img}/>
                    ))
                }
            </div>
        </>
     );
}
 
export default GifGrid;