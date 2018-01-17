import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import ProductCatalog from './routes/ProductCatalog';
import FlowTracer from './routes/FlowTracer';
import LicenseAllocator from './routes/LicenseAllocator';
import LicenseMonitor from './routes/LicenseMonitor';
import NetworkComputer from './routes/NetworkComputer';
import WorkloadXelerator from './routes/WorkloadXelerator';
import HERO from './routes/HERO';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={ProductCatalog} />
        <Route path="/ft" exact component={FlowTracer} />
        <Route path="/la" exact component={LicenseAllocator} />
        <Route path="/lm" exact component={LicenseMonitor} />
        <Route path="/nc" exact component={NetworkComputer} />
        <Route path="/wx" exact component={WorkloadXelerator} />
        <Route path="/he" exact component={HERO} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
