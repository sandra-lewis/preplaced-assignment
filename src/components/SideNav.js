import React from 'react';

const SideNav = () => {
  return (
    <nav className="bg-white shadow flex">
      <a href="#accounts" className="d-flex">
        <i className="fas fa-user"></i>
        <div>
          <h6 className="font-weight-bold">Accounts</h6>
          <p className="nav-links">Your account preferences</p>
        </div>
      </a>
      <a href="#notifications" className="d-flex">
        <i className="fas fa-bell"></i>
        <div>
          <h6 className="font-weight-bold">Notifications</h6>
          <p className="nav-links">Your notifications preferences</p>
        </div>
      </a>
      <a href="/" className="d-flex active">
        <i className="fas fa-plus-square"></i>
        <div>
          <h6 className="font-weight-bold">Integratons</h6>
          <p className="nav-links">Add or remove integrations</p>
        </div>
      </a>
      <a href="#colleagues" className="d-flex">
        <i className="fas fa-user-friends"></i>
        <div>
          <h6 className="font-weight-bold">Colleagues</h6>
          <p className="nav-links">Your colleague preferences</p>
        </div>
      </a>
      <a href="#tags" className="d-flex">
        <i className="fas fa-tag"></i>
        <div>
          <h6 className="font-weight-bold">Tags</h6>
          <p className="nav-links mr-md-3">Add or remove tags</p>
        </div>
      </a>
    </nav>
  );
};

export default SideNav;
