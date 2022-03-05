import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import Info from '../components/Info';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import Featured from './FeaturedSection';

const Home = () => {
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

const HomeTop = styled.div``;

const HomeBottom = styled.div``;

const HomeBottomLeft = styled.div``;

const HomeBottomRight = styled.div``;

const HomeFeatured = styled.div``;

const HomeDiscover = styled.div``;

const FeaturedHoverLight = styled(Featured)`
   &:hover {
      background-color: rgba(30, 57, 50, 0.9);
   }
`;

const InfoHoverLight = styled(Info)`
   &:hover {
      background-color: rgba(30, 57, 50, 0.1);
   }
`;

export default Home;
