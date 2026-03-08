import { useEffect, useState } from "react";
import { useParams } from "react-router"
import Shimmer from "../FoodDelivery/Shimmer";
import RestHeader from "./RestHeader";
import RestMenu from "./RestMenu";

export default function Restaurant(){

    const [data,setData]=useState(null);

    const {rest}=useParams();
    const lastString=rest.split("-").pop();
    const id=lastString.replace("rest","");

    useEffect(()=>{
        
        async function fetchData(){
            
            try{
                const proxyServer="https://cors-anywhere.herokuapp.com/";
                const swiggyRestaurantsAPI=`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
                const response=await fetch(proxyServer+swiggyRestaurantsAPI);
                const data=await response.json();
                setData(data);
            }
            catch(err){
                console.log("Fetch Failed:"+err);
            };
            
        }
        fetchData();
    },[])

        if(!data?.data){
        // return(<div>Fetching Restaurants data</div>)
        return(<Shimmer></Shimmer>);
    }
    const FoodMenuData=data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    return(
        <>
        <RestHeader></RestHeader>
        <RestMenu FoodMenuData={FoodMenuData}></RestMenu>
        </>
    )
}