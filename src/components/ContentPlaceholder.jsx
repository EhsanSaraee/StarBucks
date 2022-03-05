import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { mix } from '@popmotion/popcorn';

export const Word = ({ link }) => <WordLink>{link}</WordLink>;

const Paragraph = ({ link1, link2, link3, link4, link5, link6 }) => (
   <ParagraphWrapper>
      <Word link={link1} />
      <Word link={link2} />
      <Word link={link3} />
      <Word link={link4} />
      <Word link={link5} />
      <Word link={link6} />
   </ParagraphWrapper>
);

export const ContentPlaceholder = ({
   link1,
   link2,
   link3,
   link4,
   link5,
   link6,
}) => (
   <ContentPlaceholderMotion
      variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
      transition={{ duration: 0.8 }}
   >
      <Paragraph
         link1={link1}
         link2={link2}
         link3={link3}
         link4={link4}
         link5={link5}
         link6={link6}
      />
   </ContentPlaceholderMotion>
);

const ParagraphWrapper = styled.div`
   margin-bottom: 20px;
   display: flex;
   flex-direction: column;
   gap: 30px;
`;

const ContentPlaceholderMotion = styled(motion.div)`
   padding: 0 40px;
   transform-origin: top center;

   @media (max-width: 425px) {
      padding-left: 20px;
      padding-right: 20px;
   }
`;

const WordLink = styled(Link)`
   color: rgba(0, 0, 0, 0.56);
   font-size: 16px;
   font-weight: 600;

   @media (max-width: 425px) {
      font-size: 14px;
   }
`;
