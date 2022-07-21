import { useState } from "react"

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChang = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
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
