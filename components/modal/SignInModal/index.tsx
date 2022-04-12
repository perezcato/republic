import React,{useState} from 'react'
import immutablexSignIn from '../../../public/imgs/immutablex_signIn.png'
import Image from 'next/image'
import ConnectWalletModal from '../ConnectWalletModal/index'

type Prop = {
  setSignInToggler:React.Dispatch<React.SetStateAction<boolean>>
  setConnectWalletToggler:React.Dispatch<React.SetStateAction<boolean>>
}

const index = ({setSignInToggler ,setConnectWalletToggler}:Prop) => {

  const handleConnectWallet =()=>{
    setConnectWalletToggler(true)
    setSignInToggler(false)
  }
  return (
    <div>
    <div className={'absolute top-[120px] right-[31px] w-[285px] h-[440px] bg-white pl-[42px] z-10'}>
        {/* line height */}
        <h3 className='flex justify-start font-proxima text-[#010315] font-semibold mt-[37px] text-[18px]'>
            Sign In
        </h3>
        <p className='mt-[17px] h-[80px] w-[202px] font-manrope font-normal text-[11px]'>
        Lorem ipsum dolor sit amet, cons ctetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua sed do eiusmod.
        </p>
        <button onClick={handleConnectWallet} className='bg-black text-white h-[56px] w-[194.9px] rounded-[5px] mt-[16px] font-proxima text-[11px] font-bold'>
            CONNECT WALLET 
        </button>
        <button className='bg-[#EFF0F5] text-black h-[56px] w-[194.9px] rounded-[5px] font-proxima  mt-[12px] text-[11px] font-bold'>
            CREATE A NEW WALLET
        </button>
        <p className='text-[#3055BC] mt-[16px] font-manrope font-normal w-[202px] h-[38px] text-[12px]'>
        What’s a Wallet and why do I need one to sign in?
        </p>
        <div className='mt-[23px] w-[191px] h-[43px]'>
        <Image className='w-[191px] h-[43px]' src={immutablexSignIn}/>

        </div>
        
    </div>
    </div>

  )
}

export default index