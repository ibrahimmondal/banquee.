
export default function Accounts() {
  return (
    <section>
        <div className="text-center py-20">
            <p className="text-[20px]">Accounts</p>
            <h1 className="text-[64px] font-semibold">Choose your card.</h1>
            <p className="text-2xl max-w-[600px] m-auto">Senectus et netus et malesuada fames ac turpis. 
            Sagittis vitae et leo duis ut diam.</p>
        </div>
        <div className="  flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="bg-white rounded-lg  flex flex-col items-center p-6 borde">
          <div className="flex items-center space-x-2 mb-4">
            <h3 className="text-lg font-bold">Basic</h3>
            <span className="text-xs text-teal-500 bg-[#E8F2EE] px-2 py-0.5 rounded-full">Popular</span>
          </div>
          <h2 className="text-4xl font-bold mb-2">Free</h2>
          <p className="text-gray-500 mb-6 text-center max-w-[300px] py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
    <img src="/image/card (9).png" alt="card" className="pb-10"/>

          <button className="w-full bg-[#5BB5A2] text-white py-2 rounded hover:bg-teal-500 transition">
            Get started
          </button>
        </div>
        <div className="bg-white rounded-lg  flex flex-col items-center p-6 borde">
          <div className="flex items-center space-x-2 mb-4">
            <h3 className="text-lg font-bold">Premium</h3>
          
          </div>
          <h2 className="text-4xl font-bold mb-2">$5 <span className="text-[#1A191E80] text-[16px] font-mono">per month</span></h2>
          <p className="text-gray-500 mb-6 text-center max-w-[300px] py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
    <img src="/image/card (10).png" alt="card" className="pb-10"/>

          <button className="w-full bg-[#5BB5A2] text-white py-2 rounded hover:bg-teal-500 transition">
            Get started
          </button>
        </div>
        <div className="bg-white rounded-lg  flex flex-col items-center p-6 borde">
          <div className="flex items-center space-x-2 mb-4">
            <h3 className="text-lg font-bold">Basic</h3>
            
          </div>
          <h2 className="text-4xl font-bold mb-2">$10 <span className="text-[#1A191E80] text-[16px] font-mono">per month</span></h2>
          <p className="text-gray-500 mb-6 text-center max-w-[300px] py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
    <img src="/image/card (11).png" alt="card" className="pb-10"/>

          <button className="w-full bg-[#5BB5A2] text-white py-2 rounded hover:bg-teal-500 transition">
            Get started
          </button>
        </div>

      </div>
    </div>
    </section>
  )
}
