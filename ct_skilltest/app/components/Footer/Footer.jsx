import Image from "next/image";
import logo from "../../../public/logo.png";

const Footer = () => {
  const imageStyle = {
    mixBlendMode: 'luminosity', // Applies mix-blend-mode
    backgroundBlendMode: 'luminosity', // Applies background-blend-mode
    filter: 'grayscale(100%) opacity(20%)', // Applies the grayscale effect and opacity
  };
  
  return (
    <div className='md:flex p-2 justify-evenly bg-slate-900 bg-opacity-80 text-gray-500 text-opacity-[50%]'>
        <div className='flex md:mr-64'>
        <Image src={logo} alt="User Avatar" className="h-8 w-8 mr-2 mt-3 md:ml-80" style={imageStyle}  />
            <div className='font-bold'>
                <h1 className='mt-3 h-4'>LOSANGELES</h1>
                <h1 className=''>MOUNTAINS</h1>
            </div>
        </div>
        <h2 className='flex items-center ml-10 font-semibold'>COPYRIGHT 2016. ALL RIGHTS RESERVED.</h2>
    </div>
  )
}

export default Footer





