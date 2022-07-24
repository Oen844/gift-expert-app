import { useState } from "react";
import { AddCategory } from "./components";
import { GiftGrid } from "./components";

const apiKey = "C7IgKP3nG1CMgzOUV3OoYLQmE84SL8sQ";
export const GiftExpertApp = () => {
    const arrCategories = [" One Punch "];
    const [categories, setCategories] = useState(arrCategories);

    const onAddCategory = (event) => {
        if (categories.includes(event)) return;
        setCategories([event, ...categories]);

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
