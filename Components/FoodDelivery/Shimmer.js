export default function Shimmer(){
    const arr=[{id:"0"},{id:"1"},{id:"2"},{id:"3"}];
    return (
      <>
        <div className="mt-20 h-96 bg-[#010e22f6] flex justify-center items-center text-white font-medium text-3xl flex-col gap-8">
          {/* <div><img src="https://szinezo.com/wp-content/uploads/2023/06/szep-pizza-szelet-szinezo.jpg" className="w-20 h-20 rounded-full object-cover border-2 border-transparent
                    border-t-white border-r-white/60
                    animate-spin"></img></div> */}

          <div className="relative w-20 h-20 rounded-full">
            {/* rotating ring wrapper */}
            <div className="absolute -inset-1 rounded-full pointer-events-none">
              <div
                className="w-full h-full rounded-full
                    border-2 border-transparent
                    border-t-white border-r-white/60
                    animate-spin"
              ></div>
            </div>

            {/* image */}
            <img
              src={"https://szinezo.com/wp-content/uploads/2023/06/szep-pizza-szelet-szinezo.jpg"}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>Looking for great food near you...</div>
        </div>

        <div className="max-w-[80%] pt-10 pb-20 mx-auto">
          <div className="flex justify-between mb-8">
            <div className="w-90 bg-[#cacccdf6] h-12 relative">
                <div className="absolute inset-0 bg-[#9a9b9cf6] animate-pulse [animation-duration:0.6s]"></div>
            </div>
            <div></div>
          </div>
          <div className="flex gap-4">
            {arr.map((value) => {
              return (
                <div
                  key={value.id}
                  className="w-70 h-64 rounded-3xl bg-[#cacccdf6] mr-4 relative"
                >
                    <div className="absolute inset-0 bg-[#9a9b9cf6] animate-pulse rounded-3xl [animation-duration:0.6s]"></div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
}