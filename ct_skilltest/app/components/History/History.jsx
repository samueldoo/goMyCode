// pages/components/About.jsx
import ImageSlider from "../ImageSlider/ImageSlider";

const History = ({ backgroundImage}) => {
  return (
    <div
      className="hero relative bg-cover bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col items-center justify-center text-center ml-9">
        <div className="flex sm:pr-[20rem] md:mr-80 lg:mr-80">
          <p className="font-bold text-9xl font-sans text-gray-400 mt-2 pr-0 md:absolute md:left-[6rem] lg:ml-[13rem]">
            01
          </p>
          <div className="flex">
            <div className="">
              <h2 className="text-3xl font-bold text-gray-800 text-opacity-[80%] absolute top-[4rem]">
                HISTORY
              </h2>
              <p className="font-bold text-8xl font-sans text-gray-400  mt-[3.5rem] lg:left-[16rem]">
                ▪
              </p>
            </div>
          </div>
        </div>
        <div className="ml-[5rem] sm:ml-[5rem] sm:mb-[-15.5rem] sm:absolute sm:top-[8rem]">
          <p className="ml-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            ante viverra, rutrum erat rutrum, consectetur mi. Proin at
          </p>
          <p className="">
            maximus est. Nullam purus ex, iaculis sed erat sed, blandit
            tincidunt quam. Cras scelerisque id quam sed dignissim
          </p>
          <p className="">
            Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut
            quam. Vivamus suscipit dignissim tortor nec congue.
          </p>
        </div>
      </div>
      <div className="lg:mt-[10.5rem] bg-slate-800 bg-opacity-65">
        <ImageSlider />
      </div>
    </div>
  );
};

export default History;
