import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContentPlaceholder } from '../components/ContentPlaceholder';
import { Link } from 'react-router-dom';
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import styled from 'styled-components';

const Accordion = ({
   i,
   expanded,
   setExpanded,
   linkHeading,
   link1,
   link2,
   link3,
   link4,
   link5,
   link6,
}) => {
   const isOpen = i === expanded;

   // By using `AnimatePresence` to mount and unmount the contents, we can animate
   // them in and out while also only rendering the contents of open accordions
   return (
      <>
         <AccordionHeader
            initial={false}
            onClick={() => setExpanded(isOpen ? false : i)}
         >
            <Link>{linkHeading}</Link>
            <AccordionIcon>
               {isOpen ? (
                  <KeyboardArrowUpRoundedIcon fontSize="large" />
               ) : (
                  <KeyboardArrowDownRoundedIcon fontSize="large" />
               )}
            </AccordionIcon>
         </AccordionHeader>
         <AnimatePresence initial={false}>
            {isOpen && (
               <AccordionSection
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                     open: { opacity: 1, height: 'auto' },
                     collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
               >
                  <ContentPlaceholder
                     link1={link1}
                     link2={link2}
                     link3={link3}
                     link4={link4}
                     link5={link5}
                     link6={link6}
                  />
               </AccordionSection>
            )}
         </AnimatePresence>
      </>
   );
};

export const FooterSection = () => {
   // This approach is if you only want max one section open at a time. If you want multiple
   // sections to potentially be open simultaneously, they can all be given their own `useState`.
   //   const [expanded, setExpanded] = (useState < false) | (1 > 0)
   const [expanded, setExpanded] = useState();

   return (
      <AccordionWrapper>
         <Accordion
            expanded={expanded}
            setExpanded={setExpanded}
            linkHeading="About Us"
            i={0}
            link1="Our Heritage"
            link2="Our Coffee"
            link3="Stories and News"
            link4="Investor Relations"
            link5="Policies and Standards"
            link6="Customer Service"
         />
         <Accordion
            expanded={expanded}
            setExpanded={setExpanded}
            linkHeading="Careers"
            i={1}
            link1="Culture and Values"
            link2="Inclusion, Diversity, and Equity"
            link3="College Achievement Plan"
            link4="U.S. Careers"
            link5="International Careers"
         />
         <Accordion
            expanded={expanded}
            setExpanded={setExpanded}
            linkHeading="Social Impact"
            i={2}
            link1="Ethical Sourcing"
            link2="Leading in Sustainability"
            link3="Strengthening Communities"
            link4="Creating Oppurtunities"
            link5="Global Social Impact Report"
         />
         <Accordion
            expanded={expanded}
            setExpanded={setExpanded}
            linkHeading="For Business Partners"
            i={3}
            link1="Landlord Support Center"
            link2="Suppliers"
            link3="Corporate Gift Card Sales"
            link4="Office and Foodservice Coffee"
         />
         <Accordion
            expanded={expanded}
            setExpanded={setExpanded}
            linkHeading="Order and Pickup"
            i={4}
            link1="Order on the App"
            link2="Order on the Web"
            link3="Delivery"
            link4="Order and Pickup Options"
            link5="Explore and Find Coffee for Home"
         />
      </AccordionWrapper>
   );
};

const AccordionHeader = styled(motion.header)`
   cursor: pointer;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 40px;
   margin-bottom: 10px;

   @media (max-width: 425px) {
      padding-left: 20px;
      padding-right: 20px;
   }

   &:first-of-type {
      margin-top: 60px;
   }

   a {
      font-size: 19px;
      color: rgba(0, 0, 0, 0.87);
      font-weight: 600;
      margin-bottom: 20px;
      margin-top: 20px;
      text-decoration: none;

      @media (max-width: 425px) {
         font-size: 16px;
      }
   }
`;

const AccordionIcon = styled(motion.div)`
   @media (max-width: 425px) {
      .MuiSvgIcon-root {
         font-size: 30px;
      }
   }
`;

const AccordionSection = styled(motion.section)`
   overflow: hidden;
`;

const AccordionWrapper = styled.div`
   a {
      text-decoration: none;
   }
`;

const accordionIds = [0, 1, 2, 3];
