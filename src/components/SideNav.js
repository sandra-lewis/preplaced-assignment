import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <nav className="bg-white shadow flex">
      <Link to="#accounts" className="d-flex">
        <i className="fas fa-user"></i>
        <div>
          <h6 className="font-weight-bold">Accounts</h6>
          <p className="nav-links">Your account preferences</p>
        </div>
      </Link>
      <Link to="#notifications" className="d-flex">
        <i className="fas fa-bell"></i>
        <div>
          <h6 className="font-weight-bold">Notifications</h6>
          <p className="nav-links">Your notifications preferences</p>
        </div>
      </Link>
      <Link to="/" className="d-flex active">
        <i className="fas fa-plus-square"></i>
        <div>
          <h6 className="font-weight-bold">Integratons</h6>
          <p className="nav-links">Add or remove integrations</p>
        </div>
      </Link>
      <Link to="#colleagues" className="d-flex">
        <i className="fas fa-user-friends"></i>
        <div>
          <h6 className="font-weight-bold">Colleagues</h6>
          <p className="nav-links">Your colleague preferences</p>
        </div>
      </Link>
      <Link to="#tags" className="d-flex">
        <i className="fas fa-tag"></i>
        <div>
          <h6 className="font-weight-bold">Tags</h6>
          <p className="nav-links mr-md-3">Add or remove tags</p>
        </div>
      </Link>
    </nav>
  );
};

export default SideNav;
