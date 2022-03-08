import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';

const MenuItem = ({ type, image }) => {
   return (
      <Fade>
         <MenuItemLink>
            <MenuItemImg src={image} alt={type} />
            <MenuItemType>{type}</MenuItemType>
         </MenuItemLink>
      </Fade>
   );
};

const MenuItemLink = styled(Link)`
   display: flex;
   align-items: center;
   gap: 10px;
   width: 260px;

   @media (max-width: 768px) {
      width: 240px;
   }
`;

const MenuItemImg = styled.img`
   border-radius: 50%;
   object-fit: contain;
   width: 120px;

   @media (max-width: 768px) {
      width: 80px;
   }
`;

const MenuItemType = styled.h4`
   color: rgba(0, 0, 0, 0.87);
   font-weight: 600;
   font-size: 18px;
   line-height: 1.5;

   @media (max-width: 768px) {
      font-size: 16px;
   }
`;

export default MenuItem;
