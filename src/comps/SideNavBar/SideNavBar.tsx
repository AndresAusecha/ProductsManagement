import React from 'react';
import Modal from '../Modal/Modal';
import './SideNavBar.css';

type SidenavBarProps = {
  isVisible: Boolean,
  toggleVisibility: Function,
};

const SideNavBar: React.FC<SidenavBarProps> = ({ isVisible, toggleVisibility }) => {
  if(!isVisible) {
    return <></>;
  }
  return (
    <Modal>
      <div className="App-header-sidenav-bar">
        <div className="App-header-sidenav-bar-btn-div">
          <button onClick={()=> toggleVisibility(false)} />
        </div>
      </div>
    </Modal>
  )
}

export default SideNavBar;