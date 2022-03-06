import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FindAStore from './FindAStore';

const FooterSecondary = ({ alignItems, paddingLeft, flexDirection }) => {
   return (
      <FooterSecondaryWrapper
         style={{ alignItems, paddingLeft: `${paddingLeft * 2}px` }}
      >
         <FooterSecondaryContainer style={{ paddingLeft: `${paddingLeft}px` }}>
            <FooterSecondaryInfo>
               <FooterSecondaryLeft>
                  <FindAStore />
               </FooterSecondaryLeft>
               <FooterSecondaryRight style={{ flexDirection }}>
                  <Link>Responsibility</Link>
                  <Link>Web Accessibility</Link>
                  <Link>Privacy Policy</Link>
                  <Link>Terms of Use </Link>
                  <Link>Cookie Preferences</Link>
               </FooterSecondaryRight>
            </FooterSecondaryInfo>
            <FooterSecondaryCopyRight>
               © 2021 Starbucks
            </FooterSecondaryCopyRight>
         </FooterSecondaryContainer>
      </FooterSecondaryWrapper>
   );
};

const FooterSecondaryWrapper = styled.section`
   border-top: 1px solid rgba(0, 0, 0, 0.1);
   width: 100%;
   padding: 30px;
   padding-bottom: 60px;
   display: flex;
   flex-direction: column;
   gap: 30px;

   @media (max-width: 425px) {
      display: flex;
      flex-direction: row;
      margin-left: 20px;
   }
`;

const FooterSecondaryContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 30px;

   @media (max-width: 425px) {
      padding-left: 20px;
   }
`;

const FooterSecondaryInfo = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 50px;

   @media (max-width: 425px) {
      gap: 30px;
      flex-direction: column;
   }
`;

const FooterSecondaryLeft = styled.div`
   a {
      font-size: large;
   }
`;

const FooterSecondaryRight = styled.div`
   display: flex;
   gap: 15px;

   a {
      color: rgba(0, 0, 0, 0.87);
      font-weight: 600;

      @media (max-width: 425px) {
         font-size: 14px;
      }
   }
`;

const FooterSecondaryCopyRight = styled.span`
   font-weight: 600;

   @media (max-width: 425px) {
      font-size: 14px;
   }
`;

export default FooterSecondary;
