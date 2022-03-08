import { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import ReportProblemRoundedIcon from '@material-ui/icons/ReportProblemRounded';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import FormSubmit from '../components/FormSubmit';
import FooterSecondary from '../components/FooterSecondary';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../redux/features/userSlice';

const LoginSection = () => {
   const { register, handleSubmit, errors } = useForm();
   const [passwordShown, setPasswordShown] = useState(false);
   const dispatch = useDispatch();

   const onSubmit = async ({ email, password }) => {
      try {
         const userAuth = await auth.signInWithEmailAndPassword(
            email,
            password
         );
         dispatch(
            login({
               email: userAuth.user.email,
               uid: userAuth.user.uid,
               displayName: userAuth.user.displayName,
            })
         );
      } catch (error) {
         alert(error.message);
      }
   };

   return (
      <LoginContainer>
         <LoginLeft>
            <Link to="/">
               <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
                  alt="login"
               />
            </Link>
            <LoginInfo>
               <h1>Sign in or create an account 🌟</h1>
            </LoginInfo>
         </LoginLeft>
         <LoginRight>
            <form onSubmit={handleSubmit(onSubmit)}>
               <LoginInputContainer>
                  <TextField
                     name="email"
                     label="Email Address"
                     type="email"
                     InputLabelProps={{
                        style: { color: 'rgba(0,0,0,.56)' },
                     }}
                     InputProps={{ style: { fontWeight: '800' } }}
                     inputRef={register({ required: true })}
                     style={{ width: '100%' }}
                  />
                  {errors.email && (
                     <LoginError>
                        <CloseIcon fontSize="small" />
                        <span>Enter an email.</span>
                        <ReportProblemRoundedIcon fontSize="small" />
                     </LoginError>
                  )}
               </LoginInputContainer>
               <LoginInputContainer>
                  <TextField
                     name="password"
                     label="Password"
                     type={passwordShown ? 'text' : 'password'}
                     InputLabelProps={{
                        style: { color: 'rgba(0,0,0,.56)' },
                     }}
                     InputProps={{ style: { fontWeight: '800' } }}
                     inputRef={register({ required: true })}
                     style={{ width: '100%' }}
                  />
                  {passwordShown ? (
                     <VisibilityOutlinedIcon
                        onClick={() => setPasswordShown(!passwordShown)}
                     />
                  ) : (
                     <VisibilityOffOutlinedIcon
                        onClick={() => setPasswordShown(!passwordShown)}
                     />
                  )}
                  {errors.password && (
                     <LoginError>
                        <CloseIcon fontSize="small" />
                        <span>Enter an password.</span>
                        <ReportProblemRoundedIcon fontSize="small" />
                     </LoginError>
                  )}
               </LoginInputContainer>
               <LoginResetLinks>
                  <Link>Forgot your username?</Link>
                  <Link>Forgot your password?</Link>
               </LoginResetLinks>
               <FormSubmit name="Sign in" type="submit" />
            </form>
            <LoginRewards>
               <h4>JOIN STARBUCKS® REWARDS</h4>
            </LoginRewards>
            <LoginRegister>
               <LoginRegisterWrapper>
                  <Link to="/account/sign-up">Join now</Link>
                  <h4>Create an account and bring on the Rewards!</h4>
                  <p>
                     Join Starbucks® Rewards to earn free food and drinks, get
                     free refills, pay and order with your phone, and more.
                  </p>
               </LoginRegisterWrapper>
            </LoginRegister>
            <FooterSecondary paddingLeft={30} flexDirection="column" />
         </LoginRight>
      </LoginContainer>
   );
};

const LoginContainer = styled.section`
   display: flex;

   @media (max-width: 768px) {
      flex-direction: column;
   }
`;

const LoginLeft = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   overflow: hidden;
   width: 40vw;
   display: flex;
   flex-direction: column;
   height: 100vh;
   box-shadow: 0 1px 1px rgba(0, 0, 0, 0.24), 0 4px 4px rgba(0, 0, 0, 0.12);

   a {
      img {
         object-fit: contain;
         height: 50px;
         padding-top: 10px;
         padding-left: 40px;
      }
   }

   @media (max-width: 768px) {
      position: relative;
      width: 100%;
      height: 150px;
      gap: 10px;
   }
`;

const LoginInfo = styled.div`
   width: 100%;
   height: 100%;
   display: grid;
   place-items: center;
   font-size: 14px;
   color: rgba(0, 0, 0, 0.87);

   h1 {
      font-weight: 800;
   }

   @media (max-width: 1024px) {
      font-size: 12px;
   }

   @media (max-width: 768px) {
      display: inline;
      padding-left: 40px;
   }

   @media (max-width: 425px) {
      font-size: 9px;
   }
`;

const LoginRight = styled.div`
   overflow: scroll;
   display: grid;
   margin-left: 40vw;
   flex: 1;
   place-items: center;
   background-color: #f7f7f7;
   padding: 20px 0;

   form {
      min-width: 300px;
      min-height: 420px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 40px 0;
      padding-top: 60px;
   }

   @media (max-width: 768px) {
      margin-left: 0;
   }
`;

const LoginInputContainer = styled.div`
   position: relative;

   .MuiSvgIcon-root {
      cursor: pointer;
      color: grey;
      position: absolute;
      right: 10%;
      top: 0;
      transform: translateY(80%);
   }
`;

const LoginError = styled.div`
   margin-top: 5px;
   display: flex;
   align-items: center;
   gap: 5px;
   font-size: smaller;

   .MuiSvgIcon-root {
      color: #e75b52;
   }
`;

const LoginResetLinks = styled.div`
   margin-top: 20px;

   a {
      display: block;
      margin-bottom: 15px;
      text-decoration: underline;
      color: #00653e;
      font-weight: 600;
      font-size: 15px;

      &:hover {
         text-decoration: none;
      }
   }
`;

const LoginRewards = styled.div`
   text-align: center;
   width: 100%;
   padding: 20px 0;
   background-color: #2d2926;
   color: white;

   h4 {
      font-size: 14px;
      font-weight: 800;
      letter-spacing: 1.4px;
   }
`;

const LoginRegister = styled.div`
   background-color: #edebe9;
   width: 100%;
   padding: 30px 0;
`;

const LoginRegisterWrapper = styled.div`
   max-width: 300px;
   margin-left: auto;
   margin-right: auto;
   display: flex;
   flex-direction: column;
   gap: 20px;

   a {
      display: inline-block;
      background: none;
      border-style: solid;
      border-width: 1px;
      border-radius: 50px;
      padding: 7px 16px;
      font-weight: 600;
      line-height: 1.2;
      text-align: center;
      text-decoration: none;
      transition: all 0.2s ease;
      color: rgba(0, 0, 0, 0.87);
      margin-right: auto;

      &:hover {
         background-color: rgba(0, 0, 0, 0.06);
      }
   }

   h4 {
      font-size: 20px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.87);
   }

   p {
      font-size: 14px;
      font-weight: 600;
      line-height: 1.6;
   }
`;

export default LoginSection;
