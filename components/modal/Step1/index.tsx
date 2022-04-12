import React from 'react'
import Image from 'next/image'
import closeIcon from '../../../public/imgs/closeIcon.png'
import publicWalletImage from '../../../public/imgs/publicWalletImage.png'
import NextArrow from '../../../public/imgs/nextArrow.png'
import metaMaskImage from '../../../public/imgs/metaMaskImage.png'
import walletCollectImage from '../../../public/imgs/walletCollectImage.png'
type Prop = {
    setStep:React.Dispatch<React.SetStateAction<number>>
  }
const index = ({setStep}:Prop) => {

    const datas = [
        {
            imageURL : publicWalletImage,
            title: "Republic wallet",
            description : "Connect to your Tikat Wallet"
        },
        {
            imageURL : metaMaskImage,
            title: "Republic wallet",
            description :"Connect to your Metamask Wallet"
        },
        {
            imageURL : walletCollectImage,
            title: "Republic wallet",
            description :"Scan with WalletConnect to connect"
        }
    ]
    const handleRepublicWallet = () =>{
        setStep((prev: number) => prev+1)
    }
  return (
    <div className='mb-[29px]'>
        <div className='flex justify-between'>
        <h1 className='font-proxima font-semibold text-[18px]'>
            Connect Wallet
        </h1>
        {/* <div className='w-[12.73px] h-[12.73px]'>
        <Image src={closeIcon}/>

        </div> */}
        </div>
        <p className='font-normal font-manrope text-[11px] w-[214px] h-[33px]'>
        Connect with the available wallet provider of your choice.
        </p>
        {
            datas.map((data)=>
            <>
                <div onClick={handleRepublicWallet} className='flex justify-between  mt-[33px] cursor-pointer'>
                <div className='flex'>
                    <div className='w-[39px] h-[38px] mr-[12px] '>
                    <Image src={data.imageURL} />
    
                    </div>
                    <div>
                        <h3 className='font-proxima font-bold font-[13px]'>
                        {data.title}
                        </h3>
                        <p className='text-[11px] font-manrope'>
                        {data.description}
                        </p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <Image src={NextArrow}/>
                </div>
            </div>
             <div className='flex justify-center'>
             <hr className=' border-[#E0E0E0] mt-[15px] h-[0px] w-[300px]'/>
     
             </div>
            </>

            )
        }

       
    </div>
  )
}
export default index;
