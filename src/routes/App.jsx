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
import Login from '../components/Login';
import '../styles/components/App.css';
import PrivateRoute from '../components/PrivateRoute';
import { AuthProvider } from '../hooks/Authentication';

const App = () => {
  const initialState = useGamesData();
  return (
    <AuthProvider>
        <AppContext.Provider value={initialState}>
          <BrowserRouter>
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/players" component={Players} />
                <PrivateRoute exact path="/videos" component={Videos} />
                <PrivateRoute exact path="/video/:id" component={Video} />
                <Route exact path="/clasification" component={ClasificationScrapped} />
                <PrivateRoute exact path="/lichess" component={Lichess} />
                <PrivateRoute exact path="/newTournament" component={NewTournament} />
                <PrivateRoute exact path="/tournament" component={Tournament} />
                <PrivateRoute exact path="/addSession" component={AddSession} />
                <PrivateRoute exact path="/admPlayers" component={AdmPlayers} />
                <Route exact path="/login" component={Login} />
                <Route component={NotFound} />
              </Switch>
            </Layout>
          </BrowserRouter>
        </AppContext.Provider>
      </AuthProvider>
  );
};

export default App;
