import React, { Children } from "react";

import { NavLink } from "react-router-dom";

function Links({ to, name, children }) {
  return (
    <li>
      <NavLink className={`flex gap-2 text-gray-400 ${({isActive}) => isActive ? 'active': ''}`} to={to}>
        {children}
        <p>{name}</p>
      </NavLink>
    </li>
  );
}

export default Links;
