import React from "react";
import { useAuthStore } from "../store/appStore";

const Navbar = () => {
  const user = useAuthStore((state) => state.user);
  const theme = useAuthStore((state) => state.theme);
  const logout = useAuthStore((state) => state.logout);
  const toggleTheme = useAuthStore((state) => state.toggleTheme);

  return (
    <nav
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid white",
        borderRadius: "8px",
        padding: "24px",
        textTransform: "capitalize",
      }}
    >
      <span>Theme: {theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {user ? (
        <>
          <span>Hii, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <span>Guest User</span>
      )}
    </nav>
  );
};

export default Navbar;
