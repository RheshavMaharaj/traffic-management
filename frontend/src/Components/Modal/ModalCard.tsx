import ModalContainer from './Styles/ModalContainer';
import { Divider } from '@mui/material';
import styles from './custom-mui/styles';
import Heading from './Styles/Heading';
import { Text, SubHeading } from './Styles/Content';
import Button from '@mui/material/Button';
import saved from '../../Assets/icons/saved_icon.png';

function ModalCard(props: { heading: string; subHeading: string; closer: Function }) {
  const style = styles();

  return (
    <ModalContainer>
      <Heading>{props.heading}</Heading>

      <Divider sx={style.divider}></Divider>
      <SubHeading>{props.subHeading}</SubHeading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatem excepturi,
        minus veniam quisquam nostrum.
      </Text>
      <SubHeading>{props.subHeading}</SubHeading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatem excepturi,
        minus veniam quisquam nostrum.
      </Text>
      <SubHeading>{props.subHeading}</SubHeading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatem excepturi,
        minus veniam quisquam nostrum.
      </Text>

      <Button onClick={() => props.closer()} variant="outlined" sx={style.button}>
        Dismiss
      </Button>
    </ModalContainer>
  );
}

export default ModalCard;
