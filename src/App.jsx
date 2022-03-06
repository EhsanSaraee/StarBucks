import { Fade } from 'react-awesome-reveal';
import { useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Footer } from './containers/FooterSection';
import Header from './containers/HeaderSection';
import Home from './containers/HomeSection';
import Login from './containers/LoginSection';
import { GlobalStyles } from './globalStyles';
import { selectUser } from './redux/features/userSlice';

const App = () => {
   const user = useSelector(selectUser);

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
            <Route exact path="/account/sign-in">
               {user ? <Redirect to="/menu" /> : <Login />}
            </Route>
         </Switch>
      </BrowserRouter>
   );
};

export default App;
