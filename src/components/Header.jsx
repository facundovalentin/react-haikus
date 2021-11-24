import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  return (
    <header>
      <div id="cajaBuscador">
        <input type="text" name="buscar " id="buscar" placeholder="buscar" />
        <FontAwesomeIcon icon={faSearch} id="lupa" widht="32px" height="32px"/>
      </div>
    </header>
  );
};

export default Header;
