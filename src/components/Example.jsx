import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';
import styled from 'styled-components';
import { useDimensions } from '../hooks/useDimensions';

const sidebar = {
   open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
         type: 'spring',
         stiffness: 20,
         restDelta: 2,
      },
   }),
   closed: {
      clipPath: 'circle(30px at 40px 40px)',
      transition: {
         delay: 0.5,
         type: 'spring',
         stiffness: 400,
         damping: 40,
      },
   },
};

export const Example = () => {
   const [isOpen, toggleOpen] = useCycle(false, true);
   const containerRef = useRef(null);
   const { height } = useDimensions(containerRef);

   return (
      <NavMotion
         initial={false}
         animate={isOpen ? 'open' : 'closed'}
         custom={height}
         ref={containerRef}
      >
         <BackgroundMotion variants={sidebar} />
         <Navigation toggle={() => toggleOpen()} />
         <MenuToggle toggle={() => toggleOpen()} />
      </NavMotion>
   );
};

const NavMotion = styled(motion.nav)`
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   width: 600px;
   width: 70vw;
   display: none;
   overflow: hidden;
   z-index: 999;

   @media (max-width: 768px) {
      display: inline;
   }
`;

const BackgroundMotion = styled(motion.div)`
   position: absolute;
   top: 0;
   left: 0;
   bottom: 0;
   width: 600px;
   background: #fff;
   z-index: 1;
`;
