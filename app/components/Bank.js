import App from "next/image";
import Card5 from "next/image";
import Card6 from "next/image";
import Card7 from "next/image";
export default function Bank() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
          All in one bank. Really.
        </h2>
        <p className="text-gray-600 mb-2">
          Senectus et netus et malesuada fames ac turpis.
        </p>
        <p className="text-gray-800 font-medium">
          Sagittis vitae et leo duis ut diam.
        </p>
      </div>

      <div className="mt-16 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
        <div className="bg-gray-50 rounded-2xl px-8 pt-8 md:text-center">
          <h3 className="text-xl font-semibold mb-2">Statistics</h3>
          <p className="text-gray-500 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
          <div className="md:pl-10">
            <App
              src="/image/app5.png"
              width={380}
              height={300}
              alt="bank"
              className="text-center"
            />
          </div>
        </div>
        <div class="bg-gray-50 rounded-2xl text-center flex flex-col justify-between">
          <h3 class="text-xl font-semibold mb-2 pt-8">Cards</h3>
          <p class="text-gray-500 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
          <div className="lg:flex flex-row gap-5 hidden">
            <Card5
              src="/image/card5.png"
              width={150}
              height={50}
              alt="bank"
              className="object-none pt-15 rounded-l-lg "
            />
            <Card6
              src="/image/card6.png"
              width={200}
              height={100}
              alt="bank"
              className="object-none rounded-l-*"
            />
            <Card7
              src="/image/card7.png"
              width={145}
              height={100}
              alt="bank"
              className="object-none pt-15 rounded-r-lg"
            />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 flex gap-8 flex-col md:flex md:flex-row">
        <div className="bg-gray-50 rounded-2xl  md:text-center">
          <div className="p-5 text-start px-8 pt-8 py-20">
            <h1 className="text-[40px] ">Easy integration</h1>
            <p className="text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <div>
              <div class="grid grid-cols-3 gap-4 justify-items-center">
                <div class="bg-white px-4 py-2 rounded shadow flex items-center justify-center">
                  <img src="/image/Vector.png" alt="Webflow" class="h-6" />
                </div>

                <div class="bg-white px-4 py-2 rounded shadow flex items-center justify-center">
                  <img
                    src="/image/Shopify_logo_2018 1.png"
                    alt="Shopify"
                    class="h-6"
                  />
                </div>

                <div class="bg-white px-4 py-2 rounded shadow flex items-center justify-center">
                  <img
                    src="/image/Zapier_logo 1.png"
                    alt="Zapier"
                    class="h-6"
                  />
                </div>

                <div class="bg-white px-4 py-2 rounded shadow flex items-center justify-center">
                  <img src="/image/PayPal 1.png" alt="PayPal" class="h-6" />
                </div>

                <div class="bg-white px-4 py-2 rounded shadow flex items-center justify-center">
                  <img
                    src="/image/Mastercard-logo 1.png"
                    alt="Mastercard"
                    class="h-6"
                  />
                </div>

                <div class="bg-white px-4 py-2 rounded shadow flex items-center justify-center">
                  <img src="/image/Visa_2021 1.png" alt="Visa" class="h-6" />
                </div>

                <div class="bg-white px-4 py-2 rounded shadow flex items-center justify-center">
                  <img
                    src="/image/Apple_Pay_logo 1.png"
                    alt="Google Pay"
                    class="h-6"
                  />
                </div>

                <div class="bg-white px-4 py-2 rounded shadow flex items-center justify-center">
                  <img
                    src="/image/Amazon_Pay_logo 1.png"
                    alt="Amazon Pay"
                    class="h-6"
                  />
                </div>

                <div class="bg-white px-4 py-2 rounded shadow flex items-center justify-center">
                  <img src="/image/Vector.png" alt="Bitcoin" class="h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-2xl  md:text-center">
          <div className="p-5 text-start px-8 pt-8 py-20">
            <h1 className="text-[40px]">Saving accounts</h1>
            <p className="text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <div>
              <div class="grid grid-cols-2 gap-2 justify-items-center">
                <div>
                  <img
                    src="/image/image (2).png"
                    alt="Amazon Pay"
                    class="pl-10"
                  />
                  <div className="text-center pt-8 pl-5">
                    <h2>New Laptop</h2>
                    <p className="text-[#1A191E80] ">400$</p>
                  </div>
                </div>
                <div>
                  <img
                    src="/image/image (1).png"
                    alt="Amazon Pay"
                    class="pl-10"
                  />
                  <div className=" pt-5">
                    <h2>Dream bike</h2>
                    <p className="text-[#1A191E80] ">200$</p>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-2xl  md:text-center">
          <div className="p-5 text-start px-8 pt-8 py-20">
            <h1 className="text-[40px]">Instant transactions</h1>
            <p className="text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <div>
              <div class="px-10">
                <div class="bg-white px-4 py-2 rounded shadow flex items-center  mb-5">
                  <div className="flex gap-8 items-center">
                    <div>
                      <img src="/image/badge.png" alt="Google Pay" />
                    </div>
                    <div className="text-start">
                      <h2>Apple</h2>
                      <p className="text-[#1A191E80]">Shopping</p>
                    </div>
                    <div className="">
                      <p>-799$</p>
                    </div>
                  </div>
                </div>
                <div class="bg-white px-4 py-2 rounded shadow flex items-center  mb-5">
                  <div className="flex gap-8 items-center">
                    <div>
                      <img src="/image/badge (1).png" alt="Google Pay" />
                    </div>
                    <div className="text-start">
                      <h2>Amazon</h2>
                      <p className="text-[#1A191E80]">Shopping</p>
                    </div>
                    <div className="">
                      <p>-99$</p>
                    </div>
                  </div>
                </div>
                <div class="bg-white px-4 py-2 rounded shadow flex items-center  mb-5">
                  <div className="flex gap-8 items-center">
                    <div>
                      <img src="/image/badge (2).png" alt="Google Pay" />
                    </div>
                    <div className="text-start">
                      <h2>Google</h2>
                      <p className="text-[#1A191E80]">Ads</p>
                    </div>
                    <div className="">
                      <p>-99$</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
