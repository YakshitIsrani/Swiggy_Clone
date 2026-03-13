import SingleMenu from "./SingleMenu";
import DualMenu from "./DualMenu";

export default function RestMenu({ FoodMenuData }) {

    return (
        <div className="mt-20 w-[55%] mx-auto">
            {
                FoodMenuData.map((value) => {
                    if ("itemCards" in value?.card?.card) {
                        return (
                            <SingleMenu value={value} key={value?.card?.card?.["@type"] + value?.card?.card?.title}></SingleMenu>
                        )
                    }

                    else if ("categories" in value?.card?.card) {
                        return (
                            <DualMenu value={value} key={value?.card?.card?.["@type"] + value?.card?.card?.title}></DualMenu>
                        )
                    }
                })
            }
        </div>
    )
}