import React, { Fragment } from 'react';
import Integration from './Integration';
import PropTypes from 'prop-types';

const Favourites = ({ favItems }) => {
  return (
    <Fragment>
      {favItems.length !== 0 ? (
        <Fragment>
          <p className="mt-4 font-weight-bold text-muted">
            Favourite integrations
          </p>
          <div className="card-deck">
            {favItems.map((company) => (
              <Integration key={company.id} company={company} />
            ))}
          </div>
        </Fragment>
      ) : (
        <p className="mt-5 font-weight-bold text-muted text-center">
          No favourite integrations in the list
        </p>
      )}
    </Fragment>
  );
};

Favourites.propTypes = {
  favItems: PropTypes.array.isRequired,
};

export default Favourites;
