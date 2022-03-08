import { logout } from '../redux/features/userSlice';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const LogoutButton = () => {
   const dispatch = useDispatch();
   const history = useHistory();

   const logoutOfApp = () => {
      auth
         .signOut()
         .then(() => {
            dispatch(logout());
            history.replace('/');
         })
         .catch((error) => alert(error.message));
   };

   return (
      <LogoutBtnContainer onClick={logoutOfApp}>Log Out</LogoutBtnContainer>
   );
};

const LogoutBtnContainer = styled.button`
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
   background: none;

   &:hover {
      background-color: rgba(0, 0, 0, 0.06);
   }
`;

export default LogoutButton;
