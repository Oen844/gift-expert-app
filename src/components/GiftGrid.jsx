import { useState, useEffect } from "react";
import { GifItem } from "./GifItem.jsx";
import { getGifts } from "../helpers/getGifs.js";

export const GiftGrid = ({ category, key }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifts(category);
        setImages(newImages)
    }

    useEffect(() => {
        getImages();
    }, [])


    return (
        <>
            <h3>{category}</h3>

            <div className="card-grid">
                {
                    images.map(( image ) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />


                    ))
                }
            </div>
        </>
    )
}
