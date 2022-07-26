import { GifItem } from "./GifItem.jsx";
import { useFetchGifs } from "../hooks/useFetchGifs.js";
import Proptypes from  'prop-types';

export const GiftGrid = ({ category, key }) => {

    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const newImages = await getGifts(category);
    //     setImages(newImages)
    // }

    // useEffect(() => {
    //     getImages();
    // }, [])

    const { images, isLoading } = useFetchGifs(category);
    console.log({ images, isLoading });


    return (
        <>
            <h3>{category}</h3>
            {
                isLoading ? (<h2>Cargando...</h2>): null
                
            }

            <div className="card-grid">
                {
                    images.map((image) => (
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

GiftGrid.Proptypes = {
    category: Proptypes.string.isRequired,
  }