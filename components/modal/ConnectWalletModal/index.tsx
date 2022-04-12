import React, { useState } from 'react'
import FirstComponent from '../Step1/index'
import SecondComponent from '../Step2/index'
import immutablexSignIn from '../../../public/imgs/immutablex_signIn.png'
import Image from 'next/image'
import closeIcon from '../../../public/imgs/closeIcon.png'
import { motion, } from 'framer-motion'

type Prop = {
    setModal:React.Dispatch<React.SetStateAction<boolean>>
  }
const index = ({setModal}:Prop) => {
    const [step, setStep] = useState<number>(1)


const closeModal = () =>{
    setModal(false)
}
const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

    return (
        <div className={'absolute top-[120px] right-[31px] h-[440px] overflow-auto w-[386px]  bg-white z-10'}>

            <div className='w-full h-full px-[42px]  rounded-[4px] pt-[38.1px] overflow-auto'>
                {
                    step == 1 &&
                    <div className='flex justify-between'>


                        <FirstComponent setStep={setStep} />

                        <div className=' mr-[42px]'>
                            <div  onClick={closeModal} className='w-[12.73px] h-[12.73px] cursor-pointer'>
                                <Image src={closeIcon} />

                            </div>
                        </div>
                    </div>
                }


                {
                    step == 2 &&
                    <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={list}
                    >
                        <div className='flex justify-end mb-[28px]'>
                            <div onClick={closeModal} className='w-[12.73px] h-[12.73px] cursor-pointer'>
                                <Image src={closeIcon} />

                            </div>
                        </div>
                        <SecondComponent setStep={setStep} />
                    </motion.div>
                }
                <div className='flex justify-center  h-[43px] mb-[20px] '>
                    <Image className='w-[191px] h-[43px]' src={immutablexSignIn} />

                </div>
            </div>

        </div>
    )
}

export default index