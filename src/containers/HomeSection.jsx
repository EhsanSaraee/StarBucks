import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import Info from '../components/Info';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import Featured from '../components/Featured';

const HomeSection = () => {
   return (
      <HomeContainer>
         <Fade>
            <HomeTop>
               <h4>
                  We’re working hard to put the health and well-being of our
                  partners and customers first in all that we do.{' '}
                  <Link>Learn more</Link>
               </h4>
            </HomeTop>
         </Fade>
         <Fade>
            <HomeBottom>
               <HomeBottomLeft>
                  <h4>Investing in our communities</h4>
                  <p>
                     The Starbucks Foundation awarded grants to over 400
                     nonprofits serving communities of color. Recipients were
                     nominated by Starbucks partners (employees).
                  </p>
                  <button>Learn more</button>
               </HomeBottomLeft>
               <HomeBottomRight>
                  <img
                     src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-68026.jpg"
                     alt=""
                  />
               </HomeBottomRight>
            </HomeBottom>
         </Fade>
         <Fade>
            <Heading heading="TODAY IS YOURS" />
         </Fade>
         <HomeFeatured>
            <Fade>
               <FeaturedHoverLight
                  title="NICELY NONDAIRY"
                  info="Say yes to sips of delight with our Honey Almondmilk Flat White and new Honey Almondmilk Cold Brew."
                  link="Explore the honey drinks"
                  path=""
                  image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-68069.png"
                  background="#f0ebe0"
                  color="#1e3932"
               />
            </Fade>
            <Fade>
               <FeaturedHoverLight
                  title="PISTACHIOOOOOOO"
                  info="Embrace creamy coffee bliss with our new Pistachio Latte and Pistachio Frappuccino® blended beverage."
                  link="Try the new pistachio drinks"
                  path=""
                  image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67826.png"
                  order="2"
                  background="#f0ebe0"
                  color="#1e3932"
               />
            </Fade>
         </HomeFeatured>
         <Fade>
            <Heading heading="MORE TO DISCOVER" />
         </Fade>
         <Fade>
            <HomeDiscover>
               <InfoHoverLight
                  title="Order and pick up. Easy as that."
                  image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67828.jpg"
                  info="Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you."
                  link="See pickup options"
                  color="#1e3932"
                  background="#d4e9e4"
               />
               <InfoHoverLight
                  title="Coffee delivered. Day made."
                  image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67829.jpg"
                  info="Make everything a little brighter. Enjoy a $0 Delivery Fee* on your first Uber Eats order over $15 through 1/31."
                  link="Order now"
                  color="#1e3932"
                  background="#d4e9e4"
               />
            </HomeDiscover>
         </Fade>
      </HomeContainer>
   );
};

const HomeContainer = styled.section``;

const HomeTop = styled.div`
   background-color: #d4e9e2;
   text-align: center;
   padding: 32px;
   margin-bottom: 20px;
   margin-top: 101px;

   h4 {
      color: #1e3932;
      font-weight: 600;
      font-size: large;
      max-width: 650px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;

      a {
         color: #1e3932;
         text-decoration: underline;

         &:hover {
            text-decoration: none;
         }
      }

      @media (max-width: 768px) {
         max-width: 430px;
      }

      @media (max-width: 425px) {
         font-size: medium;
      }
   }
`;

const HomeBottom = styled.div`
   padding-top: 30px;
   padding-bottom: 30px;
   padding-left: 80px;
   padding-right: 20px;
   display: flex;
   flex-wrap: wrap;
   gap: 60px;
   align-items: center;
   justify-content: center;
   background-color: #d4e9e2;

   @media (max-width: 768px) {
      padding-left: 20px;
      padding-right: 0;
   }

   @media (max-width: 425px) {
      flex-direction: column;
      padding-right: 20px;
   }

   @media (max-width: 375px) {
      align-items: flex-start;
   }
`;

const HomeBottomLeft = styled.div`
   text-align: center;
   display: flex;
   flex-direction: column;
   gap: 30px;

   h4 {
      color: #1e3932;
      font-size: 25px;
      font-weight: 600;
      line-height: 1.6;
   }

   p {
      color: #1e3932;
      font-weight: 600;
      line-height: 1.7;
      font-size: 19px;
      max-width: 450px;
   }

   button {
      display: inline-block;
      margin-left: auto;
      margin-right: auto;
      font-family: inherit;
      background: none;
      border-style: solid;
      border-width: 1px;
      border-radius: 50px;
      padding: 7px 16px;
      line-height: 1.2;
      text-align: center;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
      color: #1e3932;
      font-weight: 600;
      outline: none;
      font-size: medium;

      &:hover {
         background-color: rgba(30, 57, 50, 0.1);
      }
   }

   @media (max-width: 768px) {
      max-width: 300px;
   }

   @media (max-width: 425px) {
      order: 2;
      max-width: 360px;
   }
`;

const HomeBottomRight = styled.div`
   img {
      object-fit: contain;
      max-width: 650px;

      @media (max-width: 1024px) {
         max-width: 470px;
      }

      @media (max-width: 768px) {
         max-width: 380px;
      }

      @media (max-width: 375px) {
         max-width: 340px;
      }
   }
   p {
      @media (max-width: 1024px) {
         max-width: 380px;
      }
   }
`;

const HomeFeatured = styled.div``;

const HomeDiscover = styled.div`
   display: flex;
   gap: 25px;

   @media (max-width: 768px) {
      flex-direction: column;
   }
`;

export const FeaturedHoverLight = styled(Featured)`
   &:hover {
      background-color: rgba(30, 57, 50, 0.9);
   }
`;

export const InfoHoverLight = styled(Info)`
   &:hover {
      background-color: rgba(30, 57, 50, 0.1);
   }
`;

export default HomeSection;
