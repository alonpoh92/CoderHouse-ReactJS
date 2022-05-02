const ItemRating = ({parts}) => {
    return (
        <>
            <input type="radio" name="rating-10" className="bg-gray-500 mask mask-star-2 mask-half-1" defaultChecked={parts[0]}/>
            <input type="radio" name="rating-10" className="bg-gray-500 mask mask-star-2 mask-half-2" defaultChecked={parts[1]}/>
        </>
    )
}
export default ItemRating