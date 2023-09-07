export const HeroHeading = (props) => {
  const { children } = props;
  return (
    <>
      <h1 className="mb-4 text-3xl font-medium text-red-700 title-font sm:text-4xl">
        {children}
      </h1>
    </>
  );
};

export const HeroText = (props) => {
  const { classname, children } = props;
  return (
    <>
      <p className={`mb-8 leading-relaxed ${classname}`}>{children}</p>
     <a href="/orders">
     <button
        className="items-center h-10 px-6 py-2 text-white duration-500 bg-red-700 rounded w-27 hover:bg-gray-400"
      >
        Order Now
      </button>
     </a>
    </>
  );
};

export const HeroImg = (props) => {
  const { classname, alt, src } = props;
  return (
    <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
      <img
        className={`object-cover object-center rounded ${classname}`}
        alt={alt}
        src={src}
      />
    </div>
  );
};
