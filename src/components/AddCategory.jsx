import { useState } from "react";
import PropTypes from 'prop-types';


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChang = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        
        event.preventDefault();
        if (inputValue.trim().length <=1) return;
        onNewCategory(inputValue.trim());
        setInputValue ('');
    }

    return (
        <form onSubmit={ (event) => onSubmit(event)} aria-label= "form">
            <input
                type="text"
                placeholder="Busqueda gift"
                value={inputValue}
                onChange={onInputChang}
            />
        </form>
    )
}

AddCategory.PropTypes = {
    onNewCategory: PropTypes.func.isRequired,
}