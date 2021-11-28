import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";


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

function CartItem(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
    <div className='border px-4 py-2'>
        <p className='d-flex'>{ props.title }</p>
        <img src={props.image} alt={props.title} className='col-md-2 d-inline-flex mx-2 cursor-pointer' onClick={handleOpen} />
        <Button variant="outlined" className="mx-1 mt-5" onClick={() => props.handleQuantityChange(props.value, props.id, -1)}><FontAwesomeIcon icon={faMinus} className='custom-icon' /></Button>
        <Button variant="outlined" className="mx-1 mt-5" onClick={() => props.handleQuantityChange(props.value, props.id, 1)}><FontAwesomeIcon icon={faPlus} className='custom-icon' /></Button>
        <span className="d-inline-flex align-items-start">    
            <div className="d-flex flex-column mx-2">
                <label className="" for="itemQuantity">Quantity</label>
                <input id='itemQuantity' className="w-25" type="text" value={props.value} onChange={(event) => props.handleQuantityChange(event.target.value, props.id)} ></input>
            </div>
        </span>
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <div id="modalHeader" className='d-flex justify-content-between'>
                    <h2>{props.title}</h2>
                    <CloseIcon className="cursor-pointer" onClick={handleClose} />
                </div>
                <img src={props.image} alt={props.title} width={'100%'} />
                <p>Ratings: <Rating name="read-only" value={props.rating} readOnly precision={0.5} size="small" /> {props.rating}/5</p>
            </Box>
        </Modal>
    </div>
    );
}
 
export default CartItem;