import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Integration = ({ company }) => {
  const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

  const [fav, setFav] = useState(() => {
    // Check if the local storage is not empty
    if (favourites) {
      for (let i = 0; i < favourites.length; i++) {
        if (favourites[i].id === company.id) {
          // Set state to true
          company.fav = favourites[i].fav;
        }
      }
    }
    return company.fav;
  });

  const onClick = () => {
    setFav(!company.fav);
    company.fav = !company.fav;

    // Get favourite items from the local storage
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

    // Like an item
    if (company.fav) {
      favourites.push(company);
    } else {
      // Unlike an item
      let i,
        flag = false;

      // Check if the local storage is not empty
      if (favourites) {
        for (i = 0; i < favourites.length; i++) {
          // Compare the IDs of the local storage item and the unliked item
          if (favourites[i].id === company.id) {
            flag = true;
            break;
          }
        }
        // Remove the unliked item if ID found
        if (flag) favourites.splice(i, 1);
      }
    }
    // Add favourite items to the local storage
    localStorage.setItem('favourites', JSON.stringify(favourites));
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <img src={company.logo} alt="" className="logo" />
        <h6 className="card-title font-weight-bold">{company.name}</h6>
        <p className="text-muted">{company.description}</p>
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          {/* Display grey for Connected, blue for Connect */}
          {company.status === 'Connected' ? (
            <h6 className="lightgrey font-weight-bold">{company.status}</h6>
          ) : (
            <h6 className="lightblue font-weight-bold">{company.status}</h6>
          )}
          {/* Display hollow or filled heart icon */}
          {fav === false ? (
            <i className="fa fa-heart-o text-secondary" onClick={onClick}></i>
          ) : (
            <i className="fa fa-heart text-secondary" onClick={onClick}></i>
          )}
        </div>
      </div>
    </div>
  );
};

Integration.propTypes = {
  company: PropTypes.object.isRequired,
};

export default Integration;
