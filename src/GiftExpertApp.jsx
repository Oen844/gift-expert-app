import { useState } from "react";

const apiKey = "C7IgKP3nG1CMgzOUV3OoYLQmE84SL8sQ";
export const GiftExpertApp = () => {
    const [categories, setCategories] = useState([" One Punch ", "Dragon ball"]);
    console.log(categories);
    
    return (
        <>
            {/* titulo */}

            <h1>GiftExpertApp</h1>

            {/* input */}

            {/* listado fe gif */}
            <ol>
                { categories.map( categoriy =>{
                    return <li key={ categoriy }> { categoriy } </li>
                }) }
                <li>132</li>
            </ol>
            {/* gif item */}
        </>
    );
};
