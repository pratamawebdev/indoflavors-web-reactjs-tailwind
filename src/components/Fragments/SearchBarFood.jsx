import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBarFood = ({ handleChangeSearch }) => {
  return (
    <>
    
      <form className="w-full max-w-md">
        <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='absolute w-5 h-5 ml-3 pointer-events-none' />
          <input
            type="text"
            name="search-food"
            placeholder="search for your favorite food"
            autoComplete="off"
            aria-label="search for your favorite food"
            className="w-full py-2 pl-10 pr-3 font-semibold text-black placeholder-gray-500 border-none rounded-2xl ring-2 focus: ring-gray-500"
            onChange={handleChangeSearch}
          />
        </div>
      </form>
    </>
  );
};

export default SearchBarFood;
