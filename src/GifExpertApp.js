import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Overwatch'])
    //const categories= ['One Punch', 'Dragon Ball', 'Otro'];
    // const handleApp = () =>{
    //     setCategories( [...categories, 'Hunter'] );        
    // }

    return (   
        <>
            <h2>Gif Expert App</h2>

            <AddCategory setCategories={ setCategories }></AddCategory>

            <hr/>

            {/* <button className="btn" onClick={handleApp}>Agregar</button> */}

            <ol>
            {
                categories.map( (category) => {
                    return <GifGrid key={category} category={category}></GifGrid>
                    //return <li key={category}>{category}</li>
                })
            }
            </ol>



        </>
    );
}

export default GifExpertApp;