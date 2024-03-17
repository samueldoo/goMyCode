
const Schedule = ({ backgroundImage, title, description }) => {
  return (
    <div className="hero relative bg-cover bg-no-repeat h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='p-10'>
          <div className='flex bg-white bg-opacity-40 md:w-2/6 md:ml-[24rem] justify-center items-center mt-[7rem]'>
          <div className='mt-9 mb-9'>
          <div className="font-bold text-gray-900 text-opacity-[80%]">
          <h1 className='font-bold text-4xl mb-3'>SCHEDULE</h1>
          </div>
          <h1>25 Nov 2016</h1>
          <h1 className='mb-6'>28 Nov 2016</h1>
          <h1 className='mb-6'>18 Dec 2016</h1>
          <h1>7 Jan 2017</h1>
          </div>
          <div className='md:ml-[1rem] mt-[3rem]'>
            <h1>Vestibulum viverra</h1>
            <h1 className='mb-6'>Vestibulum viverra</h1>
            <h1 className='mb-6'>Vestibulum viverra</h1>
            <h1>Vestibulum viverra</h1>
          </div>
          </div>
        </div>
    </div>
  );
};

export default Schedule;
