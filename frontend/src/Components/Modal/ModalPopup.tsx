import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

import ModalCard from './ModalCard';

function ModalPopup() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = function () {
    setOpen(false);
  };
  const modalStyle = {
    backgroundColor: 'rgba(26,29,56, 0.6)',
  };
  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Hello World
      </Button>
      <Modal open={open} sx={modalStyle} onClose={handleClose}>
        <ModalCard
          heading="Park Street Intersection, Darlinghurst"
          subHeading="This is a subheading"
          closer={handleClose}
        ></ModalCard>
      </Modal>
    </>
  );
}

export default ModalPopup;
