import Upper from "./Upper"
import Restaurants from "./Restaurants"

export default function Middle({data}){
    return(
        <>
        <Upper data={data}></Upper>
        <Restaurants data={data}></Restaurants>
        </>
    )
}