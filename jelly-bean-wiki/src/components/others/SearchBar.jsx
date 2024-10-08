import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../scss/components/form_controls.scss";

function SearchBar({
  onFlavorSearch,
  hasSearched,
  onClearSearchValue,
  flavorSearched,
}) {
  return (
    <div className="flex flex-col w:full lg:w-2/4 me-4">
      <label htmlFor="flavorSearch" className="font-semibold">
        Search for jellybean flavors using the exact flavor name
      </label>
      <div className="input-group w-full">
        <FontAwesomeIcon
          icon={faSearch}
          className="search-icon me-5"
        ></FontAwesomeIcon>
        <input
          onChange={(e) => onFlavorSearch(e.target.value)}
          id="flavorSearch"
          value={flavorSearched}
        ></input>
        {hasSearched && flavorSearched !== "" && (
          <button onClick={() => onClearSearchValue()}>
            <FontAwesomeIcon
              icon={faX}
              className="ms-5 search-icon"
            ></FontAwesomeIcon>
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
