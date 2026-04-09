import { useState } from "react";
import FoodItemCard from "./FoodItemCard";
import { svg3 } from "../../public/food/SVGs";

const {upArrowSvg,downArrowSvg}=svg3;


export default function SingleMenu({ value, filter, bestSellerFilter }) {

    const [expanded, setExpanded] = useState(true);
    const filteredItems = value?.card?.card?.itemCards.filter((value) => {
        if (filter === "veg") {
            if (value?.card?.info?.isVeg)
                return true
            else return false
        }
        else if (filter === "nonVeg") {
            if (!("isVeg" in value?.card?.info))
                return true
            else return false
        }
        else return true
    })
    
        const doubleFilteredItems= filteredItems.filter((value)=>{
            if(bestSellerFilter==true){
                if(value?.card?.info?.ribbon?.text==="Bestseller"){
                    return true
                }
                else return false
            }
            else return true
        })

    if (doubleFilteredItems.length == 0)
        return (null);

    else return (
        <div className="w-full px-5 border-t-16 border-[#02060c0d] pt-10" >
            <div className={"flex justify-between cursor-pointer " + (expanded ? "" : "mb-8")} onClick={() => setExpanded(!expanded)}>
                <div className="font-extrabold text-[18px] text-[#02060ceb]">{value.card.card.title + " (" + doubleFilteredItems.length + ")"}</div>
                <div>{expanded ? upArrowSvg : downArrowSvg}</div>
            </div>
            {expanded &&
                doubleFilteredItems.map((value) => {

                    return (
                        <FoodItemCard value={value} key={value?.card?.info?.id}></FoodItemCard>
                    )
                })
            }

        </div>
    )
}