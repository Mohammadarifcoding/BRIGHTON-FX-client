import Container from "../Container/Container";

const Navbar = () => {
    return (
            <div className=" bg-[#93C94E]">
                <Container>
                    <div className="flex py-3">
                    <div className="sm:max-w-[300px] max-w-[150px] " >
              <img className="w-full h-full" src="/Images/logo.png" alt="" />
            </div>
                    </div>
              
                </Container>
           

        </div>
    );
};

export default Navbar;