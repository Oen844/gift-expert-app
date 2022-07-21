import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const apiKey = "C7IgKP3nG1CMgzOUV3OoYLQmE84SL8sQ";
export const GiftExpertApp = () => {
    const arrCategories = [" One Punch ", "Dragon ball"];
    const [categories, setCategories] = useState(arrCategories);

    const onAddCategory = (event) => {
        //valorant
        console.log(event);
        //setCategories([...categories, 'Valorant']);
        // setCategories( cat => [... cat, 'Valorant'] );
        setCategories([...categories, event]);

    }

    return (
        <>
            {/* titulo */}

            <h1>GiftExpertApp</h1>

            {/* input */}
            <AddCategory
                onNewCategory={event => onAddCategory(event)}
            />

            {/* listado fe gif */}

            <ol>
                {categories.map(categoriy => {
                    return <li key={categoriy}> {categoriy} </li>
                })}

            </ol>
            {/* gif item */}
        </>
    );
};
