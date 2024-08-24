import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import axios from 'axios';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function DialogForm({data}) {
  console.log("🚀 ~ DialogForm ~ data:", data)
  const [open, setOpen] = React.useState(true);
  const [title, setTitle] = useState('');

  useEffect (() => {
    axios.get('https://freetestapi.com/api/v1/destinations')
    .then((response) => setTitle(response.data))
    .then (data => {
      setTitle(data.title);
    })
    .catch(error => console.log('Error fetching data:', error));
}, []);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {data.map((data) => (
            <div key ={data.id}>{data.name}, {data.country}
            <img src={data.image} ></img></div>
          ))}
        </DialogTitle>
  
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
          {data.map((data) => (
            <div key ={data.id}>{data.description}</div>
          ))}
          
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
