import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const apiKey = "C7IgKP3nG1CMgzOUV3OoYLQmE84SL8sQ";
export const GiftExpertApp = () => {
    const arrCategories = [" One Punch ", "Dragon ball"];
    const [categories, setCategories] = useState(arrCategories);
    
    const onAddCategory = ( ) => {
        //valorant
        console.log('valorant');
        setCategories( [... categories, 'Valorant'] );
        // setCategories( cat => [... cat, 'Valorant'] );
        
    }

    return (
        <>
            {/* titulo */}

            <h1>GiftExpertApp</h1>

            {/* input */}
            <AddCategory/>

            {/* listado fe gif */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                { categories.map( categoriy =>{
                    return <li key={ categoriy }> { categoriy } </li>
                }) }
                
            </ol>
            {/* gif item */}
        </>
    );
};
