import { useState } from "react";
import logo from "../src/assets/logo.svg";
import menu from "../src/assets/icon-menu.svg";
import todoIcon from "../src/assets/icon-todo.svg";
import calendarIcon from "../src/assets/icon-calendar.svg";
import planningIcon from "../src/assets/icon-planning.svg";
import remindersIcon from "../src/assets/icon-reminders.svg";
import closemenu from "../src/assets/icon-close-menu.svg";
import arrowdown from "../src/assets/icon-arrow-down.svg";
import arrowup from "../src/assets/icon-arrow-up.svg";

const Menu = () => {
  const [icon, setIcon] = useState(true);
  const [hoverOne, setHoverOne] = useState(false);
  const [hoverSecond, setHoverSecond] = useState(false);

  return (
    <div className="flex justify-between  sm:py-6 items-center sm:px-8 sm:shadow-sm relative mainmenu">
      <img src={logo} alt="logo de la pagina" className="inline" />
      <nav
        className={`sm:flex sm:justify-between sm:items-center sm:gap-3 sm:w-[86%] ${
          icon ? "closenav" : "opennav"
        }`}
      >
        <ul className="flex sm:gap-10 sm:flex-row flex-col gap-8 text-MediumGray">
          <li
            className="menu relative cursor-pointer flex items-center gap-3 hover:text-AlmostBlack"
            onMouseEnter={() => setHoverOne(true)}
            onMouseLeave={() => setHoverOne(false)}
          >
            Features
            {hoverOne ? (
              <img src={arrowup} alt="Icon Arrow up" className="inline-block" />
            ) : (
              <img
                src={arrowdown}
                alt="Icon Arrow dawn"
                className="inline'block"
              />
            )}
            <ul className="absolute min-w-40  p-3 submenu right-[1.8px]  rounded-[5px] top-6 bg-white shadow-md z-10 mb-10 hover:text-AlmostBlack">
              <li>
                <img
                  src={todoIcon}
                  alt="Icono Todo List"
                  className="px-2 pt-1 inline float-left"
                />{" "}
                Todo List
              </li>

              <li>
                <img
                  src={calendarIcon}
                  alt="Icono Calendar"
                  className="float-left px-2 pt-1 inline"
                />
                Calendar
              </li>
              <li>
                <img
                  src={remindersIcon}
                  alt="Icono Reminders"
                  className="float-left px-2 pt-1 inline"
                />
                Reminders
              </li>
              <li>
                <img
                  src={planningIcon}
                  alt="PlannigIcon"
                  className="float-left px-2 pt-1 inline"
                />
                Planning
              </li>
            </ul>
          </li>
          <li
            className="menu relative cursor-pointer flex items-center gap-3 hover:text-AlmostBlack"
            onMouseEnter={() => setHoverSecond(true)}
            onMouseLeave={() => setHoverSecond(false)}
          >
            Company
            {hoverSecond ? (
              <img src={arrowup} alt="Icon Arrow up" className="inline-block" />
            ) : (
              <img
                src={arrowdown}
                alt="Icon Arrow dawn"
                className="inline'block"
              />
            )}
            <ul className="absolute min-w-[40px] bg-white p-3 submenu top-6 rounded-[5px] shadow-md px-4 left-3 hover:text-AlmostBlack">
              <li>History</li>
              <li>Our Team</li>
              <li>Blog</li>
            </ul>
          </li>
          <li>Careers</li>
          <li className="cursor-pointer hover:text-AlmostBlack">About</li>
        </ul>
        <div className="mt-6 sm:mt-0 flex flex-col sm:flex-row gap-6 justify-center items-center text-MediumGray">
          <p className="cursor-pointer hover:text-AlmostBlack">Login</p>

          <button className="w-32 py-1 border-2 border-slate-300 rounded-md block hover:text-AlmostBlack">
            Register
          </button>
        </div>
      </nav>

      <div onClick={() => setIcon(!icon)} className="z-10">
        {icon ? (
          <img src={menu} alt="" className="sm:hidden  inline nav" />
        ) : (
          <img src={closemenu} alt="" className="sm:hidden inline opennav" />
        )}
      </div>
    </div>
  );
};

export default Menu;
