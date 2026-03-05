import { Link } from "react-router";

export default function Upper({ data }) {
    return (
        <div className="mt-20">
            <div className="max-w-[80%] pt-2.5 pb-20 mx-auto border-b-2 border-[#02060c1a]">
                <div className="flex justify-between mb-8">
                    <div className="font-extrabold text-[21px] text-[#02060ceb]">
                        What's on your mind?
                    </div>
                    <div></div>
                </div>
                <div className="overflow-x-scroll grid grid-flow-col grid-rows-1 gap-4">
                    {data.data?.cards[0]?.card?.card?.imageGridCards?.info.map(
                        (value) => {
                            return (
                                <button className="w-36 h-45 mr-4 cursor-pointer" key={value?.id} >
                                    <img
                                        src={`https://media-assets.swiggy.com/swiggy/image/upload/${value?.imageId}`}
                                        className="h-full w-full object-cover"
                                    ></img>
                                </button>
                            );
                        },
                    )}
                </div>
            </div>
            

            <div className="max-w-[80%] pt-10 pb-20 mx-auto border-b-2 border-[#02060c1a]">
                <div className="flex justify-between mb-8">
                    <div className="font-extrabold text-[21px] text-[#02060ceb]">
                        Top restaurant chains in Delhi
                    </div>
                    <div></div>
                </div>
                <div className="overflow-x-scroll flex flex-nowrap gap-4">
                    {data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
                        (value) => {
                            const subheader = value.info?.aggregatedDiscountInfoV3?.subHeader;
                            return (
                                <Link to={"/city/Delhi/"+value.info?.name+"-"+value.info?.areaName+"-"+"rest"+value.info?.id} key={value.info?.id}>
                                <div
                                    className=" mr-4 h-fit w-70 flex-none transform transition hover:scale-95 duration-100"
                                >
                                    <button className="flex flex-col w-full h-fit cursor-pointer">
                                        <div className="w-full h-46 relative rounded-2xl">
                                            <img
                                                src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.info?.cloudinaryImageId}`}
                                                className="h-full w-full object-cover rounded-2xl shadow-[0_-0px_4px_rgba(0,0,0,0.4)"
                                            ></img>
                                            <div className="absolute inset-0 bg-linear-to-t from-black/99 via-black/0 to-transparent rounded-2xl"></div>
                                            <div className="flex justify-between absolute bottom-2 text-white z-10 min-w-full px-3 font-extrabold text-[20px] gap-5 max-w-full">
                                                <div className="whitespace-nowrap overflow-x-hidden text-ellipsis ">
                                                    {value.info?.aggregatedDiscountInfoV3?.header}
                                                    <span> {subheader}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-2 px-3 w-full">
                                            <div className="justify-start text-[18px] font-bold w-full whitespace-nowrap overflow-x-hidden text-ellipsis text-left">
                                                {value.info?.name}
                                            </div>
                                        </div>
                                        <div className="flex text-[16px] font-medium px-3 gap-1 w-full ">
                                            <div className="flex items-center gap-1">
                                                <img
                                                    className="h-4 w-4 rounded-2xl object-cover"
                                                    src="https://tse1.mm.bing.net/th/id/OIP.S3qinUY9mFxFcufBsjO1XAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
                                                ></img>
                                                <span>{value.info?.avgRating + " • "}</span>
                                            </div>
                                            <div className="font-bold whitespace-nowrap overflow-x-hidden text-ellipsis">
                                                {value.info?.sla?.slaString}
                                            </div>
                                        </div>
                                        <div className="pt-1 px-3 max-w-full">
                                            <div className="text-[15px] font-medium text-[#02060ca2] w-full whitespace-nowrap overflow-x-hidden text-ellipsis text-left">
                                                {value.info?.cuisines?.join(", ")}
                                            </div>
                                        </div>
                                        <div className=" pb-1 px-3 w-full">
                                            <div className="mt-1 text-[15px] font-medium text-[#02060ca2] w-full whitespace-nowrap overflow-x-hidden text-ellipsis text-left">
                                                {value.info?.areaName}
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                </Link>
                            );
                        },
                    )}
                </div>
            </div>
        </div>
    );
}
