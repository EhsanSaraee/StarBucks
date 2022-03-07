import MenuHeader from '../MenuHeader';
import MenuList from '../MenuList';
import MenuItem from '../MenuItem';
import menuList from '../menuList.json';
import styled from 'styled-components';

const MenuScreen = () => {
   return (
      <MenuWrapper>
         <MenuHeader />
         <MenuContainer>
            <MenuLeft>
               <MenuList />
            </MenuLeft>
            <MenuRight>
               <h1>Menu</h1>
               <MenuCategory>
                  <h2>Drinks</h2>
                  <MenuItems>
                     {menuList?.map((menuListCategory) =>
                        menuListCategory.drinks.map((item) => (
                           <MenuItem key={item.id} {...item} />
                        ))
                     )}
                  </MenuItems>
               </MenuCategory>

               <MenuCategory>
                  <h2>Food</h2>
                  <MenuItems>
                     {menuList?.map((menuListCategory) =>
                        menuListCategory.food.map((item) => (
                           <MenuItem key={item.id} {...item} />
                        ))
                     )}
                  </MenuItems>
               </MenuCategory>

               <MenuCategory>
                  <h2>At Home Coffee</h2>
                  <MenuItems>
                     {menuList?.map((menuListCategory) =>
                        menuListCategory.atHomeCoffee.map((item) => (
                           <MenuItem key={item.id} {...item} />
                        ))
                     )}
                  </MenuItems>
               </MenuCategory>

               <MenuCategory>
                  <h2>Merchandise</h2>
                  <MenuItems>
                     {menuList.map((menuListCategory) =>
                        menuListCategory.merchandise.map((item) => (
                           <MenuItem key={item.id} {...item} />
                        ))
                     )}
                  </MenuItems>
               </MenuCategory>
            </MenuRight>
         </MenuContainer>
      </MenuWrapper>
   );
};

const MenuWrapper = styled.section`
   display: flex;
   flex-direction: column;
   margin-top: 101px;

   @media (max-width: 768px) {
      margin-top: 0;
   }

   @media (max-width: 425px) {
      margin-top: 30px;
   }
`;

const MenuContainer = styled.div`
   padding-left: 131px;
   margin-top: 101px;
   display: flex;
   gap: 100px;

   @media (max-width: 768px) {
      margin-top: 30px;
   }

   @media (max-width: 425px) {
      padding-left: 20px;
   }
`;

const MenuLeft = styled.div`
   @media (max-width: 768px) {
      display: none;
   }
`;

const MenuRight = styled.div`
   flex: 1;

   h1 {
      color: rgba(0, 0, 0, 0.87);
      font-weight: 800;
      font-size: 28px;
      margin-bottom: 40px;

      @media (max-width: 425px) {
         font-size: 24px;
      }
   }
`;

const MenuCategory = styled.div`
   margin-bottom: 60px;

   h2 {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.87);
      font-weight: 800;
      margin-bottom: 20px;

      @media (max-width: 425px) {
         font-size: 19px;
      }
   }
`;

const MenuItems = styled.div`
   border-top: 1px solid rgba(0, 0, 0, 0.1);
   display: flex;
   column-gap: 100px;
   row-gap: 40px;
   flex-wrap: wrap;
   padding-top: 20px;
   padding-right: 20px;
`;

export default MenuScreen;
