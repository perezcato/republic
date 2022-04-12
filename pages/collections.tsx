import React from 'react';
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import Image from 'next/image'

const Collections = () => {
  return (
    <div className="bg-[url('/imgs/collections_bg.png')] bg-center bg-cover min-h-screen flex flex-col ">
      <Navbar />
      <main className="flex-1 w-full ">
        <div className="px-8 md:px-12 lg:px-20 max-w-1440 mx-auto w-full text-white grid grid-cols-1 gap-y-10 lg:gap-y-0 md:grid-cols-2">
          <div className="h-full flex items-center justify-center order-last md:order-first">

            <div className="flex flex-col justify-center lg:items-start">
              <div className="space-y-1">
                <p className="font_proxima font-light text-blue tracking-[0.3em] text-xl">EXCLUSIVE</p>
                <h1 className="font-abril text-4xl">MEMBERSHIP NFT</h1>
              </div>

              <p className="md:w-[385px] text-[#A9ABC3] text-sm mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <h4 className="font-proxima font-semibold text-lg mt-6">Holder Exclusive Perks</h4>
              <ul className="text-[#A9ABC3] text-sm list-disc mt-6 ml-4">
                <li>LiveStream Tour Pass</li>
                <li>Limited Exclusive Merch</li>
                <li>Virtual Back Stage Pass</li>
                <li>Exclusive Interviews & Live AMAs</li>
              </ul>

              <button className="mt-9 border font-proxima rounded-full border-blue py-4 w-[206px] uppercase text-xs font-bold">Mint Your NFT</button>
            </div>


          </div>
          <div className="flex justify-center items-center md:justify-end lg:justify-center py-14">
            <div className="relative h-[430px] lg:h-[636px] w-full md:w-full lg:w-[398px] ">
              <Image
                src="/imgs/musician.png"
                alt="collections"
                layout="fill"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="px-8 md:px-12 lg:px-20 section_height max-w-1440 mx-auto w-full text-white flex flex-col justify-center items-start grid grid-cols-1 md:grid-cols-2 gap-x-5 ">
          <div className="h-full flex items-center justify-center">
            <div className="relative h-[600px] w-full">
              <Image layout="fill" src={'/imgs/black_canvas.png'} className="object-contain xl:object-cover"/>
            </div>
          </div>
          <div className="h-full flex flex-col justify-center items-center">
            <div>
              <div className="space-y-1 lg:-mt-28 ">
                <p className="font_proxima font-light text-blue tracking-[0.3em] text-xl">EXCLUSIVE</p>
                <h1 className="font-abril text-4xl">MEMBERSHIP NFT</h1>
              </div>
              <p className="lg:w-[385px] text-[#A9ABC3] text-sm mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <h4 className="font-proxima font-semibold text-lg mt-6">Holder Exclusive Perks</h4>
              <ul className="text-[#A9ABC3] text-sm list-disc mt-6 ml-4">
                <li>LiveStream Tour Pass</li>
                <li>Limited Exclusive Merch</li>
                <li>Virtual Back Stage Pass</li>
                <li>Exclusive Interviews & Live AMAs</li>
              </ul>
              <button className="mt-9 border font-proxima rounded-full border-blue py-4 w-[206px] uppercase text-xs font-bold">Mint Your NFT</button>
            </div>
          </div>
        </div>

        <div className=" bg-[url('/imgs/collections_bottom.png')] bg-cover bg-center mt-28 xl:mt-12">
          <div className=" px-8 md:px-12 lg:px-20 max-w-1440 mx-auto w-full ">
            <div className="bg-[#0D1432] grid grid-cols-1 lg:grid-cols-2 section_shadow border-blue border rounded-[4px] py-10 lg:py-16">
              <div className="flex items-center justify-center order-last lg:order-first py-12 lg:py-0">
                <div className="relative w-full lg:w-[280px] h-[53px] lg:h-[73px] ">
                  <Image layout="fill" src={'/imgs/immutablex.png'} className="object-contain" />
                </div>
              </div>

              <div className="px-8 xl:px-16">
                <h3 className="text-blue font-proxima text-lg md:text-xl text-left md:text-center lg:text-left">This NFT is 100% Carbon Neutral!</h3>
                <p className="text-[#A9ABC3]/[.9] mt-4 text-sm md:text-base md:text-center lg:text-left">The issuance and transfer of this NFT takes place on the ImmutableX blockchain technology and is
                  100% carbon-neutral. Please learn more about it here from ImmutableX directly or here from the
                  independent source our-trace.com, highlighting that ImmutableX is a climate positive business.</p>
              </div>
            </div>


            <div className="section_height_2 text-white flex items-center justify-center flex-col ">

              <h3 className="font-abril text-5xl">JOIN US</h3>
              <p className="font-proxima lg:text-lg mt-8 text-center">The Tikat community is on fire and something we <br/> are so proud of! Don’t miss a beat by joining us:</p>
              <div className="flex items-center space-x-7 mt-8">
                <div>
                  <svg width="52" height="38" viewBox="0 0 52 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_14_242)">
                      <path d="M50.542 18.7181C49.4445 14.0206 47.9332 9.47758 45.8019 5.15511C45.6793 4.88828 45.4913 4.658 45.256 4.4864C41.8116 2.07218 38.0902 0.421032 33.8647 0.064856C33.2388 0.0117834 32.9016 0.167463 32.6084 0.685216C36.426 1.9625 40.0743 3.54878 43.229 6.12221C43.3003 6.13766 43.3652 6.17501 43.415 6.22922C43.4647 6.28343 43.4969 6.35188 43.5072 6.42532C43.4529 6.43359 43.3975 6.42522 43.3479 6.40127C43.2984 6.37732 43.257 6.33888 43.229 6.29087C41.3805 5.33556 39.4949 4.46871 37.5212 3.81414C34.2923 2.7409 30.9905 2.09105 27.5889 1.98491C25.5675 1.90476 23.5429 1.98362 21.5334 2.22078C20.0557 2.40713 18.5757 2.55927 17.1189 2.89776C14.0223 3.61048 11.0302 4.73091 8.21815 6.23072C8.09414 6.29794 7.97824 6.43357 7.79397 6.29205C9.49124 4.92204 11.3376 3.75504 13.2967 2.81402C15.2206 1.8705 17.2371 1.16287 19.3557 0.469387C19.0602 0.247662 18.957 -0.0401099 18.6117 -1.0564e-05C17.9464 0.091982 17.2684 0.117929 16.6113 0.235868C13.1275 0.864484 9.96006 2.26442 7.05687 4.31067C6.66233 4.58579 6.34675 4.9627 6.14246 5.40278C4.12935 9.54363 2.66559 13.8779 1.61094 18.3643C0.934429 21.2544 0.473399 24.1924 0.231786 27.1531C0.148342 28.1686 0.215561 29.1911 0.0440356 30.2019C-0.0382502 30.6842 -0.0069585 31.1725 0.32798 31.5924C0.873847 32.2764 1.4174 32.9616 2.06641 33.5537C5.2489 36.4656 9.03753 37.7865 13.2561 37.9941C13.3797 38.004 13.5036 37.9802 13.6151 37.925C13.7265 37.8699 13.8215 37.7854 13.8901 37.6804C14.6446 36.7156 15.3967 35.7485 16.1697 34.7968C16.434 34.4701 16.5557 34.325 16.0086 34.1387C13.5551 33.3131 11.3728 32.0158 9.60889 30.0674C9.35045 29.7844 9.06071 29.5107 8.94133 29.131C20.4811 35.6719 31.9756 35.8806 43.6034 29.013C41.486 31.8436 38.7358 33.4192 35.5637 34.4382C36.4654 35.5634 37.3311 36.6378 38.1887 37.7193C38.26 37.8216 38.3581 37.9015 38.4718 37.9499C38.5855 37.9982 38.7103 38.0132 38.8319 37.9929C40.1844 37.875 41.5254 37.724 42.85 37.3785C46.3918 36.4562 49.3587 34.6411 51.6442 31.7174C51.8898 31.4144 52.0183 31.0307 52.0058 30.6382C51.9865 28.8563 51.877 27.0766 51.6778 25.3062C51.4267 23.0894 51.0475 20.8895 50.542 18.7181ZM19.0184 26.7981C18.5943 26.9349 18.1701 27.0258 17.7946 26.9868C15.6749 26.9868 13.9527 25.5987 13.3442 23.4593C12.7056 21.2184 13.4833 18.8302 15.253 17.6154C17.7424 15.9064 21.3526 17.1943 22.1557 20.1605C22.8221 22.6349 21.7884 25.903 19.015 26.7981H19.0184ZM35.34 26.7639C34.9208 26.9262 34.474 27.002 34.0258 26.9868C31.4645 27.0517 29.6994 24.8038 29.4444 22.6915C29.2033 20.6948 29.7689 19.0106 31.3196 17.7781C33.3512 16.1612 36.1351 16.6683 37.6058 18.8337C39.5401 21.6855 38.402 25.6636 35.3365 26.7639H35.34Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_14_242">
                        <rect width="52" height="38" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>

                </div>
                <div className="font-proxima font-semibold text-2xl">@tikatnft</div>
                <div>
                  <svg width="48" height="38" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.9977 4.51102C46.1999 5.28529 44.2935 5.79379 42.3414 6.01969C44.3989 4.82154 45.9389 2.93588 46.6743 0.7141C44.7433 1.833 42.6264 2.61714 40.4199 3.04132C38.9379 1.49728 36.9734 0.473269 34.8319 0.128478C32.6905 -0.216313 30.492 0.137434 28.5783 1.13473C26.6647 2.13202 25.143 3.71697 24.2499 5.64319C23.3568 7.56942 23.1423 9.72898 23.6397 11.7861C19.724 11.595 15.8932 10.6042 12.3963 8.87807C8.89931 7.1519 5.81427 4.72894 3.34144 1.76651C2.46615 3.23036 2.00617 4.89444 2.00863 6.58831C2.00863 9.91291 3.74647 12.85 6.38854 14.5696C4.82498 14.5217 3.29584 14.1106 1.92857 13.3705V13.4897C1.92904 15.7039 2.71594 17.8498 4.15584 19.5635C5.59574 21.2773 7.60004 22.4534 9.82889 22.8926C8.37743 23.2756 6.85551 23.332 5.37834 23.0577C6.00675 24.9635 7.23157 26.6303 8.8813 27.8247C10.531 29.0191 12.5231 29.6812 14.5785 29.7183C12.5357 31.2805 10.1966 32.4353 7.69517 33.1167C5.19368 33.7981 2.57879 33.9927 0 33.6895C4.50164 36.5084 9.74199 38.0049 15.0942 38C33.2096 38 43.1162 23.3878 43.1162 10.7154C43.1162 10.3027 43.1044 9.88539 43.0856 9.47727C45.0138 8.1203 46.678 6.43932 48 4.51331L47.9977 4.51102Z" fill="white"/>
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Collections;