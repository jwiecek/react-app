import React, {Suspense} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import ContentItem from './containers/ContentItem/ContentItem';
import Layout from './containers/Layout/Layout';


const App: React.FC = () => {

    const routes = (
        <Switch>
            <Route path="/" exact component={ContentItem}/>
        </Switch>
    );
  return (
      <div className="App">
          <Layout>
              <Suspense fallback={<p>Loading...</p>}>
                  {routes}
              </Suspense>
          </Layout>
      </div>
  );
};

export default App;
