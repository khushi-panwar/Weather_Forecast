import { useRef } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ city, setCity, handleSearch }) => {
   const debounceRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setCity(value);

    // debounce logic
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (value.trim()) {
        handleSearch();
      }
    }, 600);
  }

  return (
    <div className="flex items-center justify-between gap-1.5 md:gap-5 text-xl">
      <input
        className="border rounded-full px-5 font-light  hover:shadow-xl transition duration-500 focus:outline-none focus:border-blue-200  text-white w-50 md:w-xl "
        value={city}
        onChange={(e) => { setCity(e.target.value) }}
        placeholder="Search City"
      ></input>
      <button onClick={handleSearch}><IoSearch /></button>
    </div>
  )
}

export default SearchBar;
