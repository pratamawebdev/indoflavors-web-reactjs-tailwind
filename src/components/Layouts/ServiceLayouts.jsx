import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBellConcierge, faTruckFast, faBox} from "@fortawesome/free-solid-svg-icons";

const ServiceLayouts = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h2 className="mb-1 text-2xl font-medium tracking-widest text-red-700 title-font">
            Services
          </h2>
          <h1 className="text-2xl font-medium text-gray-900 sm:text-3xl title-font">
           We Profide Best Quality Food
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-red-700 rounded-full">
                <FontAwesomeIcon icon={faBellConcierge} />
                </div>
                <h2 className="text-lg font-medium text-gray-900 title-font">
                  Order
                </h2>
              </div>
              <div className="flex-grow">
                <p className="text-base leading-relaxed">
                  With our online ordering service, you can easily browse our
                  diverse menu, select your favorite dishes, and complete your
                  order in just a few clicks.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-red-700 rounded-full">
                <FontAwesomeIcon icon={faTruckFast} />
                </div>
                <h2 className="text-lg font-medium text-gray-900 title-font">
                  Shipping
                </h2>
              </div>
              <div className="flex-grow">
                <p className="text-base leading-relaxed">
                  We bring the convenience of delivery right to your doorstep.
                  Enjoy our delicious dishes in the comfort of your home without
                  the hassle of going out.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-red-700 rounded-full">
                <FontAwesomeIcon icon={faBox} />
                </div>
                <h2 className="text-lg font-medium text-gray-900 title-font">
                  Delivery
                </h2>
              </div>
              <div className="flex-grow">
                <p className="text-base leading-relaxed">
                  Get your meals quickly and piping hot through our reliable
                  delivery service. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceLayouts;
