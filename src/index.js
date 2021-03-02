import React from 'react';
import ReactDOM from 'react-dom';
import Base64Encoder from './Base64Encoder';
import MD5Encoder from './MD5Encoder';
import URLEncoder from './URLEncoder';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DeveloperProfile from './DeveloperProfile';

function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/base64-encoder" component={Base64Encoder} />
          <Route exact path="/md5-encoder" component={MD5Encoder} />
          <Route exact path="/developers/:developerId" component={DeveloperProfile} />
          <Route exact path="/" component={URLEncoder} />
        </Switch>
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);