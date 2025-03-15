import Transactionss from "next/image";
export default function Advanced_Statistics() {
  return (
    <section className="py-30">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center gap-10 flex-col md:flex-row px-4">
        <div>
          <p className="text-[20px]">Advanced Statistics</p>
          <h1 className="max-w-[530px] text-[60px] font-semibold leading-none py-5">
            Keep control over your money
          </h1>
          <p className="max-w-[530px] text-[18px] pb-5">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="flex gap-2 py-5">
            <spam>
              <i className="fa-solid fa-check bg-[#E8F2EE] text-teal-500 p-1.5 rounded-3xl"></i>
            </spam>
            <h3 className="">Malesuada Ipsum</h3>
          </div>
          <div className="flex gap-2 pb-4">
            <spam>
              <i className="fa-solid fa-check bg-[#E8F2EE] text-teal-500 p-1.5 rounded-3xl"></i>
            </spam>
            <h3>Vestibulum</h3>
          </div>
          <div className="flex gap-2">
            <spam>
              <i className="fa-solid fa-check bg-[#E8F2EE] text-teal-500 p-1.5 rounded-3xl"></i>
            </spam>
            <h3>Parturient Lorem</h3>
          </div>
        </div>
        <div>
          <Transactionss src={"/image/app3.png"} width={300} height={300} />
        </div>
      </div>
    </section>
  );
}
