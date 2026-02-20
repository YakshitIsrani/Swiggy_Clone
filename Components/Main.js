import { foodData } from "../Data/FoodData";
import { instamartData } from "../Data/InstamartData";

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
            <div></div>
        </div>
    )
}