import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../scss/components/form_controls.scss";

function SearchBar({ onFlavorSearch }) {
  return (
    <div className="flex flex-col w-2/4 me-4">
      <label for="flavorSearch">Search for jellybean flavors</label>
      <div className="input-group w-full">
        <input
          onChange={(e) => onFlavorSearch(e.target.value)}
          id="flavorSearch"
        ></input>
        <FontAwesomeIcon
          icon={faSearch}
          className="search-icon"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default SearchBar;
