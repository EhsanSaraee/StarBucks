import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './use-dimensions';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';
import styled from 'styled-components';

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

const NavMotion = styled(motion.nav)``;

const BackgroundMotion = styled(motion.div)``;
