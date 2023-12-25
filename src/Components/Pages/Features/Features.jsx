import Container from "../../Shared/Container/Container";

const Features = () => {
  return (
    <div className="bg-gray-100 mb-10  py-20">
      <Container>
        <div className="flex lg:flex-row flex-col container mx-auto items-center ">
          <div className="">
            <h2 className="text-[#4A54A4] lg:text-3xl font-semibold sm:text-2xl text-xl lg:text-start text-center">
              Doorstep Currency Delivery for Travel Ease
            </h2>
            <p className="text-gray-800 lg:text-xl md:text-lg text-base lg:text-start text-center max-w-[600px] mt-4 lg:ml-0 lg:mr-auto mx-auto">
              Experience effortless rate locking online for top travel exchange.
              Convenient collection at our extensive No1 Currency network
              throughout the UK.
            </p>
          </div>

          <div className="mx-auto max-w-[400px] flex justify-center ">
            <img className="w-full h-full flex justify-center items-center" src="/public/Images/click_sell_blue-removebg-preview.png" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Features;
