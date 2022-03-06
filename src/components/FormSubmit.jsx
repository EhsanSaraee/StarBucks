import styled from 'styled-components';

const FormSubmit = ({ name, type }) => {
   return <FormSubmitContainer type={type}>{name}</FormSubmitContainer>;
};

const FormSubmitContainer = styled.button``;

export default FormSubmit;
