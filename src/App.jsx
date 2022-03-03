import { Fade } from 'react-awesome-reveal';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './containers/Footer';
import Header from './containers/Header';
import Home from './containers/Home';
import { GlobalStyles } from './globalStyles';

const App = () => {
   return (
      <BrowserRouter>
         <GlobalStyles />
         <Switch>
            <Route exact path="/">
               <Header />
               <Home />
               <Fade>
                  <Footer />
               </Fade>
            </Route>
         </Switch>
      </BrowserRouter>
   );
};

export default App;
