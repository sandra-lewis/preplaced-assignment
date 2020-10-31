import React from 'react';
import { yourIntegrations, popularIntegrations } from '../../data/companies';
import Integration from './Integration';

const Integrations = () => {
  return (
    <div className="mx-3">
      <p className="mt-4 font-weight-bold text-muted">Your integrations</p>
      <div className="card-deck row">
        {yourIntegrations.map((company) => (
          <Integration key={company.id} company={company} />
        ))}
      </div>
      <p className="font-weight-bold text-muted">Popular integrations</p>
      <div className="card-deck">
        {popularIntegrations.map((company) => (
          <Integration key={company.id} company={company} />
        ))}
      </div>
    </div>
  );
};

export default Integrations;
