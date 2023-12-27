import Container from "../../../Shared/Container/Container";
import Calculator from "./Calculator/Calculator";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/Images/banner.jpg')",
      }}
      className=" bg-cover bg-center  min-h-[500px] h-full w-full "
    >
      <div className="  min-h-[500px]  backdrop-brightness-[0.4]   h-full w-full">
        <Container>
          <div className="flex lg:flex-row flex-col items-center w-full gap-6 py-20">
            <div className="lg:w-1/2 w-full flex flex-col lg:justify-start justify-center">
              <h2 className="lg:text-5xl lg:text-start text-center md:text-4xl  font-semibold text-3xl  text-white">
                Global Currency Connect
              </h2>
              <p className="text-gray-300  lg:ml-0 lg:mr-auto mx-auto  pt-4 lg:text-start text-center max-w-[500px] md:text-xl sm:text-lg text-base">
                Streamlining currency exchange worldwide. Your trusted partner
                for seamless, secure, and efficient transactions across
                international borders.
              </p>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center items-center">
            <Calculator></Calculator>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
