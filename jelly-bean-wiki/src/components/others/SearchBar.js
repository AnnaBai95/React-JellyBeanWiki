import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../scss/components/form_controls.scss";


function SearchBar() {
    return (
    <div className="input-group w-full md:w-2/5">
        <input placeholder="Search for jellybean flavors"></input>
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
    </div>
    );
}

export default SearchBar;
