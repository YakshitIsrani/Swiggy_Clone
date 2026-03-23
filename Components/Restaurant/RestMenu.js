import SingleMenu from "./SingleMenu";
import DualMenu from "./DualMenu";
import { svg2 } from "../../public/food/SVGs";
import { useState } from "react";


export default function RestMenu({ FoodMenuData }) {
    const [filter, setFilter] = useState(null);
    const [bestSellerFilter,setBestSellerFilter] = useState(false);

    function vegFilter() {
        if (filter === null) {
            setFilter("veg");
        }
        else if (filter === "veg") {
            setFilter(null);
        }
        else
            setFilter("veg");
    }
    function nonVegFilter() {
        if (filter === null) {
            setFilter("nonVeg");
        }
        else if (filter === "nonVeg") {
            setFilter(null);
        }
        else
            setFilter("nonVeg");
    }

    return (
        <div className="mt-20 w-[55%] mx-auto">
            <div className="px-5">
                <div className="flex gap-5 mb-5">
                    <div className="border border-[#02060c26] rounded-3xl px-5 flex items-center">
                        <button
                            onClick={vegFilter}
                            className="py-3 cursor-pointer"
                        >
                                <div className="flex items-center relative">
                                    <div
                                        className={`h-3 w-12 rounded-lg transition-colors duration-300 ${filter === "veg" ? "bg-[#1ba672]" : "bg-[#02060c0d]"
                                            }`}
                                    ></div>
                                    <div className={`absolute transition-transform duration-300 ${filter === "veg" ? "translate-x-7" : "translate-x-0"
                                        }`}>{svg2.vegSvg}</div>
                                </div>           
                        </button>
                    </div>
   
                    <div className="border border-[#02060c26] rounded-3xl px-5  flex items-center">
                        <button
                            onClick={nonVegFilter}
                            className="py-3 cursor-pointer"
                        >
                                <div className="flex items-center relative">
                                    <div
                                        className={`h-3 w-12 rounded-lg transition-colors duration-300 ${filter === "nonVeg" ? "bg-[#fa3c5a]" : "bg-[#02060c0d]"
                                            }`}
                                    ></div>
                                    <div className={`absolute transition-all duration-300 ${filter === "nonVeg" ? "translate-x-7" : "translate-x-0"
                                        }`}>{svg2.nonVegSvg}</div>
                                </div>           
                        </button>
                    </div>

                    <div className={"border rounded-3xl px-5 transition-colors duration-300 "+(bestSellerFilter?"bg-[#f0f0f5] border-[#02060cbf]":"border-[#02060c26]")}>
                        <button className="py-3 flex items-center justify-center gap-2 cursor-pointer" onClick={()=>setBestSellerFilter(!bestSellerFilter)}>
                            <div className="text-[14px] font-bold text-[#02060cbf]">
                                Bestseller
                            </div>
                            {
                                bestSellerFilter && (
                                    <div>{svg2.crossSvg}</div>
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>

            {FoodMenuData.map((value) => {
                if ("itemCards" in value?.card?.card) {
                    return (
                        <SingleMenu
                            value={value}
                            key={value?.card?.card?.["@type"] + value?.card?.card?.title}
                            filter={filter} bestSellerFilter={bestSellerFilter}
                        ></SingleMenu>
                    );
                } else if ("categories" in value?.card?.card) {
                    return (
                        <DualMenu
                            value={value}
                            key={value?.card?.card?.["@type"] + value?.card?.card?.title}
                            filter={filter} bestSellerFilter={bestSellerFilter}
                        ></DualMenu>
                    );
                }
            })}
        </div>
    );
}