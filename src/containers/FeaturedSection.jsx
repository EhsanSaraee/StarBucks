import Featured from '../components/Featured';
import Heading from '../components/Heading';
import Info from '../components/Info';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import { InfoHoverLight } from './HomeSection';

const FeaturedSection = () => {
   return (
      <FeaturedSectionContainer>
         <Fade>
            <Heading heading="SELF-CARE IS COOL" />
         </Fade>
         <Fade>
            <FeaturedSectionDiscover>
               <InfoHoverLight
                  title="Honey Almondmilk Flat White"
                  image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67893.png"
                  info="Our signature espresso meets creamy sweetness."
                  link="Order"
                  color="#1e3932"
                  background="#f0ebe0"
               />
               <InfoHoverLight
                  title="NEW Honey Almondmilk Cold Brew"
                  image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67894.png"
                  info="With a hint of honey and an almondmilk finish. "
                  link="Order"
                  color="#1e3932"
                  background="#f0ebe0"
               />
            </FeaturedSectionDiscover>
         </Fade>

         <Fade>
            <Heading heading="CREAMY, DREAMY COFFEE" />
         </Fade>
         <Fade>
            <FeaturedSectionDiscover>
               <InfoHoverDark
                  title="NEW Pistachio Latte"
                  image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67901.png"
                  info="Espresso, steamed milk and nutty pistachio sauce."
                  link="Order"
                  color="white"
                  background="#1e3932"
               />
               <InfoHoverDark
                  title="NEW Pistachio Frappuccino® blended beverage"
                  image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67900.png"
                  info="Finished with whipped cream and a brown-buttery topping. "
                  link="Order"
                  color="white"
                  background="#1e3932"
               />

               <InfoHoverDark
                  title="Nitro Cold Brew"
                  image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67905.png"
                  info="Velvety-smooth with a lush, cascading texture. "
                  link="Order"
                  color="white"
                  background="#1e3932"
               />

               <InfoHoverDark
                  title="Nitro Cold Brew with Sweet Cream"
                  image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67906.png"
                  info="Topped with house-made sweet cream."
                  link="Order"
                  color="white"
                  background="#1e3932"
               />
            </FeaturedSectionDiscover>
         </Fade>
         <Fade>
            <Heading heading="GOOD FOOD, GOOD MOOD" />
         </Fade>
         <Fade>
            <FeaturedSectionDiscover>
               <InfoHoverLight
                  title="NEW Kale & Portabella Mushroom Sous Vide Egg Bites"
                  image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67911.png"
                  info="With cage-free eggs and Monterey Jack cheese."
                  link="Order"
                  color="#1e3932"
                  background="#d4e9e4"
               />
               <InfoHoverLight
                  title="Impossible™ Breakfast Sandwich*"
                  image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67912.png"
                  info="Featuring savory Impossible™ Sausage Made from Plants."
                  link="Order"
                  color="#1e3932"
                  background="#d4e9e4"
               />
            </FeaturedSectionDiscover>
         </Fade>
         <Fade>
            <FeaturedSectionFeatured>
               <FeaturedHoverDark
                  title="MEATLESS MONDAYS AT STARBUCKS"
                  info="Enjoy $2 off any vegetarian breakfast sandwich or wrap every Monday in January.**"
                  link="Order now"
                  path=""
                  image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67916.png"
                  order="2"
                  background="#1e3932"
                  color="white"
               />
            </FeaturedSectionFeatured>
         </Fade>
      </FeaturedSectionContainer>
   );
};

const FeaturedSectionContainer = styled.section`
   margin-top: 130px;
`;

const FeaturedSectionDiscover = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   gap: 25px;

   @media (max-width: 768px) {
      flex-direction: column;
   }
`;

const FeaturedSectionFeatured = styled.div`
   margin-top: 40px;
`;

const FeaturedHoverDark = styled(Featured)`
   &:hover {
      background-color: hsla(0, 0%, 100%, 0.12);
   }
`;

const InfoHoverDark = styled(Info)`
   &:hover {
      background-color: hsla(0, 0%, 100%, 0.12);
   }
`;

export default FeaturedSection;
