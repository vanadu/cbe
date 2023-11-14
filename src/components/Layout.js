// import Footer from "./Footer"
import Header from "./Header"
// import NavBar from "./header/NavBar";
// import BottomNav from "./BottomNav"

// import * as styles from '../styles/Light.module.scss'


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content">
        { children }
      </div>
      {/* <BottomNav /> */}
      {/* <Footer /> */}
    </>
  );
}
 
export default Layout;