import { useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from './containers/FooterSection';
import Header from './containers/HeaderSection';
import Home from './containers/HomeSection';
import Login from './containers/LoginSection';
import Register from './containers/RegisterSection';
import { auth } from './firebase';
import { GlobalStyles } from './globalStyles';
import { login, logout, selectUser } from './redux/features/userSlice';

const App = () => {
   const user = useSelector(selectUser);
   const dispatch = useDispatch();

   useEffect(() => {
      auth.onAuthStateChanged((userAuth) => {
         if (userAuth) {
            dispatch(
               login({
                  email: userAuth.user.email,
                  password: userAuth.user.password,
                  displayName: userAuth.user.displayName,
               })
            );
         } else {
            dispatch(logout());
         }
      });
   }, [dispatch]);

   return (
      <AppContainer>
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
               <Route exact path="/account/sign-up">
                  {user ? <Redirect to="/menu" /> : <Register />}
               </Route>
            </Switch>
         </BrowserRouter>
      </AppContainer>
   );
};

const AppContainer = styled.section`
   overflow: hidden;
`;

export default App;
