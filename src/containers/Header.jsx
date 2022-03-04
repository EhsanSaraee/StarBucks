import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Example } from '../components/Example';
import FindAStore from '../components/FindAStore';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/features/userSlice';
import SignInButton from '../components/SignInButton';
import SignUpButton from '../components/SignUpButton';
import SignOutButton from '../components/SignOutButton';

const Header = ({ menuPage }) => {
   const user = useSelector(selectUser);

   return (
      <HeaderContainer menuPage={menuPage}>
         <HeaderLeft>
            <HeaderLogo to="/">
               <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
                  alt="starbucks"
               />
            </HeaderLogo>
            <HeaderLink to="/menu">Menu</HeaderLink>
            <HeaderLink to="/menu">Rewards</HeaderLink>
            <HeaderLink to="/menu">Gift Cards</HeaderLink>
         </HeaderLeft>
         <HeaderRight>
            <Example />
            <FindAStore />
            {!user ? (
               <>
                  <Link to="/account/sign-in">
                     <SignInButton />
                  </Link>
                  <Link to="/account/sign-up">
                     <SignUpButton />
                  </Link>
               </>
            ) : (
               <HeaderLogout>
                  {menuPage ? (
                     <SignOutButton />
                  ) : (
                     <Link to="/menu">Order Now</Link>
                  )}
               </HeaderLogout>
            )}
         </HeaderRight>
      </HeaderContainer>
   );
};

const CSSLink = css`
   color: black;
   text-decoration: none;
   font-weight: 800;
   letter-spacing: 1.4px;
   opacity: 0.87;
   text-transform: uppercase;
   font-size: 14px;
`;

const HeaderContainer = styled.section`
   width: ${(menuPage) => (menuPage ? '95%' : null)};
   position: ${(menuPage) => (menuPage ? 'fixed' : null)};
   top: ${(menuPage) => (menuPage ? '0' : null)};
   left: ${(menuPage) => (menuPage ? '0' : null)};

   @media (max-width: 768px) {
      position: ${(menuPage) => (menuPage ? 'inherit' : null)};
   }

   height: 101px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-left: 40px;
   padding-right: 40px;
   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.06),
      0 0 2px rgba(0, 0, 0, 0.07);
   z-index: 2;
   background-color: white;
`;

// const HeaderMenuPage = styled.div`
//    position: fixed;
//    top: 0;
//    left: 0;
//    width: 95%;

//    @media (max-width: 768px) {
//       position: inherit;
//    }
// `;

const HeaderLeft = styled.div`
   display: flex;
   align-items: center;
   gap: 20px;

   a {
      ${CSSLink}

      &:hover {
         color: #008248;
         transition: all 0.1s;
      }
   }
`;

const HeaderLogo = styled(Link)`
   margin-right: 20px;

   img {
      object-fit: contain;
      height: 50px;
   }
`;

const HeaderLink = styled(Link)`
   @media (max-width: 768px) {
      .header__link {
         display: none;
      }
   }
`;

const HeaderRight = styled.div`
   display: flex;
   align-items: center;
   gap: 20px;

   a,
   button {
      @media (max-width: 768px) {
         display: none;
      }
   }
`;

const HeaderLogout = styled.div`
   a {
      ${CSSLink}

      a:hover {
         color: #008248;
         transition: all 0.1s;
      }
   }

   @media (max-width: 768px) {
      display: none;
   }
`;

export default Header;
