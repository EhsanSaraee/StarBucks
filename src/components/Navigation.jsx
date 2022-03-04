import { motion } from 'framer-motion';
import { MenuLink } from './MenuLink';
import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton';
import FindAStore from './FindAStore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import LogoutButton from './LogoutButton';
import { useState } from 'react';
import styled from 'styled-components';

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
   const user = useSelector(selectUser);
   const [showMenuCategories, setShowMenuCategories] = useState(false);

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
                     <LogoutButton />
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

const ListMotion = styled(motion.ul)``;

const DividerMotion = styled(motion.hr)``;

const NavigationButtons = styled(motion.div)``;

const WrapperMotion = styled(motion.div)``;
