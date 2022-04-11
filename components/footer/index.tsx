import React from 'react';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black w-full py-7  px-6">
      <div className="max-w-1440 mx-auto text-white w-full flex justify-between">
        <div className="font-proxima flex space-x-5 text-[10px] font-semibold">
          <div>© REPUBLIC RECORDS</div>
          <div>PRIVACY POLICY</div>
          <div>TERMS & CONDITIONS</div>
          <div>DO NOT SELL MY PERSONAL INFORMATION</div>
        </div>
        <div className="relative h-5 w-[219px]">
          <Image layout="fill" src={'/imgs/footer_avatars.png'}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;