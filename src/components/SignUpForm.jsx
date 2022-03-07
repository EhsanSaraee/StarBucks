import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import ReportProblemRoundedIcon from '@material-ui/icons/ReportProblemRounded';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import { TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import FormSubmit from './FormSubmit';
import styled from 'styled-components';

const SignUpForm = () => {
   const { register, handleSubmit, errors } = useForm();
   const [passwordShown, setPasswordShown] = useState(false);

   const onSubmit = async ({ fName, lName, email, password }) => {};

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

const SignUpFormWrapper = styled.section``;

const SignUpFormContainer = styled.div``;

const SignUpFormForm = styled.form``;

const SignUpFormSection = styled.h4``;

const SignUpFormInputContainer = styled.div``;

const SignUpFormError = styled.div``;

const SignUpFormRewards = styled.h4``;

const SignUpFormSpan = styled.span``;

export default SignUpForm;
