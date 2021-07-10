import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Modal from '../Modal/Modal';
import './SideNavBar.css';

type SidenavBarProps = {
  isVisible: Boolean,
  toggleVisibility: Function,
};

const SideNavBar: React.FC<SidenavBarProps> = ({ isVisible, toggleVisibility }) => {
  const location = useLocation();
  if(!isVisible) {
    return <></>;
  }
  const links = [
    {
      href: '/home',
      label: 'Home',  
    },
    {
      href: '/products',
      label: 'Products list'
    }, 
    {
      href: '/products/type/new',
      label: 'New product type',
    },
    {
      href: '/sales/new',
      label: 'New sale',
    }
  ];
  return (
    <Modal>
      <div className="sidenav-bar">
        <div className="sidenav-bar-btn-div">
          <h3>Navigation</h3>
          <button onClick={()=> toggleVisibility(false)} />
        </div>
        <div className="sidenav-bar-links-div">
          {links.map((l) => l.href === location.pathname ? (
              <></>
            ) : (
            <div key={l.href}>
              <Link to={l.href} style={{ color: 'white', fontWeight: 'bold' }}>
                {l.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  )
}

export default SideNavBar;