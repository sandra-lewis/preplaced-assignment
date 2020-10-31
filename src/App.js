import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideNav from './components/SideNav';
import Header from './components/Header';
import Search from './components/Search';
import Integrations from './components/integrations/Integrations';
import Favourites from './components/integrations/Favourites';
import './App.css';

const App = () => {
  const [favItems, setFavItems] = useState([]);

  useEffect(() => {
    favIntegrations();
  }, []);

  // Get favourite integrations from the local storage
  const favIntegrations = () => {
    const favourites = JSON.parse(localStorage.getItem('favourites'));
    if (favourites) setFavItems(favourites);
  };

  return (
    <Router>
      <div className="container-fluid my-4">
        <div className="row justify-content-center">
          <SideNav className="col-3" />
          <div className="col-9 ml-md-4 bg-white py-4 shadow">
            <Header favIntegrations={favIntegrations} />
            <Search />
            <Switch>
              <Route exact path="/" component={Integrations} />
              <Route
                exact
                path="/favourites"
                render={(props) => (
                  <Favourites {...props} favItems={favItems} />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
