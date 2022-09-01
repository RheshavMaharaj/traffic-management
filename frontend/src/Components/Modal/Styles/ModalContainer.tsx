import styled from 'styled-components';

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  /* height: 700px; */
  border-radius: 15px;
  z-index: 3;
  background-color: white;
  padding: 40px;
`;

export default ModalContainer;
