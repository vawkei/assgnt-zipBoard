import classes from "./MainNavigation.module.scss";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import type { MainNavProps } from "../../interfaces";

const MainNavigation = (props: MainNavProps) => {
  const navDataHandler = (navData: any) => {
    return navData.isActive ? classes.active : "";
  };

  return (
    <div className={classes["main-navigation"]}>
      <header className={classes["title-div"]}>
        <NavLink to={"/"}>
          <h1>Zippy</h1>
        </NavLink>
      </header>
      <nav>
        <ul>
          <NavLink to="/accordion" className={navDataHandler}>
            <li>Accordian</li>
          </NavLink>
          <li onClick={props.onToggleTheme}>
            {props.theme === "light" ? <FaMoon /> : <FaSun />}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
