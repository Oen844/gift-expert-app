import { GifItem } from "./GifItem.jsx";
import { useFetchGifs } from "../hooks/useFetchGifs.js";

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
