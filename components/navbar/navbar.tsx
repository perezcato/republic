import ConnectWalletModal from 'components/modal/ConnectWalletModal';
import Link from 'next/link';
import React ,{Children, useState} from 'react';
import  SignInModal from '../modal/SignInModal/index'

const Navbar = () => {
  const [signInToggler,setSignInToggler] = useState<boolean>(false)
  const [modal, setModal] = useState(false)
  const [connectWalletToggler,setConnectWalletToggler] = useState<boolean>(false)
  const handleModal = () =>{
    if(modal){
      setConnectWalletToggler(false)
    }
    setSignInToggler(!modal)
    setModal(!modal)

  }
  
  return (
    <>
    <header className="mx-auto max-w-1440 flex justify-between items-center bg-transparent py-8 w-full xl:px-6 px-6">
      <nav>
        <ul className="flex items-center font-proxima text-white space-x-6 font-semibold text-sm hidden lg:flex">
          <li>
            <div>MUSIC</div>
          </li>
          <li>
            <div>VIDEOS</div>
          </li>
          <li>
            <div>SUBSCRIBE</div>
          </li>
        </ul>
        <div className="lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </nav>
      <div className="font-abril text-5xl text-white">
        <Link href="/">
          TIKAT
        </Link>
      </div>
      <nav>
        <ul className="flex items-center font-proxima text-white space-x-6 font-semibold text-sm hidden lg:flex">
          <li>
            <div>SHOP</div>
          </li>
          <li>
            <Link href="collections"> NFT COLLECTIONS</Link>
          </li>
          <li onClick={handleModal} className='cursor-pointer'>
            <div><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.3334 8H20C17.8783 8 15.8435 8.84285 14.3432 10.3431C12.8429 11.8434 12 13.8783 12 16C12 18.1217 12.8429 20.1566 14.3432 21.6569C15.8435 23.1571 17.8783 24 20 24H29.3334V26.6667C29.3334 27.0203 29.1929 27.3594 28.9428 27.6095C28.6928 27.8595 28.3536 28 28 28H4.00002C3.6464 28 3.30726 27.8595 3.05721 27.6095C2.80716 27.3594 2.66669 27.0203 2.66669 26.6667V5.33333C2.66669 4.97971 2.80716 4.64057 3.05721 4.39052C3.30726 4.14048 3.6464 4 4.00002 4H28C28.3536 4 28.6928 4.14048 28.9428 4.39052C29.1929 4.64057 29.3334 4.97971 29.3334 5.33333V8ZM20 10.6667H30.6667V21.3333H20C18.5855 21.3333 17.229 20.7714 16.2288 19.7712C15.2286 18.771 14.6667 17.4145 14.6667 16C14.6667 14.5855 15.2286 13.229 16.2288 12.2288C17.229 11.2286 18.5855 10.6667 20 10.6667ZM20 14.6667V17.3333H24V14.6667H20Z" fill="white"/>
            </svg>
            </div>
          </li>
        </ul>
        <div className="lg:hidden"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.3334 8H20C17.8783 8 15.8435 8.84285 14.3432 10.3431C12.8429 11.8434 12 13.8783 12 16C12 18.1217 12.8429 20.1566 14.3432 21.6569C15.8435 23.1571 17.8783 24 20 24H29.3334V26.6667C29.3334 27.0203 29.1929 27.3594 28.9428 27.6095C28.6928 27.8595 28.3536 28 28 28H4.00002C3.6464 28 3.30726 27.8595 3.05721 27.6095C2.80716 27.3594 2.66669 27.0203 2.66669 26.6667V5.33333C2.66669 4.97971 2.80716 4.64057 3.05721 4.39052C3.30726 4.14048 3.6464 4 4.00002 4H28C28.3536 4 28.6928 4.14048 28.9428 4.39052C29.1929 4.64057 29.3334 4.97971 29.3334 5.33333V8ZM20 10.6667H30.6667V21.3333H20C18.5855 21.3333 17.229 20.7714 16.2288 19.7712C15.2286 18.771 14.6667 17.4145 14.6667 16C14.6667 14.5855 15.2286 13.229 16.2288 12.2288C17.229 11.2286 18.5855 10.6667 20 10.6667ZM20 14.6667V17.3333H24V14.6667H20Z" fill="white"/>
        </svg>
        </div>
      </nav>
    
          
    </header>
    {
             modal &&  signInToggler && <SignInModal setSignInToggler={setSignInToggler} setConnectWalletToggler={setConnectWalletToggler}/>
            }
            {
              modal && (!signInToggler && connectWalletToggler ) && <ConnectWalletModal setModal={setModal}/>
            }
        
    </>

  );
};

export default Navbar;