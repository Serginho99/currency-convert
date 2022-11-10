import React from 'react';
// import { useState } from 'react';
// import { useUpdateContactMutation } from 'redux/contacts/contactsApi';
// import { useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ChangeContact({
  nameContact,
  numberContact,
  id,
  isOpen,
  toggle,
  setIsOpen,
}) {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const [updateContact] = useUpdateContactMutation();
  // const [name, setName] = useState(nameContact);
  // const [number, setNumber] = useState(numberContact);

  // const options = { name: setName, number: setNumber };

  // function onChange({ target: { name, value } }) {
  //   options[name](value);
  // }

  // async function changeContact(e) {
  //   e.preventDefault();

  //   try {
  //     await updateContact({ id, data: { name, number } });
  //     setIsOpen(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener('keydown', onKeyDown);
  //   return () => {
  //     document.removeEventListener('keydown', onKeyDown);
  //   };
  // });

  // function onKeyDown(e) {
  //   if (e.code !== 'Escape') {
  //     return;
  //   }
  //   toggle();
  // }

  // function clickOnBackdrop(e) {
  //   if (e.target === e.currentTarget) {
  //     toggle();
  //   }
  // }

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={toggle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
    // <>
    //   <Modal show={isOpen} onHide={toggle}>
    //     <Modal.Header closeButton>
    //       <Modal.Title>Modal heading</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>
    //       <form onSubmit={changeContact}>
    //         <input type="text" name="name" value={name} onChange={onChange} />
    //         <input
    //           type="text"
    //           name="number"
    //           value={number}
    //           onChange={onChange}
    //         />
    //       </form>
    //     </Modal.Body>
    //     <Modal.Footer>
    //       <Button variant="primary" onClick={changeContact}>
    //         Save Changes
    //       </Button>
    //       <Button variant="secondary" onClick={toggle}>
    //         Close
    //       </Button>
    //     </Modal.Footer>
    //   </Modal>
    // </>
  );
}
