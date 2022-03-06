import { Link } from 'react-router-dom';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import styled from 'styled-components';

const FindAStore = () => {
   return (
      <FindAStoreLink>
         <LocationOnIcon />
         <h5>Find a store</h5>
      </FindAStoreLink>
   );
};

const FindAStoreLink = styled(Link)`
   display: flex;
   align-items: center;
   gap: 5px;
   text-decoration: none;
   color: black;
   opacity: 0.87;
   margin-right: 20px;

   &:hover {
      color: #008248;
      transition: all 0.1s;
   }
`;

export default FindAStore;
