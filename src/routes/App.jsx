import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Videos from '../containers/Videos';
import Video from '../components/Video';
import AddSession from '../components/AddSession';
import Players from '../containers/Players';
import ClasificationScrapped from '../containers/ClasificationScrapped';
import Lichess from '../containers/Lichess';
import NotFound from '../containers/NotFound';
import NewTournament from '../containers/NewTournament';
import Tournament from '../containers/Tournament';
import AdmPlayers from '../containers/AdmPlayers';
import useGamesData from '../hooks/useGamesData';
import '../styles/components/App.css';
const App = () => {
  const initialState = useGamesData();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/players" component={Players} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/video/:id" component={Video} />
            {/*<Route exact path="/clasification" component={Clasification} />*/}
            <Route exact path="/clasification" component={ClasificationScrapped} />
            <Route exact path="/lichess" component={Lichess} />
            <Route exact path="/newTournament" component={NewTournament} />
            <Route exact path="/tournament" component={Tournament} />
            <Route exact path="/addSession" component={AddSession} />
            <Route exact path="/admPlayers" component={AdmPlayers} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
