import React, { useState } from 'react';

const AddCategory = ({setCategories}) => {
//state de definicion de el contenedor del input y la funcion que lo contiene
    const [inputValue, setInputValue] = useState('');

        //recibe el input y lo actualiza
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    //condiciones para que se actualice el input cada vez que se escribe
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(cats=>[inputValue, ...cats ]);
            setInputValue('');
        }

    }
    return ( 
        <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />            
        </form>
            
        </>
     );
}
 
export default AddCategory;