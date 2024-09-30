import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../scss/components/form_controls.scss";

function SearchBar({ onFlavorSearch }) {
  return (
    <div className="flex flex-col w-full lg:w-2/4 me-4">
      <label htmlFor="flavorSearch" className="font-semibold">Search for jellybean flavors using the exact flavor name</label>
      <div className="input-group w-full">
      <FontAwesomeIcon
          icon={faSearch}
          className="search-icon me-5"
        ></FontAwesomeIcon>
        <input
          onChange={(e) => onFlavorSearch(e.target.value)}
          id="flavorSearch"
        ></input>
      </div>
    </div>
  );
}

export default SearchBar;
