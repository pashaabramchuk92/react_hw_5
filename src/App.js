import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

import MainPage from "./containers/MainPage";
import PostPage from "./containers/PostPage";
import Albums from "./containers/Albums"
import { BlogProvider } from "./Context";

const history = createBrowserHistory();

const App = () => {
  return (
    <BlogProvider>
      <Router history={history}>
        <Switch>
          <Route
            path='/'
            exact
            render={() => <MainPage />}
          />
          <Route
            path='/posts/:id'
            component={PostPage}
          />
          <Route
            path='/albums'
            component={Albums}
          />
        </Switch>
      </Router>
    </BlogProvider>
  );
}

export default App;
