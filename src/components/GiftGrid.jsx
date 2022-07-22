import { getGifts } from "../helpers/getGifs.js";
import { useState , useEffect} from "react";

export const GiftGrid = ({ category, key }) => {

    const [counter, setCounter] = useState(10)
    
    useEffect( () => {
        getGifts();
    }, [  ])

    
    

    return (
        <>
            <h3 key={key}>{category}</h3>

            <h5>{ counter }</h5>
            <button onClick={ ( ) => setCounter ( counter + 1 )}>+1</button>

        </>
    )
}
