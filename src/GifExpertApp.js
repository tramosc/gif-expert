import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
const GifExpertApp = () => {

    //const categories = ['Dragon ball','SAO','Saint Seiya']
    const[categories, setCategories] = useState(['Dragon Ball Z']);
/*
    const handleAdd = () => {
        //setCategories([...categories, 'Bleach']);
        setCategories(cats=>[...categories, 'Bleach']);
    }
    */
    return ( 
        <>

            <h1>GifExpertApp</h1>
            <hr/>
        <AddCategory setCategories={setCategories}/>

            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                        key={category}
                        category={category}/>
                    ))
                }
            </ol>
        </>
     );
}
 
export default GifExpertApp;