import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, useTheme, useMediaQuery } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

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
  padding: theme.spacing(2),
  position: 'relative',
  backgroundColor: theme.palette.background.paper, // Adjust this for different background colors
}));

const CustomDialogTitle = styled(DialogTitle)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 'bold',
  padding: theme.spacing(2),
}));

const AnimatedDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    animation: `${dialogEnter} 500ms ${theme.transitions.easing.easeOut} forwards`,
    '&.MuiDialog-paperExit': {
      animation: `${dialogExit} 500ms ${theme.transitions.easing.easeIn} forwards`,
    },
  },
}));

const CustomDialog = ({ open, handleClose, title, content }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AnimatedDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="custom-dialog-title"
      aria-describedby="custom-dialog-description"
      fullScreen={fullScreen}
      closeAfterTransition
    >
      <CustomDialogTitle id="custom-dialog-title">
        {title}
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
      </CustomDialogTitle>
      <CustomDialogContent dividers>
        <DialogContentText id="custom-dialog-description" sx={{ textAlign: 'center' }}>
          {content}
        </DialogContentText>
      </CustomDialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained" color="primary" sx={{ margin: '0 auto', borderRadius: '20px', marginBottom: 2 }}>
          Close
        </Button>
      </DialogActions>
    </AnimatedDialog>
  );
};

export default CustomDialog;
