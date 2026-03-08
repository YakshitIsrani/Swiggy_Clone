export default function RestMenu({FoodMenuData}){

    const vegSvg=<svg className="w-4 h-4"><use href="/food/sprite-CiiAtHUR.svg#vegVeg16"></use></svg>
    const nonVegSvg=<svg className="w-4 h-4"><use href="/food/sprite-CiiAtHUR.svg#nonvegNonVeg16"></use></svg>
    const bestSellerSvg=<svg className="w-18.5 h-4"><use href="/food/sprite-CiiAtHUR.svg#bestseller16"></use></svg>
    const darkGreenRatingStar=<svg className="w-3.5 h-3.5"><path d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z" fill="#116649"></path></svg>
    const lightGreenRatingStar=<svg className="w-3.5 h-3.5"><path d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z" fill="#1BA672"></path></svg>
    const yellowRatingStar=<svg className="w-3.5 h-3.5"><path d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z" fill="#E6A408"></path></svg>

    return(
        <div className="mt-20 w-[55%] mx-auto">
            {
                FoodMenuData.map((value)=>{
                    if("itemCards" in value?.card?.card){
                        return(
                            <div className="w-full px-5 border-t-30 border-gray-400 pt-10" key={value?.card?.card?.["@type"] + value?.card?.card?.title}>
                                <div className="flex justify-between">
                                    <div>{value.card.card.title+"("+value?.card?.card?.itemCards.length+")"}</div>
                                    <div></div>
                                </div>
                                {
                                    value?.card?.card?.itemCards.map((value)=>{
                                        const rating = Number(value?.card?.info?.ratings?.aggregatedRating?.rating);
                                        const noOfRatings=value?.card?.info?.ratings?.aggregatedRating?.ratingCount;
                                        return( 
                                            <div className="flex w-full justify-between gap-5" key={value?.card?.info?.id}>
                                                <div>
                                                    <div>
                                                        <div>
                                                            <span>{((value?.card?.info?.isVeg)?vegSvg:nonVegSvg)}</span>
                                                            <span>{(value?.card?.info.ratings.aggregatedRating.rating > 4.1) && (value?.card?.info.ratings.aggregatedRating.ratingCountV2 > 100) &&  bestSellerSvg }</span>
                                                        </div>

                                                        <div>{value?.card?.info?.name}</div>

                                                        <div>₹{(value?.card?.info?.defaultPrice)/100}</div>
                                                    </div>

                                                    {!(isNaN(rating))&&
                                                    <div className="flex gap-0.5">
                                                        <span>
                                                            {(rating >= 4? darkGreenRatingStar: rating >= 2.7? lightGreenRatingStar: yellowRatingStar)}
                                                        </span>

                                                        <span className={rating >= 4? "text-[#116649]": rating >= 2.7? "text-[#1BA672]": "text-[#E6A408]"}>   {rating}
                                                        </span>

                                                        <span>
                                                            {"("+noOfRatings+")"}
                                                        </span>
                                                    </div>
                                                    }

                                                    <div>{value?.card?.info?.description}</div>
                                                </div>

                                                <div className="flex flex-col">
                                                    <div className="relative flex flex-col items-center">
                                                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+value.card.info.imageId} className="w-39 h-36 object-cover rounded-xl"></img>
                                                        
                                                        <div className="absolute w-fit h-fit bottom-2">
                                                            <button className="w-30 h-10 rounded-xl flex justify-center items-center text-[#1ba672] text-[18px] font-bold">ADD</button>
                                                        </div>
                                                    </div>

                                                    
                                                    <div className="w-full h-5 flex justify-center items-center">
                                                        {(("variantGroups" in value?.card?.info?.variantsV2)|| ("addons" in value?.card?.info)) && <div>Customizable</div>}
                                                    </div>
                                                    
                                                    
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}