import { Outlet, Link } from "react-router-dom";
import SecondPage from "./SecondPage";
import ThirdPage from './ThirdPage'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">FirstPage</Link>
          </li>
          <li>
            <Link to="/SecondPage">SecondPage</Link>
          </li>
          <li>
            <Link to="/ThirdPage">ThirdPage</Link>
          </li>
          <li>
            <Link to="/PageFour">PageFour</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;