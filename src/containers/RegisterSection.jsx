import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SignUpForm from '../components/SignUpForm';
import FooterSecondary from '../components/FooterSecondary';

const RegisterSection = () => {
   return (
      <RegisterContainer>
         <RegisterHeader>
            <Link to="/">
               <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
                  alt="sign-up"
               />
            </Link>
         </RegisterHeader>
         <RegisterTitle>Create an account</RegisterTitle>
         <RegisterRewards>
            <h4>STARBUCKS® REWARDS</h4>
            <p>
               Join Starbucks Rewards to earn Stars for free food and drinks,
               any way you pay. Get access to mobile ordering, a birthday
               Reward, and <Link>more</Link>.
            </p>
         </RegisterRewards>
         <SignUpForm />
         <FooterSecondary alignItems="center" flexDirection="column" />
      </RegisterContainer>
   );
};

const RegisterContainer = styled.section`
   display: grid;
   place-items: center;
   gap: 40px;

   @media (max-width: 425px) {
      gap: 30px;
   }
`;

const RegisterHeader = styled.header`
   background-color: white;
   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.06),
      0 0 2px rgba(0, 0, 0, 0.07);
   width: 100%;
   height: 101px;
   display: flex;
   align-items: center;

   a {
      img {
         object-fit: contain;
         height: 50px;
         padding-left: 40px;
         padding-right: 40px;
      }
   }
`;

const RegisterTitle = styled.h1`
   color: rgba(0, 0, 0, 0.87);
   font-weight: 800;
   font-size: 28px;

   @media (max-width: 425px) {
      margin-right: auto;
      padding: 0 20px;
      font-size: 24px;
   }
`;

const RegisterRewards = styled.div`
   text-align: center;

   @media (max-width: 425px) {
      text-align: left;
      padding: 0 20px;
   }

   h4 {
      color: rgba(0, 0, 0, 0.56);
      letter-spacing: 1.4px;
      font-weight: 800;
      font-size: 14px;
      margin-bottom: 20px;

      @media (max-width: 425px) {
         display: none;
      }
   }

   p {
      color: rgba(0, 0, 0, 0.56);
      line-height: 1.5;
      max-width: 500px;
      font-weight: 600;
      font-size: 14px;

      @media (max-width: 425px) {
         font-size: 13px;
      }

      a {
         color: rgba(0, 0, 0, 0.56);
         text-decoration: underline;

         &:hover {
            text-decoration: none;
         }
      }
   }
`;

export default RegisterSection;
