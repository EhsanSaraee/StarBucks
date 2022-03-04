import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
   return (
      <HeaderContainer>
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
         <HeaderRight></HeaderRight>
      </HeaderContainer>
   );
};

const HeaderContainer = styled.section`
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

const HeaderLeft = styled.div`
   display: flex;
   align-items: center;
   gap: 20px;

   a {
      color: black;
      text-decoration: none;
      font-weight: 800;
      letter-spacing: 1.4px;
      opacity: 0.87;
      text-transform: uppercase;
      font-size: 14px;

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
`;

export default Header;
