import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Info = ({ image, title, info, link, background, color, path }) => {
   return (
      <InfoContainer
         style={{
            color,
            background,
         }}
      >
         <InfoImage src={image} alt={title} />
         <InfoText>
            <h4>{title}</h4>
            <h6>{info}</h6>
            <InfoLink to={path} style={{ color }}>
               {link}
            </InfoLink>
         </InfoText>
      </InfoContainer>
   );
};

const InfoContainer = styled.section`
   display: flex;
   width: 49%;
   gap: 20px;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding-bottom: 10px;
   position: relative;

   @media (max-width: 1024px) {
      width: 48%;
      padding-left: 7px;
   }

   @media (max-width: 768px) {
      width: 100%;
   }
`;

const InfoImage = styled.img`
   object-fit: contain;
   max-width: 100%;
   height: auto;
`;

const InfoText = styled.div`
   padding: 30px 60px;
   text-align: center;
   display: flex;
   flex-direction: column;
   gap: 20px;

   @media (max-width: 425px) {
      padding-left: 25px;
      padding-right: 25px;
   }

   h4 {
      font-size: 22px;
      font-weight: 600;
      line-height: 1.6;

      @media (max-width: 425px) {
         font-size: 20px;
      }
   }

   h6 {
      font-size: 17px;
      font-weight: 600;
      line-height: 1.6;

      @media (max-width: 425px) {
         font-size: 15px;
      }
   }

   a {
      display: inline-block;
      background: none;
      border-style: solid;
      border-width: 1px;
      border-radius: 50px;
      padding: 7px 16px;
      font-weight: 700;
      line-height: 1.2;
      text-align: center;
      text-decoration: none;
      transition: all 0.2s ease;
      margin-left: auto;
      margin-right: auto;

      @media (max-width: 425px) {
         font-size: 13px;
      }
   }
`;

const InfoLink = styled(Link)``;

export default Info;
