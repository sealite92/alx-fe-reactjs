// src/components/Layout.jsx
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <h1>React Router Advanced Example</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> |{" "}
          <Link to="/blog">Blog</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
