

import { HeroHeading, HeroImg, HeroText } from "../Fragments/Hero";

const HeroLayouts = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <HeroHeading>Exquisite Indonesian Culinary Delights</HeroHeading>
          <HeroText>
            Welcome to IndoFlavours, where the flavors and beauty of Indonesia
            come together in every dish. We take pride in presenting a culinary
            experience that will take you on a taste journey from Sabang toF
            Merauke. Delight your taste buds with the authentic flavors from
            various regions, all in one extraordinary place.
          </HeroText>
          <div className="flex justify-center">
         </div>
        </div>
        <HeroImg alt="Hero Image" src="https://i.pinimg.com/564x/2f/1c/46/2f1c464817c86b700fe116f04081aa9f.jpg" />
      </div>
    </section>
  );
};

export default HeroLayouts;
