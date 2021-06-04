import { useCallback, useState } from "react";
import SideNavBar from "../SideNavBar/SideNavBar";
import './AppHeader.css';

const AppHeader = () => {
  const [isNavbarVisible, toggleNavbarVisibility] = useState(false);

  const toggleNavbarVisibilityCallBack = useCallback(
    () => toggleNavbarVisibility(!isNavbarVisible),
    [isNavbarVisible],
  );

  return (
  <div className="App-header">
    <button
      style={{ visibility: isNavbarVisible ? 'hidden' : 'visible' }}
      className="App-header-toggle-side-nav-btn"
      onClick={toggleNavbarVisibilityCallBack}
    />
    <SideNavBar isVisible={isNavbarVisible} toggleVisibility={toggleNavbarVisibilityCallBack} />
    <h3>
      Products management system
    </h3>
  </div>
  )
};

export default AppHeader;