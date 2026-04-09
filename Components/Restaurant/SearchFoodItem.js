import { useEffect, useState } from "react";
import {Link, useParams } from "react-router"
import FoodItemCard from "./FoodItemCard";

export default function SearchFoodItem(){
    const {rest}=useParams();
    const restArray=rest.split("-");
    const restName=restArray[0];
    const cleanRestName=restName.replaceAll("+"," ");

    const lastString=restArray.pop();
    const id=lastString.replace("rest","");

    const [search,setSearch]=useState("");
    const [foodItemCardsOne, setFoodItemCardsOne] = useState([]);
    const [foodItemCardsTwo, setFoodItemCardsTwo] = useState([]);
    const [data,setData]= useState(null);

    useEffect(()=>{
        
        async function fetchData(){
            
            try{
                const proxyServer="https://cors-anywhere.herokuapp.com/";
                const swiggyRestaurantsAPI=`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
                const response=await fetch(proxyServer+swiggyRestaurantsAPI);
                const data=await response.json();
                setData(data);
                setFoodItemCardsOne(data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((value)=>("itemCards" in value?.card?.card)));     
                setFoodItemCardsTwo(data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((value)=>("categories" in value?.card?.card)));   
                console.log(data);    
                console.log(foodItemCardsOne);
                console.log(foodItemCardsTwo);
            }
            catch(err){
                console.log("Fetch Failed:"+err);
            };
            
        }
        fetchData();
    },[])



    const combinedFoodItems = [
        ...foodItemCardsOne.flatMap((value) => value?.card?.card?.itemCards),
        ...foodItemCardsTwo.flatMap((value) => {
            return (
                value?.card?.card?.categories?.flatMap((category) => category?.itemCards)
            )
        })
    ].filter((item, index, self) => index === self.findIndex((obj) => (obj?.card?.info?.name === item?.card?.info?.name)))


    // .filter((itemCards)=>(itemCards?.card?.info?.name?.toLowerCase().includes(search.toLowerCase())))?
    // ?

    return(
        <div className="min-h-dvh flex flex-col">
            <div className="bg-white h-20 shadow-[0_0px_3px_rgba(0,0,0,0.04)]">

            </div>
            <div className="flex-1 bg-[#b7b7b72d]">
                <div className="w-[55%] mx-auto pt-12">
                    <div className="px-5 border-b border-[#02060c26] pb-3 flex">
                        <Link to={"/city/Delhi/"+rest}>
                        <div className="mr-5 flex justify-center items-center cursor-pointer">
                            <img src="https://img.icons8.com/?size=100&id=357&format=png&color=000000" className="w-7 h-7"></img>
                        </div>
                        </Link>
                        <div className="flex items-center w-full">
                            <div className="flex w-full">
                                <input autoFocus placeholder={"Search in "+cleanRestName} className="text-[#02060c] text-[1.1rem]  font-medium outline-none w-full" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
                            </div>
                            <div>
                                { 
                                    <img src={(search.length==0)?"https://img.icons8.com/?size=100&id=59878&format=png&color=000000":"https://img.icons8.com/?size=100&id=7r7sgBQlDEVY&format=png&color=000000"} className={"w-6 h-6"+(search.length!=0?" cursor-pointer":"")} onClick={(search.length>0)?(()=>{setSearch("")}):null} ></img>

                                }
                            </div>
                        </div>
                    </div>
                    {
                        (search.length > 1 && data != null) && (

                            <div className="pt-5">
                                {
                                    combinedFoodItems.filter((itemCards) => (itemCards?.card?.info?.name?.toLowerCase().includes(search.toLowerCase())))?.map((value) => {
                                        return (
                                            <FoodItemCard value={value} key={value?.card?.info?.id}></FoodItemCard>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}