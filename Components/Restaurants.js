import { useEffect, useState } from "react";

export default function Restaurants(){
    const [data,setData]=useState({});

    useEffect(()=>{
        async function fetchData(){
            try{

                const proxyServer="https://cors-anywhere.herokuapp.com/";
                const swiggyRestaurantsAPI="https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true&third_party_vendor=1";
                const response=await fetch(proxyServer+swiggyRestaurantsAPI);
                const data=await response.json();
                setData(data);
            }
            catch(err){
                console.log("Fetch Failed:"+err)
            };
            
        }
        fetchData();
    },[])

    if(!data?.data){
        return(<div>Fetching Restaurants data</div>)

    }

    return(
        <div className="mt-5">
            
        </div>
    )
}