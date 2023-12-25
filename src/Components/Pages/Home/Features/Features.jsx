
import Container from "../../../Shared/Container/Container";
import FeatureCard from "./Reuse/FeatureCard";


const Features = () => {
  const data = [{
    icon : '/Images/city.png',
    feature : [
      'Reserve online, pay and collect in store',
      'Enhanced web rates',
      '0% commission'
    ]
  },{
    icon : '/Images/deal.png',
    feature : [
      'Order online and we’ll deliver  to your door',
      'FREE delivery on all orders £800 or more',
      '0% commission'
    ]
  }]


  return (
<div>
    {/* {
        data?.map(item => <FeatureSection key={item.title} data={item} direction={true}></FeatureSection>)
    } */}


<div className={`bg-gray-100 mb-10  py-20`}>
        <Container>
          <h2 className="sm:text-2xl text-xl mb-10 text-[#1E4A9A] sm:text-start text-center font-medium">More ways to get travel Money</h2>
            <div className="flex justify-center gap-20 items-center flex-wrap">
              {
                data.map(item => <FeatureCard key={item.icon} data={item}></FeatureCard>)
              }
            </div>
        </Container>
      </div>
    
</div>
  );
};

export default Features;
