import React, { useState, useEffect } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {
    // const [count, setCount] = useState(0);

    //  const [images, setImages] = useState([]);

    //  useEffect( ()=>{
    //      getGifs(  category  ).then(
    //          imgs => setImages( imgs )
    //      )
    //  }, [ category ]); //no se dispara de nuevo el getGifs

    // const apiKey = 'h3EhWWII5vCdpTZq7dRXa0y5DVKVipfU';

    // const url = 'http://api.giphy.com/v1/gifs/search?api_key=';
    // const url2 = '&q=programacion&limit=10';

    // let gifs=[];

    const {data:images, loading} = useFetchGifs(category);

    // console.log(images, loading);

    //getGifs();    

    return (
        <Fragment>
        <h3 className="animate__animated animate__fadeInDown"> {category} </h3>
        { loading ? 'Cargando...' : 'Data cargada'}
        <div className="card-grid">
            
            {/* {
                <h3> {count} </h3>
                <button onClick={ ()=> setCount(count + 1) }>Add</button>  
                } */}

            
                {
                    // images.map(img => (
                    //     <li key={ img.id }> { img.title } </li>
                    // ))
                    
                    images.map( img => (
                        // <li key={ id }> { title } </li>
                        
                        <GifGridItem  key={img.id} { ...img }></GifGridItem>

                    ))
                } 
            
        </div>
        </Fragment>
    )
}

export default GifGrid;