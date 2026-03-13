import Categories from "./Categories";

export default function DualMenu({value}) {

    return (
        <div className="w-full px-5 border-t-16 border-[#02060c0d] pt-10" >
            <div className="font-extrabold text-[18px] text-[#02060ceb]">{value?.card?.card?.title}</div>

            {
                value.card?.card?.categories.map((value) => {
                    return (
                        <Categories key={value?.title} value={value}></Categories>
                    )
                })
            }
        </div>
    )
}