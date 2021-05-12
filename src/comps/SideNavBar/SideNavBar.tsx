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
      <button onClick={()=> toggleVisibility(false)}>Hide navbar</button>
        This is a shitty global bar
      </div>
    </Modal>
  )
}

export default SideNavBar;