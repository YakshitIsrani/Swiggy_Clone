import Categories from "./Categories";

export default function DualMenu({value,filter, bestSellerFilter}) {

     const filteredCategories = value.card?.card?.categories.filter((category) => {
        const filteredItems = category?.itemCards?.filter((item) => {
            if (filter === "veg") {
                return item?.card?.info?.isVeg;
            } 
            else if (filter === "nonVeg") {
                return !("isVeg" in item?.card?.info);
            }
            return true;
        });

        const doubleFilteredItems = filteredItems?.filter((item) => {
            if (bestSellerFilter) {
                return item?.card?.info?.ribbon?.text === "Bestseller";
            }
            return true;
        });

        return doubleFilteredItems?.length > 0;
    });

    if (!filteredCategories || filteredCategories.length === 0) {
        return null;
    }

    return (
        <div className="w-full px-5 border-t-16 border-[#02060c0d] pt-10" >
            <div className="font-extrabold text-[18px] text-[#02060ceb]">{value?.card?.card?.title}</div>

            {
                filteredCategories.map((value) => {
                    return (
                        <Categories key={value?.title} value={value} filter={filter} bestSellerFilter={bestSellerFilter}></Categories>
                    )
                })
            }
        </div>
    )
}