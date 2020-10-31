import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ favIntegrations }) => {
  const favTabClicked = () => favIntegrations();

  return (
    <header className="container">
      <div className="flex-header">
        <h5 className="font-weight-bold mr-md-4">Integrations</h5>
        <div className="flex-titles">
          <Link
            className="font-weight-bold"
            to="/favourites"
            onClick={favTabClicked}
          >
            Favourites
          </Link>
          <p className="text-secondary dropdown">
            Category:{' '}
            <select name="category" className="lightblue">
              <option value="all">All</option>
            </select>
          </p>
          <p className="text-secondary dropdown">
            Filter:{' '}
            <select name="filter" className="lightblue">
              <option value="all">All</option>
            </select>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
