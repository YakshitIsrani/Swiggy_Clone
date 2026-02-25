import { foodData } from "../Data/FoodData";
import { instamartData } from "../Data/InstamartData";
import {dineoutRestaurants} from "../Data/DineoutRestroData";

export default function Main(){
    return(
        <div>
            <div className="max-w-[80%] my-30 mx-auto">
                <div className="flex justify-between mb-8">
                    <div className="font-bold text-2xl text-[#02060ceb]">Order our best food options</div>
                    <div></div>
                </div>
                <div className="overflow-x-scroll grid grid-flow-col grid-rows-2 gap-4">
                    {foodData.map((value)=>{
                        return(
                    <button className="w-36 h-45 mr-4 " key={value.id}>
                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.imageId}`} className="h-full w-full object-cover" ></img>
                    </button>)
                    })}
                </div>
            </div>

            <div className="max-w-[80%] my-30 mx-auto">
                <div className="flex justify-between mb-8">
                    <div className="font-bold text-2xl text-[#02060ceb]">Shop groceries on Instamart</div>
                    <div></div>
                </div>
                <div className="overflow-x-scroll grid grid-flow-col grid-rows-1 gap-4">
                    {instamartData.map((value)=>{
                        return(
                            <div className="flex flex-col gap-3" key={value.id}>
                    <button className="w-36 h-45 mr-4 ">
                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.imageId}`} className="h-full w-full object-cover" ></img>
                    </button>
                    <div className="text-center font-bold text-[20px] text-[#02060cbf]">{value.action.text}</div>
                            </div>
                            )
                    })}
                </div>
            </div>

                <div className="max-w-[80%] my-30 mx-auto">
                <div className="flex justify-between mb-8">
                    <div className="font-bold text-2xl text-[#02060ceb]">Discover best restaurants on Dineout</div>
                    <div></div>
                </div>
                <div className="overflow-x-scroll flex flex-nowrap gap-4">
                    {dineoutRestaurants.map((value)=>{
                        const coupon=value.info?.offerInfoV3?.couponOffer;
                        return(
                            <div className=" mr-4 rounded-2xl border-2 border-[#02060c14] h-fit" key={value.info.id}>
                    <button className="flex flex-col " >
                        <div className="w-81.5 h-47.25 relative">
                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.info.mediaFiles[0].url}`} className="h-full w-full object-cover rounded-t-2xl" ></img>
                        <div className="absolute inset-0 bg-linear-to-t  from-black/80 via-black/0 to-transparent"></div>
                        <div className="flex justify-between absolute bottom-2 text-white z-10 min-w-full px-3 font-extrabold text-[20px] gap-5 max-w-full">
                            <div className="whitespace-nowrap overflow-x-hidden text-ellipsis ">{value.info.name}</div>
                            <div className="flex items-center gap-1 min-w-fit"><img className="h-5 w-5 rounded-2xl object-cover" src="https://tse1.mm.bing.net/th/id/OIP.S3qinUY9mFxFcufBsjO1XAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"></img><span>{value.info.rating.value}</span></div>
                        </div>
                        </div>
                        <div className="pt-2 pb-3 px-3">
                            <div className="mt-1 flex justify-between text-[13px] font-medium text-[#02060ca2]">
                                <div><span>{value.info.cuisines?.join(" • ")}</span></div>
                                <div>{value.info.costForTwo}</div>
                            </div>
                            <div className="mt-1 flex justify-between text-[13px] font-medium text-[#02060ca2]">
                                <div>{value.info.locationInfo.formattedAddress}</div>
                                <div>{value.info.locationInfo.distanceString}</div>
                            </div>
                            <div className="mt-2.5"></div>
                            <div>
                                <div className="py-0.5 px-2  flex gap-0.5 items-center bg-[#f0f0f5] w-fit rounded-2xl">
                                    <img className="w-3 h-3" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png"></img>
                                    <div className="text-[13px] font-medium text-[#02060ca2]">{value.info.vendorOffer.offerHighlights[0].logoCtx.text}</div>
                                </div>
                            </div>
                            <div className="flex rounded-lg bg-[#1ba672] text-white mt-3 h-9 px-2 items-center text-[14px] font-bold justify-between">
                                <div className="flex gap-1">
                                    <div><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png" className="w-6.5 h-5"></img></div>
                                <div>{value.info.offerInfoV3.vendorOffer.title+" "+value.info.offerInfoV3.vendorOffer.subtitle}</div>
                                </div>
                                
                                <div>{value.info.offerInfoV3.vendorOffer.subtext}</div>
                            </div>
                            {
                               coupon&&(
                            <div className="pt-3 text-[#5134b6] font-medium text-[14px] flex justify-start">
                                {coupon.title}
                            </div>)
                            }
                        </div>
                    </button>
                    </div>
                            )
                    })}
                </div>
            </div>
        </div>
    )
}