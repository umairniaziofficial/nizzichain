import React, { createContext, useState, useContext } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [navbarColor, setNavbarColor] = useState('#222222');

  return (
    <NavbarContext.Provider value={{ navbarColor, setNavbarColor }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => useContext(NavbarContext);