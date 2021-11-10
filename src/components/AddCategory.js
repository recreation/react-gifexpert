import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {
    const [inputValue, setinputValue] = useState('');
    const handleInputChange = (e) =>{
        //console.log(e.target.value)
        setinputValue(e.target.value);
    }
    const handleSubmit = (e) =>{
        //setCategories();
        e.preventDefault();

        if (inputValue.trim().length>1){

            setCategories( categories => [ inputValue, ...categories ] );
            setinputValue('');
            console.log(12);
        }
    }

    return (
            <form onSubmit={ handleSubmit }>
                <h1>{inputValue}</h1>
                <input type="text" value={inputValue} onChange={ handleInputChange }></input>
            </form>
    )
}

AddCategory.propTypes={
    setCategories : PropTypes.func.isRequired
}