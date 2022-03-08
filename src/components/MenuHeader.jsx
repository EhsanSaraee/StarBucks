import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function MenuHeader() {
   const [index, setIndex] = useState(0);

   return (
      <MenuHeaderContainer>
         <MenuHeaderLinks>
            <MenuHeaderLink
               to="/menu"
               onClick={() => setIndex(0)}
               style={index === 0 && { borderBottom: '1px solid black' }}
            >
               All products
            </MenuHeaderLink>
            <MenuHeaderLink
               to="/menu/featured"
               onClick={() => setIndex(1)}
               style={index === 0 && { borderBottom: '1px solid black' }}
            >
               Featured
            </MenuHeaderLink>
            <Link to="#">Previous Orders</Link>
            <Link to="#">Favorite Products</Link>
         </MenuHeaderLinks>
      </MenuHeaderContainer>
   );
}

const MenuHeaderContainer = styled.section`
   background-color: #f7f7f7;
   border: 1px solid #edebe9;
   position: fixed;
   width: 100%;
   padding-left: 131px;
   padding-top: 15px;
   padding-bottom: 10px;
   border-bottom: 1px solid #dbd9d7;
   z-index: 2;

   @media (max-width: 768px) {
      position: inherit;
   }

   @media (max-width: 425px) {
      display: none;
   }
`;

const MenuHeaderLinks = styled.div`
   display: flex;
   gap: 25px;

   a {
      color: rgba(0, 0, 0, 0.87);
      font-weight: 600;
      font-size: 13px;
      padding-bottom: 5px;
   }
`;

const MenuHeaderLink = styled(Link)``;

export default MenuHeader;
