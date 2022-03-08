import menuList from '../menuList.json';
import styled from 'styled-components';
import MenuHeader from '../components/MenuHeader';
import MenuList from '../components/MenuList';
import MenuItem from '../components/MenuItem';

const MenuScreen = () => {
   return (
      <MenuSectionWrapper>
         <MenuHeader />
         <MenuSectionContainer>
            <MenuSectionLeft>
               <MenuList />
            </MenuSectionLeft>
            <MenuSectionRight>
               <h1>Menu</h1>
               <MenuSectionCategory>
                  <h2>Drinks</h2>
                  <MenuSectionItems>
                     {menuList?.map((menuListCategory) =>
                        menuListCategory.drinks.map((item) => (
                           <MenuItem key={item.id} {...item} />
                        ))
                     )}
                  </MenuSectionItems>
               </MenuSectionCategory>

               <MenuSectionCategory>
                  <h2>Food</h2>
                  <MenuSectionItems>
                     {menuList?.map((menuListCategory) =>
                        menuListCategory.food.map((item) => (
                           <MenuItem key={item.id} {...item} />
                        ))
                     )}
                  </MenuSectionItems>
               </MenuSectionCategory>

               <MenuSectionCategory>
                  <h2>At Home Coffee</h2>
                  <MenuSectionItems>
                     {menuList?.map((menuListCategory) =>
                        menuListCategory.atHomeCoffee.map((item) => (
                           <MenuItem key={item.id} {...item} />
                        ))
                     )}
                  </MenuSectionItems>
               </MenuSectionCategory>

               <MenuSectionCategory>
                  <h2>Merchandise</h2>
                  <MenuSectionItems>
                     {menuList?.map((menuListCategory) =>
                        menuListCategory.merchandise.map((item) => (
                           <MenuItem key={item.id} {...item} />
                        ))
                     )}
                  </MenuSectionItems>
               </MenuSectionCategory>
            </MenuSectionRight>
         </MenuSectionContainer>
      </MenuSectionWrapper>
   );
};

const MenuSectionWrapper = styled.section`
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

const MenuSectionContainer = styled.div`
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

const MenuSectionLeft = styled.div`
   @media (max-width: 768px) {
      display: none;
   }
`;

const MenuSectionRight = styled.div`
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

const MenuSectionCategory = styled.div`
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

const MenuSectionItems = styled.div`
   border-top: 1px solid rgba(0, 0, 0, 0.1);
   display: flex;
   column-gap: 100px;
   row-gap: 40px;
   flex-wrap: wrap;
   padding-top: 20px;
   padding-right: 20px;
`;

export default MenuScreen;
