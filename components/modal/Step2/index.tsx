import React from 'react'
import Image from 'next/image'
import closeIcon from '../../../public/imgs/closeIcon.png'
import publicWalletImage from '../../../public/imgs/publicWalletImage.png'
import NextArrow from '../../../public/imgs/nextArrow.png'
import TImage from '../../../public/imgs/TImage.png'
import republicImage from '../../../public/imgs/republicImage.png'
import exchangeIcon from '../../../public/imgs/exchangeIcon.png'
import homeIcon from '../../../public/imgs/homeIcon.png'
import RightIcon from '../../../public/imgs/vector.png'
import WrongIcon from '../../../public/imgs/vector2.png'

import { json } from 'stream/consumers'
type Prop = {
    setStep: React.Dispatch<React.SetStateAction<number>>
}
const index = ({ setStep }: Prop) => {
    const datas = [
        {
            imageURL: homeIcon,
            description: "To see your wallet balance and activity"

        },
        {
            imageURL: RightIcon,
            description: "To send you requestes for transactions"
        },
        {
            imageURL: WrongIcon,
            description: "Cannot move funds without your permission"
        }
    ]

    const handleRepublicWallet = () => {
        setStep((prev: number) => prev + 1)
    }
    return (
        <div>
            <div className='flex justify-end'>
                {/* <div className='w-[12.73px] h-[12.73px] '>
                    <Image src={closeIcon} />

                </div> */}
            </div>
            <div className='flex justify-center mb-[41px]'>
                <div className='mr-[12px] h-[75px] w-[75px]'>
                    <Image width={75} height={75} src={TImage} />
                </div>
                <div className='flex items-center mr-[12px]'>
                    <Image src={exchangeIcon} />
                </div>
                <div>
                    <Image src={republicImage} />
                </div>
            </div>
            <div className='mb-[25px]'>
                <h3 className='font-proxima font-semibold text-[18px]'>
                    Allow Website
                </h3>
                <a className='text-[#3055BC] h-[33px] text-[11px] font-normal font-manrope'>
                    https://nft.republicrecords.com
                </a>
                <>

                    {datas.map((data) =>
                        <div className='flex justify-start items-center mt-[12px]'>
                            {/* <div className='mr-[14px] w-[32px] h-[32px]  rounded-full flex justify-center items-center'> */}
                            <div className={`${(data.imageURL == WrongIcon) ? 'mr-[14px] w-[32px] h-[32px] bg-[#EEBCC2] rounded-full flex justify-center items-center': 'mr-[14px] w-[32px] h-[32px]  rounded-full bg-[#E8EDFD] flex justify-center items-center' }`}>
                                <Image src={data.imageURL} />
                            </div>
                            <div>
                                <p className='text-[11px] font-manrope'> {data.description}</p>
                            </div>  
                        </div>
                    )

                    }
                </>

            </div>
            <div className='mb-[21px]'>

                <button className='bg-black text-white w-[300px] h-[56px] mb-[12px] rounded-[5px] font-Proxima font-bold text-[11px]'>
                    ALLOW
                </button>
                <button className='bg-[#EFF0F5] w-[300px] h-[56px]  rounded-[5px] font-Proxima font-bold text-[11px]'>
                    DENY
                </button>

            </div>
        </div>
    )
}
export default index;
