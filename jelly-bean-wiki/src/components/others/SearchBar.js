import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../scss/components/form_controls.scss";

function SearchBar({onFlavorSearch}) {
  return (
    <div className="input-group w-full md:w-2/5">
      <input
        placeholder="Search for jellybean flavors"
        onChange={(e) => onFlavorSearch(e.target.value)}
      ></input>
      <FontAwesomeIcon
        icon={faSearch}
        className="search-icon"
      ></FontAwesomeIcon>
    </div>
  );
}

export default SearchBar;


