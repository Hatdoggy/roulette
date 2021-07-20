import Squares,{Glass,Main,Win,Mobile} from './Components.js';
import {useState} from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function App() {

  const small = useMediaQuery({
    query: '(max-width: 780px)'
  })

  const port = useMediaQuery({
    query: '(orientation: portrait)'
  })

  const [ctr,updCtr] = useState(3);

  return (
    <div className="flx flx-jc-ce flx-ai-ce h-100">
      <Squares/>
      <Router>
        <Switch>

          <Route path="/" exact>
            <Glass/>
          </Route>

          <Route path="/main">
            {(small&&port)?
              <Mobile ctr={ctr} upd={updCtr}/>
              :
              <Main ctr={ctr} upd={updCtr}/>
            }
          </Route>

          <Route path="/win">
            <Win/>
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
