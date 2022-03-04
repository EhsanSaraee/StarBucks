import styled from 'styled-components';

const Heading = ({ heading }) => {
   return <HeadingContainer>{heading}</HeadingContainer>;
};

const HeadingContainer = styled.h1`
   text-align: center;
   margin: 60px 0;
   text-transform: uppercase;
   color: #1e3932;
   font-weight: 800;
   font-size: 45px;

   @media (max-width: 768px) {
      font-size: 28px;
   }

   @media (max-width: 425px) {
      font-size: 28px;
   }
`;

export default Heading;
