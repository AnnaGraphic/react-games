import { NavLink } from "react-router-dom";
import { navlinks } from './navlinks.js';
import './Nav.css';

export function Nav() {
  return (
    <>
    <header  className="nav-header" >
      <nav>
        <ul>
          {Object.keys(navlinks).map((key) => {
            //console.log(key);
            return <li key={key}><NavLink to={navlinks[key]}  className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }>{key}</NavLink></li>
          })}
        </ul>
      </nav>
    </header>
    </>
  )
}