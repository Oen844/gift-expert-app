import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

const apiKey = "C7IgKP3nG1CMgzOUV3OoYLQmE84SL8sQ";
export const GiftExpertApp = () => {
    const arrCategories = [" One Punch ", "Dragon ball"];
    const [categories, setCategories] = useState(arrCategories);

    const onAddCategory = (event) => {
        //valorant
        console.log(categories);
        if (categories.includes(event)) return;

        console.log(event);
        //setCategories([...categories, 'Valorant']);
        // setCategories( cat => [... cat, 'Valorant'] );
        setCategories([ event, ...categories]);

    }

    return (
        <>

            <h1>GiftExpertApp</h1>

            <AddCategory
                onNewCategory={event => onAddCategory(event)}

            />




            {categories.map(category =>
            (
                <GiftGrid key={category}
                    category={category}
                />
            )
            )}



        </>
    );
};
