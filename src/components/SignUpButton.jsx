import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SignUpButton = () => {
   return <SignUpStyledBtn to="/account/sign-up">Sign Up</SignUpStyledBtn>;
};

const SignUpStyledBtn = styled(Link)`
   display: inline-block;
   font-family: inherit;
   border-style: solid;
   border-color: black;
   border-width: 1px;
   border-radius: 50px;
   padding: 7px 16px;
   font-weight: 700;
   line-height: 1.2;
   text-align: center;
   text-decoration: none;
   transition: all 0.2s ease;
   cursor: pointer;
   outline: none;
   background: black;
   color: white;
   font-size: 14px;

   &:hover {
      background-color: rgba(0, 0, 0, 0.7);
      border-color: rgba(0, 0, 0, 0.7);
   }
`;

export default SignUpButton;
