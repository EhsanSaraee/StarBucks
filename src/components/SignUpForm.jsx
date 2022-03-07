import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import ReportProblemRoundedIcon from '@material-ui/icons/ReportProblemRounded';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import { TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import FormSubmit from './FormSubmit';
import styled from 'styled-components';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../redux/features/userSlice';

const SignUpForm = () => {
   const { register, handleSubmit, errors } = useForm();
   const [passwordShown, setPasswordShown] = useState(false);
   const dispatch = useDispatch();
   const history = useHistory();

   const onSubmit = async ({ fName, lName, email, password }) => {
      try {
         const userAuth = await auth.createUserWithEmailAndPassword(
            email,
            password
         );
         await userAuth.user.updateProfile({
            displayName: fName,
         });
         dispatch(
            login({
               email: userAuth.user.email,
               uid: userAuth.user.uid,
               displayName: fName,
            })
         );
         history.replace('/menu');
      } catch (error) {
         alert(error.message);
      }
   };

   return (
      <SignUpFormWrapper>
         <SignUpFormContainer>
            <SignUpFormForm onSubmit={handleSubmit(onSubmit)}>
               <SignUpFormSection>Personal Information</SignUpFormSection>
               <SignUpFormInputContainer>
                  <TextField
                     name="fName"
                     label="First name"
                     type="text"
                     InputLabelProps={{
                        style: { color: 'rgba(0,0,0,.56)' },
                     }}
                     InputProps={{ style: { fontWeight: '800' } }}
                     className="signupForm__input"
                     inputRef={register({ required: true })}
                     style={{ width: '100%' }}
                  />
                  {errors.fName && (
                     <SignUpFormError>
                        <CloseIcon fontSize="small" />
                        <span>Enter your first name.</span>
                        <ReportProblemRoundedIcon
                           fontSize="small"
                           className="signupForm__reportIcon"
                        />
                     </SignUpFormError>
                  )}
               </SignUpFormInputContainer>

               <SignUpFormInputContainer>
                  <TextField
                     name="lName"
                     label="Last name"
                     type="text"
                     InputLabelProps={{
                        style: { color: 'rgba(0,0,0,.56)' },
                     }}
                     InputProps={{ style: { fontWeight: '800' } }}
                     className="signupForm__input"
                     inputRef={register({ required: true })}
                     style={{ width: '100%' }}
                  />
                  {errors.lName && (
                     <SignUpFormError>
                        <CloseIcon fontSize="small" />
                        <span>Enter your last name.</span>
                        <ReportProblemRoundedIcon
                           fontSize="small"
                           className="signupForm__reportIcon"
                        />
                     </SignUpFormError>
                  )}
               </SignUpFormInputContainer>
               <SignUpFormSection>Account Security</SignUpFormSection>
               <SignUpFormInputContainer>
                  <TextField
                     name="email"
                     label="Email Address"
                     type="email"
                     InputLabelProps={{
                        style: { color: 'rgba(0,0,0,.56)' },
                     }}
                     InputProps={{ style: { fontWeight: '800' } }}
                     className="signupForm__input"
                     inputRef={register({ required: true })}
                     style={{ width: '100%' }}
                  />
                  {errors.email && (
                     <SignUpFormError>
                        <CloseIcon fontSize="small" />
                        <span>Enter an email.</span>
                        <ReportProblemRoundedIcon
                           fontSize="small"
                           className="signupForm__reportIcon"
                        />
                     </SignUpFormError>
                  )}
               </SignUpFormInputContainer>

               <SignUpFormInputContainer>
                  <TextField
                     name="password"
                     label="Password"
                     type={passwordShown ? 'text' : 'password'}
                     InputLabelProps={{
                        style: { color: 'rgba(0,0,0,.56)' },
                     }}
                     InputProps={{ style: { fontWeight: '800' } }}
                     className="signupForm__input"
                     inputRef={register({ required: true })}
                     style={{ width: '100%' }}
                  />
                  {passwordShown ? (
                     <VisibilityOutlinedIcon
                        onClick={() => setPasswordShown(!passwordShown)}
                        className="signupForm__visibilityIcon"
                     />
                  ) : (
                     <VisibilityOffOutlinedIcon
                        onClick={() => setPasswordShown(!passwordShown)}
                        className="signupForm__visibilityIcon"
                     />
                  )}
                  {errors.password && (
                     <SignUpFormError>
                        <CloseIcon fontSize="small" />
                        <span>Enter an password.</span>
                        <ReportProblemRoundedIcon
                           fontSize="small"
                           className="login__reportIcon"
                        />
                     </SignUpFormError>
                  )}
               </SignUpFormInputContainer>
               <SignUpFormRewards>
                  COLLECT MORE STARS & EARN REWARDS
               </SignUpFormRewards>
               <SignUpFormSpan>
                  Email is a great way to know about offers and what’s new from
                  Starbucks.
               </SignUpFormSpan>
               <FormSubmit name="Create account" type="submit" />
            </SignUpFormForm>
         </SignUpFormContainer>
      </SignUpFormWrapper>
   );
};

const SignUpFormWrapper = styled.section`
   display: flex;
   flex-direction: column;
   box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 4px 5px 0 rgba(0, 0, 0, 0.06),
      0 2px 4px 0 rgba(0, 0, 0, 0.07);
   border-radius: 12px;
   max-width: 500px;
   height: 700px;
   margin-bottom: 20px;

   @media (max-width: 425px) {
      box-shadow: none;
      height: 500px;
   }
`;

const SignUpFormContainer = styled.div`
   padding: 56px;

   @media (max-width: 425px) {
      padding: 0 20px;
   }
`;

const SignUpFormForm = styled.form`
   position: relative;
   width: 100%;

   button {
      margin-top: 50px;
      position: absolute;
      right: 0;
   }
`;

const SignUpFormSection = styled.h4`
   color: rgba(0, 0, 0, 0.87);
   font-size: 19px;
   margin-bottom: 8px;

   &:nth-of-type(2) {
      margin-top: 48px;
   }

   @media (max-width: 425px) {
      font-size: 16px;
   }
`;

const SignUpFormInputContainer = styled.div`
   position: relative;
   margin-bottom: 8px;

   .MuiSvgIcon-root {
      cursor: pointer;
      color: grey;
      position: absolute;
      right: 10%;
      top: 0;
      transform: translateY(80%);
   }
`;

const SignUpFormError = styled.div`
   margin-top: 5px;
   display: flex;
   align-items: center;
   gap: 5px;
   font-size: smaller;

   .MuiSvgIcon-root {
      color: #e75b52;
   }
`;

const SignUpFormRewards = styled.h4`
   color: rgba(0, 0, 0, 0.56);
   font-size: 14px;
   margin: 24px 0;

   @media (max-width: 425px) {
      font-size: 13px;
   }
`;

const SignUpFormSpan = styled.span`
   color: rgba(0, 0, 0, 0.87);
   font-weight: 600;
   line-height: 1.5;

   @media (max-width: 425px) {
      font-size: 14px;
   }
`;

export default SignUpForm;
