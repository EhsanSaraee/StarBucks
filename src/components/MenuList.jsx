import { Link } from 'react-router-dom';
import styled from 'styled-components';
import menuList from '../menuList.json';

const MenuList = () => {
   return (
      <MenuListWrapper>
         <MenuListContainer>
            <h4>Drinks</h4>
            <MenuListItems>
               {menuList?.map((menuListCategory) =>
                  menuListCategory.drinks.map((menuListItem) => (
                     <Link>{menuListItem.type}</Link>
                  ))
               )}
            </MenuListItems>
         </MenuListContainer>
         <MenuListContainer>
            <h4>Food</h4>
            <MenuListItems>
               {menuList?.map((menuListCategory) =>
                  menuListCategory.food.map((menuListItem) => (
                     <Link>{menuListItem.type}</Link>
                  ))
               )}
            </MenuListItems>
         </MenuListContainer>
         <MenuListContainer>
            <h4>At Home Coffee</h4>
            <MenuListItems>
               {menuList?.map((menuListCategory) =>
                  menuListCategory.atHomeCoffee.map((menuListItem) => (
                     <Link>{menuListItem.type}</Link>
                  ))
               )}
            </MenuListItems>
         </MenuListContainer>
         <MenuListContainer>
            <h4>Merchandise</h4>
            <MenuListItems>
               {menuList?.map((menuListCategory) =>
                  menuListCategory.merchandise.map((menuListItem) => (
                     <Link>{menuListItem.type}</Link>
                  ))
               )}
            </MenuListItems>
         </MenuListContainer>
      </MenuListWrapper>
   );
};

const MenuListWrapper = styled.section`
   display: flex;
   flex-direction: column;
   gap: 30px;
`;

const MenuListContainer = styled.div`
   h4 {
      color: rgba(0, 0, 0, 0.87);
      margin-bottom: 20px;
      font-size: 18px;
   }
`;

const MenuListItems = styled.div`
   display: flex;
   flex-direction: column;
   gap: 12px;

   a {
      color: rgba(0, 0, 0, 0.56);
      font-size: 15px;
      font-weight: 600;
      max-width: 150px;
      line-height: 1.5;
      text-decoration: none;
   }
`;

export default MenuList;
