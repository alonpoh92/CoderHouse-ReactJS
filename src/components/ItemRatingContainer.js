import ItemRating from "./ItemRating";

const ItemRatingContainer = ({rating}) => {
    
    const aux = Math.round(rating/0.5);
    const halfShow = [];
    let empty = true;

    if(aux > 0){
        empty = false;
    }

    for(let i=1; i<6; i+=1){
        const aux1 = [];
        if((i*2)-1 == aux){
            aux1.push(true);
        }else{
            aux1.push(false);
        }
        if(i*2 == aux){
            aux1.push(true);
        }else{
            aux1.push(false);
        }
        halfShow.push(aux1);
    }
    
    return (
        <>
            <div className="rating rating-sm rating-half">
                <div className="flex items-center">
                    <input type="radio" name="rating-10" className="rating-hidden" defaultChecked={empty}/>
                    {halfShow.map((parts, i) => <ItemRating key={i} parts={parts}/>)}
                    <p className="inline-block ml-2">{rating}</p>
                </div>
                <div className="w-full h-full absolute">
                </div>
            </div>
        </>
    )
}
export default ItemRatingContainer