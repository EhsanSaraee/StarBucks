import { Fade } from 'react-awesome-reveal';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Footer } from './containers/FooterSection';
import Header from './containers/HeaderSection';
import Home from './containers/HomeSection';
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
