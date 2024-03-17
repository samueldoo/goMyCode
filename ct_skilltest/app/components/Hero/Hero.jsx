import Image from "next/image";
import logo from "../../../public/logo.png";
const Hero = ({ backgroundImage }) => {
  return (
    <div
      className="md:bg-cover md:bg-no-repeat md:h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex sm:items-center sm:justify-between">
        <Image src={logo} alt="User Avatar" className="h-8 w-8 mr-2 mt-3 md:ml-80" />
        <div className="mt-3 flex justify-center items-center lg:mr-[19rem] ml-[12rem] gap-14 underline text-white">
          <a href="#">01. HISTORY</a>
          <a href="#">02. TEAM</a>
        </div>
      </div>
      <div className=" px-5 md:py-16 items-center justify-center md:pr-40 text-center md:mt-32 font-bebas font-bold md:text-8xl">
        <h1 className=" text-gray-700">
          LOSANGELES
        </h1>
        <h4 className=" text-slate-600 lg:text-8xl">MOUNTAINS</h4>
      </div>
      <div className="bg-white text-center sm:mt-[8rem] sm:p-3">
      <div className='flex mr-64'>
      <div className='flex md:mr-64'>
        <Image src={logo} alt="User Avatar" className="h-8 w-8 mr-2 mt-3 md:ml-80" />
            <div className=''>
                <h1 className='mt-3 h-4'>LOSANGELES</h1>
                <h1 className=''>MOUNTAINS</h1>
            </div>
        </div>
            <div  className='flex lg:ml-[17rem] ml-[7rem] gap-14 items-center underline'>
          <a href="#">01. HISTORY</a>
          <a href="#">02. TEAM</a>
        </div>
        </div >
      </div>
    </div>
  );
};

export default Hero;
