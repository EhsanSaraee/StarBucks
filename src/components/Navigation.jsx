import { motion } from 'framer-motion';
import { MenuLink } from './MenuLink';
import FindAStore from './FindAStore';
import { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/features/userSlice';
import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton';
import SignOutButton from './SignOutButton';

const variants = {
   open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
   },
   closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
   },
};

const variants2 = {
   open: {
      y: 0,
      opacity: 1,
      transition: {
         y: { stiffness: 1000, velocity: -100 },
      },
   },
   closed: {
      y: 50,
      opacity: 0,
      transition: {
         y: { stiffness: 1000 },
      },
   },
};

export const Navigation = ({ toggle }) => {
   const [showMenuCategories, setShowMenuCategories] = useState(false);
   const user = useSelector(selectUser);

   return (
      <>
         {showMenuCategories ? (
            <ListMotion variants={variants}>
               <MenuLink
                  link="Menu"
                  goBackIcon
                  onClick={() => {
                     setShowMenuCategories(false);
                  }}
                  width="60%"
               />
               <MenuLink
                  link="All products"
                  path="/menu"
                  onClick={() => {
                     setShowMenuCategories(false);
                     toggle();
                  }}
               />
               <MenuLink
                  link="Featured"
                  path="/menu/featured"
                  onClick={() => {
                     setShowMenuCategories(false);
                     toggle();
                  }}
               />
               <MenuLink
                  link="Previous Orders"
                  onClick={() => {
                     setShowMenuCategories(false);
                     toggle();
                  }}
               />
               <MenuLink
                  link="Favorite Products"
                  onClick={() => {
                     setShowMenuCategories(false);
                     toggle();
                  }}
               />
            </ListMotion>
         ) : (
            <ListMotion variants={variants}>
               <MenuLink
                  link="Menu"
                  icon
                  onClick={() => setShowMenuCategories(true)}
               />
               <MenuLink link="Rewards" />
               <MenuLink link="Gift Cards" />
               <DividerMotion variants={variants2} />
               <NavigationButtons variants={variants2}>
                  {!user ? (
                     <>
                        <SignInButton />
                        <SignUpButton />
                     </>
                  ) : (
                     <SignOutButton />
                  )}
               </NavigationButtons>
               <WrapperMotion variants={variants2}>
                  <FindAStore />
               </WrapperMotion>
            </ListMotion>
         )}
      </>
   );
};

const ListMotion = styled(motion.ul)`
   padding: 25px;
   position: absolute;
   top: 100px;
   width: 60vw;
   z-index: 2;
   margin: 0;
   padding: 0;
`;

const DividerMotion = styled(motion.hr)`
   margin-bottom: 30px;
   background-color: rgba(0, 0, 0, 0.1);
   height: 2px;
   border: none;
`;

const NavigationButtons = styled(motion.div)`
   display: flex;
   gap: 20px;
   margin-bottom: 20px;
`;

const WrapperMotion = styled(motion.div)``;
