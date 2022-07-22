import { getGifts } from "../helpers/getGifs.js";


export const GiftGrid = ({ category, key }) => {

    getGifts(category);
    

    return (
        <>
            <h3 key={key}>{category}</h3>

        </>
    )
}
