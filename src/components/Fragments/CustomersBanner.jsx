import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CustomersBanner = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 py-20 md:my-0 md:mt-4 md:flex-row">
      <div className="flex avatars">
        <img
          className="object-cover w-16 h-16 bg-gray-200 rounded-full"
          src="https://i.pinimg.com/564x/5d/6f/2f/5d6f2f4c40696a395be19248c7bcfabe.jpg"
        />
        <img
          className="object-cover w-16 h-16 bg-gray-200 rounded-full"
          src="https://i.pinimg.com/564x/74/7d/44/747d44a75c6559e7725840d1858e5792.jpg"
        />
        <img
          className="object-cover w-16 h-16 bg-gray-200 rounded-full"
          src="https://i.pinimg.com/564x/60/25/d8/6025d869ec589381ecc9096dadf72549.jpg"
        />
        <img
          className="object-cover w-16 h-16 bg-gray-200 rounded-full"
          src="https://i.pinimg.com/564x/30/97/34/30973454063441d0949bc657aa94ffd6.jpg"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-neutral-900">
          Our Customers
        </h1>
        <h2 className="flex flex-row items-center justify-start gap-1 font-semibold">
          <div>
            <FontAwesomeIcon icon={faStar} className="text-yellow-500"/>
          </div>
          4.9{" "}
          <span className="text-sm font-normal text-gray-400">
            (More than 10.2K Reviews)
          </span>
        </h2>
      </div>
    </section>
  );
};

export default CustomersBanner;
