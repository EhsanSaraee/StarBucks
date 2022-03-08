import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Featured = ({
   title,
   info,
   link,
   path,
   image,
   order,
   background,
   color,
}) => {
   return (
      <FeaturedContainer style={{ background }}>
         <FeaturedLeft style={{ order, color }}>
            <h1>{title}</h1>
            <h4>{info}</h4>
            <FeaturedLink to={path}>{link}</FeaturedLink>
         </FeaturedLeft>
         <FeaturedRight>
            <img src={image} alt={title} />
         </FeaturedRight>
      </FeaturedContainer>
   );
};

const FeaturedContainer = styled.section`
   display: flex;
   gap: 40px;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
   padding: 30px;
   padding-left: 70px;
   padding-right: 70px;
   margin-bottom: 30px;

   @media (max-width: 768px) {
      padding-left: 20px;
      padding-right: 20px;
      gap: 20px;
   }
`;

const FeaturedLeft = styled.div`
   text-align: center;
   display: flex;
   flex-direction: column;
   gap: 20px;
   max-width: 420px;

   @media (max-width: 768px) {
      max-width: 300px;
   }

   @media (max-width: 425px) {
      order: 2;
      max-width: 370px;
   }

   h1 {
      font-weight: 800;
      font-size: 45px;
      line-height: 1.3;
      letter-spacing: 2px;

      @media (max-width: 768px) {
         font-size: 28px;
      }
   }

   h4 {
      line-height: 1.6;
      font-size: 20px;
      font-weight: 600;
   }

   a {
      display: inline-block;
      background: #1e3932;
      color: white;
      border-style: solid;
      border-width: 1px;
      border-radius: 50px;
      padding: 7px 16px;
      font-weight: 600;
      line-height: 1.2;
      text-align: center;
      text-decoration: none;
      transition: all 0.2s ease;
      margin-left: auto;
      margin-right: auto;
   }
`;

const FeaturedLink = styled(Link)``;

const FeaturedRight = styled.div`
   img {
      object-fit: contain;
      width: 600px;

      @media (max-width: 1024px) {
         width: 400px;
      }

      @media (max-width: 768px) {
         width: 350px;
      }
   }
`;

export default Featured;
