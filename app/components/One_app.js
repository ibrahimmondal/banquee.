
export default function One_app() {
  return (
    <section>
        <div className="max-w-[1110px] m-auto text-center pt-20 bg-[#5BB5A2] rounded-lg">
           
   <div className="flex gap-20 flex-col md:flex-row">
   <div className="pl-20 pb-10">
          <h1 className="text-5xl font-semibold text-white text-left dm-sans">
            One app. <br /> One banking.
          </h1> 
          <p className="text-[17px] text-teal-100 max-w-[500px] text-start py-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-white">
            <div className="flex items-center space-x-2">
            <i className="fa-solid fa-check bg-white opacity-50 text-[#5BB5A2] p-1.5 rounded-3xl"></i>
              <span>Instant transactions</span>
            </div>
            <div className="flex items-center space-x-2">
            <i className="fa-solid fa-check bg-white opacity-50 text-[#5BB5A2] p-1.5 rounded-3xl"></i>
              <span>Payments worldwide</span>
            </div>
            <div className="flex items-center space-x-2">
            <i className="fa-solid fa-check bg-white opacity-50 text-[#5BB5A2] p-1.5 rounded-3xl"></i>
              <span>Saving accounts</span>
            </div>
            <div className="flex items-center space-x-2">
            <i className="fa-solid fa-check bg-white opacity-50 text-[#5BB5A2] p-1.5 rounded-3xl"></i>
              <span>100% mobile banking</span>
            </div>
            <div className="py-5">
            <img src="/image/grid (1).png" alt="oneapp" className="w-full"/>
            </div>
          </div>
   </div>
 <div className="md:pr-20 mx-10">
        <img src="/image/app (6).png" alt="oneapp" className="w-full mt-12" height="700"/>
 </div>
   </div>
       
        </div>
    </section>
  )
}
