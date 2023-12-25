import { MdOutlineDone } from "react-icons/md";
import Container from "../../Shared/Container/Container";
const Commitment = () => {
    return (
        <div className="bg-[#1E4A9A]">
            <Container>
                <div className="flex py-4 justify-between gap-7 items-center flex-wrap text-white">
                    <div className="flex gap-2 lg:justify-start items-center lg:ml-0 lg:mr-auto mx-auto justify-center">
                        <div className="p-1 bg-gray-100 text-black rounded-full font-bold">
                        <MdOutlineDone className="text-xl"></MdOutlineDone>
                        </div>
                        <h2 className="sm:text-xl text-lg ">Guaranteed Best Exchange Rate</h2>
                    </div>
                    <div className="flex gap-2 lg:justify-start items-center lg:ml-0 lg:mr-auto mx-auto justify-center">
                        <div className="p-1 bg-gray-100 text-black rounded-full font-bold">
                        <MdOutlineDone className="text-xl"></MdOutlineDone>
                        </div>
                        <h2 className="sm:text-xl text-lg ">Reserve online and pay in Store</h2>
                    </div>
                    <div className="flex gap-2 lg:justify-start items-center lg:ml-0 lg:mr-auto mx-auto justify-center">
                        <div className="p-1 bg-gray-100 text-black rounded-full font-bold">
                        <MdOutlineDone className="text-xl"></MdOutlineDone>
                        </div>
                        <h2 className="sm:text-xl text-lg ">0% Commission</h2>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Commitment;