import { svg } from "../../public/food/SVGs";
import RestItemDescri from "./RestItemDescri";
const { vegSvg, nonVegSvg, bestSellerSvg, darkGreenRatingStar, lightGreenRatingStar, yellowRatingStar } = svg;

export default function RestMenu({ FoodMenuData }) {


    return (
        <div className="mt-20 w-[55%] mx-auto">
            {
                FoodMenuData.map((value) => {
                    if ("itemCards" in value?.card?.card) {
                        return (
                            <div className="w-full px-5 border-t-16 border-[#02060c0d] pt-10" key={value?.card?.card?.["@type"] + value?.card?.card?.title}>
                                <div className="flex justify-between">
                                    <div className="font-extrabold text-[18px] text-[#02060ceb]">{value.card.card.title + " (" + value?.card?.card?.itemCards.length + ")"}</div>
                                    <div></div>
                                </div>
                                {
                                    value?.card?.card?.itemCards.map((value) => {
                                        const rating = Number(value?.card?.info?.ratings?.aggregatedRating?.rating);
                                        const ratingCount = Number(value?.card?.info?.ratings?.aggregatedRating?.ratingCountV2);

                                        return (
                                            <div className="flex w-full justify-between py-8 border-b border-b-gray-300" key={value?.card?.info?.id}>
                                                <div className="max-w-138">
                                                    <div>
                                                        <div className="flex items-center gap-1">
                                                            <span>{(("isVeg" in value?.card?.info) ? vegSvg : nonVegSvg)}</span>
                                                            <span>{!(isNaN(rating)) && (rating >= 4.1) && (ratingCount >= 100) && bestSellerSvg}</span>
                                                        </div>

                                                        <div className="font-bold text-[18px] text-[#02060cbf]">{value?.card?.info?.name}</div>

                                                        <div className="text-[16px] font-bold text-[#02060ceb] mb-3">₹{(value?.card?.info?.defaultPrice) ? ((value?.card?.info?.defaultPrice) / 100) : ((value?.card?.info?.price) / 100)}</div>
                                                    </div>

                                                    {!(isNaN(rating)) &&
                                                        <div className="flex gap-0.5 items-center mb-3">
                                                            <span>
                                                                {(rating >= 4 ? darkGreenRatingStar : rating >= 2.7 ? lightGreenRatingStar : yellowRatingStar)}
                                                            </span>

                                                            <span className={(rating >= 4 ? "text-[#116649]" : rating >= 2.7 ? "text-[#1BA672]" : "text-[#E6A408]") + " font-bold text-[14px]"}>   {rating}
                                                            </span>

                                                            <span className="font-bold text-[14px] text-[#02060c99]">
                                                                {"(" + ratingCount + ")"}
                                                            </span>
                                                        </div>
                                                    }

                                                    <RestItemDescri desc={value?.card?.info?.description}></RestItemDescri>

                                                </div>

                                                <div className="flex flex-col">
                                                    <div className="flex flex-col items-center relative">
                                                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + value.card.info.imageId} className="h-39 w-41 object-cover rounded-xl"></img>

                                                        <div className="absolute w-fit h-fit top-33 z-10">
                                                            <button className="w-30 h-10 rounded-xl flex justify-center items-center text-[#1ba672] text-[18px] font-bold bg-white border  border-[#25282c66] z-20 cursor-pointer">ADD</button>
                                                        </div>
                                                    </div>

                                                    {
                                                        (("variantGroups" in value?.card?.info?.variantsV2) || ("addons" in value?.card?.info)) &&
                                                        <div className="w-full flex justify-center items-center mt-6 text-[#25282ca6] text-[15px] font-medium">
                                                            <div>Customizable</div>
                                                        </div>
                                                    }



                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        )
                    }

                    else if ("categories" in value?.card?.card) {
                        return (
                            <div className="w-full px-5 border-t-16 border-[#02060c0d] pt-10" key={value?.card?.card?.["@type"] + value?.card?.card?.title}>
                                <div className="font-extrabold text-[18px] text-[#02060ceb]">{value.card.card.title}</div>

                                {
                                    value.card?.card?.categories.map((value) => {
                                        return (
                                            <div className="pt-5" key={value?.title}>
                                                <div className="flex justify-between">
                                                    <div className="font-bold text-[16px] text-[#02060ceb]">{value?.title + " (" + value?.itemCards.length + ")"}</div>
                                                    <div></div>
                                                </div>

                                                {
                                                    value?.itemCards.map((value) => {
                                                        const rating = Number(value?.card?.info?.ratings?.aggregatedRating?.rating);
                                                        const ratingCount = Number(value?.card?.info?.ratings?.aggregatedRating?.ratingCountV2);

                                                        return (
                                                            <div className="flex w-full justify-between py-8 border-b border-b-gray-300" key={value?.card?.info?.id}>
                                                                <div className="max-w-138">
                                                                    <div>
                                                                        <div className="flex items-center gap-1">
                                                                            <span>{(("isVeg" in value?.card?.info) ? vegSvg : nonVegSvg)}</span>
                                                                            <span>{!(isNaN(rating)) && (rating >= 4.1) && (ratingCount >= 100) && bestSellerSvg}</span>
                                                                        </div>

                                                                        <div className="font-bold text-[18px] text-[#02060cbf]">{value?.card?.info?.name}</div>

                                                                        <div className="text-[16px] font-bold text-[#02060ceb] mb-3">₹{(value?.card?.info?.defaultPrice) ? ((value?.card?.info?.defaultPrice) / 100) : ((value?.card?.info?.price) / 100)}</div>
                                                                    </div>

                                                                    {!(isNaN(rating)) &&
                                                                        <div className="flex gap-0.5 items-center mb-3">
                                                                            <span>
                                                                                {(rating >= 4 ? darkGreenRatingStar : rating >= 2.7 ? lightGreenRatingStar : yellowRatingStar)}
                                                                            </span>

                                                                            <span className={(rating >= 4 ? "text-[#116649]" : rating >= 2.7 ? "text-[#1BA672]" : "text-[#E6A408]") + " font-bold text-[14px]"}>   {rating}
                                                                            </span>

                                                                            <span className="font-bold text-[14px] text-[#02060c99]">
                                                                                {"(" + ratingCount + ")"}
                                                                            </span>
                                                                        </div>
                                                                    }

                                                                    <RestItemDescri desc={value?.card?.info?.description}></RestItemDescri>

                                                                </div>

                                                                <div className="flex flex-col">
                                                                    <div className="flex flex-col items-center relative">
                                                                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + value.card.info.imageId} className="h-39 w-41 object-cover rounded-xl"></img>

                                                                        <div className="absolute w-fit h-fit top-33 z-10">
                                                                            <button className="w-30 h-10 rounded-xl flex justify-center items-center text-[#1ba672] text-[18px] font-bold bg-white border  border-[#25282c66] z-20 cursor-pointer">ADD</button>
                                                                        </div>
                                                                    </div>

                                                                    {
                                                                        (("variantGroups" in value?.card?.info?.variantsV2) || ("addons" in value?.card?.info)) &&
                                                                        <div className="w-full flex justify-center items-center mt-6 text-[#25282ca6] text-[15px] font-medium">
                                                                            <div>Customizable</div>
                                                                        </div>
                                                                    }



                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }

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