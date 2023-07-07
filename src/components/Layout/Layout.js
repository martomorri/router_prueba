import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  const personas = ['morro', 'lauty', 'juli'];

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/morron">Morron</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/flecha">Flecha</Link>
        {personas.map(persona => <Link to={"/persona/" + {persona}}>{persona}</Link>)}
      </nav>
      <Outlet />
    </>
  );
}
