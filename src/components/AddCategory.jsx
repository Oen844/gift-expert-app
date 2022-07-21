import { useState } from "react"

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChang = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <=1) return;
        setCategories( categories => [ inputValue, ...categories ] );
        setInputValue ('');
    }

    return (
        <form onSubmit={ (event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Busqueda gift"
                value={inputValue}
                onChange={onInputChang}
            />
        </form>
    )
}
