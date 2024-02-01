import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { grey, deepPurple } from '@mui/material/colors';

// Keyframes for animations
const dialogEnter = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const dialogExit = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.9);
  }
`;

const CustomDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(3),
  position: 'relative',
  backgroundColor: grey[100],
  color: deepPurple[900],
}));

const CustomDialogTitle = styled(DialogTitle)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 'bold',
  padding: theme.spacing(2),
  backgroundColor: '#62AFD9',
  color: 'white',
}));

const CustomIconButton = styled(IconButton)({
  position: 'absolute',
  right: 8,
  top: 8,
  color: grey[500],
});

const CustomButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  borderRadius: '20px',
  fontWeight: 'bold',
  color: grey[50],
  backgroundColor: grey[600],
  '&:hover': {
    backgroundColor: grey[700],
  },
}));

const CustomDialog = ({ open, handleClose, title, content, showConfirmButton = false, onConfirm }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="custom-dialog-title"
      aria-describedby="custom-dialog-description"
      fullScreen={fullScreen}
      PaperProps={{
        sx: {
          animation: `${open ? dialogEnter : dialogExit} 500ms ${theme.transitions.easing.easeInOut}`,
          borderRadius: '15px',
        },
      }}
    >
      <CustomDialogTitle id="custom-dialog-title">
        {title}
        <CustomIconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </CustomIconButton>
      </CustomDialogTitle>
      <CustomDialogContent dividers>
        <DialogContentText id="custom-dialog-description" sx={{ textAlign: 'justify' }}>
          {content}
        </DialogContentText>
      </CustomDialogContent>
      <DialogActions sx={{ justifyContent: 'center' }}>
        {showConfirmButton && (
          <CustomButton onClick={onConfirm} variant="contained" startIcon={<CheckIcon />}>
            Confirm
          </CustomButton>
        )}
        <CustomButton onClick={handleClose} variant="outlined">
          Close
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
