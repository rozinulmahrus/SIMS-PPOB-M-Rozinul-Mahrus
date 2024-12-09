import AppHeader from "./AppHeader/AppHeader";
import AppContent from "./AppContent/AppContent";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return(
    <div className="w-full">
      <AppHeader/>
      <AppContent>
        <Outlet/>
      </AppContent>
    </div>
  )
}

export default Layout;
