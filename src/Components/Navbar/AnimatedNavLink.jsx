import { NavLink } from "react-router";

const AnimatedNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative pb-1 transition-all duration-300 ${
          isActive ? "text-primary font-semibold" : "text-gray-600"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {children}
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-primary transition-all duration-300 ${
              isActive ? "w-full" : "w-0"
            }`}
          ></span>
        </>
      )}
    </NavLink>
  );
};

export default AnimatedNavLink;
