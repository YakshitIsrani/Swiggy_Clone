export default function Header(){
    return(
        <div className="bg-[#ff5200] text-white">
            <div className="py-8 flex justify-center  font-bold">
                <div className="w-[80%] flex justify-between items-center">
                <a  href="/">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" className="w-40 h-12"></img>
                </a>

                <div className="flex gap-8 items-center">
                    <button><a href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate
                        </a></button>
                    <button>
                        <a href="https://partner.swiggy.com/food/#!/login" target="_blank">Partner with us</a>
                        </button>
                    <a href="" className="border py-4 px-6 rounded-xl inline-block">
                        Get the App</a>
                    <button className="bg-black rounded-xl py-4 px-4"><a href="" className="px-7">
                        Sign in</a></button>
                </div>
                </div>
            </div>

            <div className="pt-16 pb-8 relative">
                <div className="flex justify-center">
                    <div className="w-[55%] text-center text-5xl font-bold z-10">
                    Order food & groceries. Discover best restaurants. Swiggy it!
                    </div>
                </div>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" className="absolute top-0 left-0 h-112.5 w-62.5"></img>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" className="h-112.5 w-62.5 absolute top-0 right-0"></img>

                <div className="flex flex-row justify-center pt-6 gap-6">
                    <div className="bg-white px-4 flex gap-2.5 border-[1.5px] border-[#02060c26] items-center w-fit rounded-2xl z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                        <path d="M10.115 21.8122C12.4772 19.4062 17.7886 13.4751 17.7886 8.78883C17.7886 3.79647 13.9976 0 9.00526 0C4.0129 0 0.210938 3.79647 0.210938 8.78883C0.210938 13.4755 5.52998 19.4073 7.89476 21.8129C8.51149 22.4403 9.49871 22.44 10.115 21.8122ZM8.99988 12.7888C11.4269 12.7888 13.3943 10.8214 13.3943 8.39441C13.3943 5.96745 11.4269 4 8.99988 4C6.57292 4 4.60547 5.96745 4.60547 8.39441C4.60547 10.8214 6.57292 12.7888 8.99988 12.7888Z" fill="#ff5200" fillRule="evenodd"></path>
                        </svg>
                        <input type="text" placeholder="Enter your delivery location" className="h-14.5 text-[#02060c99] text-lg font-medium outline-none" defaultValue="Delhi, India"></input>
                        <svg className="w-5 h-5.25">
                            <path d="M1.372 6.15a1.1 1.1 0 0 0-.117 1.552l7.184 8.355.03.035c.149.173.327.381.504.536.212.186.564.427 1.058.427s.847-.24 1.059-.427c.177-.155.355-.363.504-.536l.03-.035 7.12-8.282a1.1 1.1 0 0 0-1.668-1.434l-7.045 8.194-7.108-8.267a1.1 1.1 0 0 0-1.55-.117" fillRule="evenodd"></path>
                        </svg>
                    </div>

                    <div className="bg-white w-fit flex items-center rounded-2xl border-[1.5px] border-[#02060c26] z-10 px-5">
                        <a className=" h-full flex items-center cursor-default" href="https://www.swiggy.com/search">
                            <div className="flex items-center gap-28">
                        <div className="text-[#02060c73] text-[18px] font-medium">Search for restaurant, item or more</div>
                        <img src="https://openclipart.org/image/2400px/svg_to_png/213239/Search-icon.png" className="w-5 h-5"></img>
                    </div>
                        </a>
                    </div>
                    
                </div>
            </div>

            <div className="max-w-[80%] my-0 mx-auto flex pb-10">
                <div>
                    <a href="https://www.swiggy.com/restaurants">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" className="w-full h-full"></img>
                    </a>
                </div>
                <div>
                    <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" className="w-full h-full"></img>
                    </a>
                </div>
                <div>
                    <a href="https://www.swiggy.com/dineout">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" className="w-full h-full"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}