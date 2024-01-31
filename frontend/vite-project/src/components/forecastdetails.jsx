import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function ForecastDetails({isloading,open,setopen,forecastdata}) {
  

  const handleClose = () => {
    setopen(false);
  };

  return (
    <React.Fragment>
     
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {forecastdata?.name }
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
        <DialogContent dividers style={{height:'600px'}}>
        {isloading?<CircularProgress sx={{position:'absolute',left:'45%',top:'40%'}} />:<>
          <Typography gutterBottom>
            These details are valid for today!
          </Typography>
          <Typography gutterBottom>
          Air Pressure:{forecastdata['air-pressure']}
          </Typography>
          <Typography gutterBottom>
          Humidity:{forecastdata['humidity']}
          </Typography>
          <Typography gutterBottom>
          Wind Speed:{forecastdata['wind']}
          </Typography>
          <Typography gutterBottom>
          Temprature:{forecastdata['temp']}
          </Typography>
          <Typography gutterBottom>
          Precipitation:{forecastdata['precipitation']}
          </Typography>
          <Typography gutterBottom>
          Past Accidents:{forecastdata['past-accidents']}
          </Typography>
          <Typography gutterBottom>
          Danger Prediction:{
          (forecastdata['prediction']==='1' && "low danger")||(forecastdata['prediction']==='2'&& "moderate danger")||(forecastdata['prediction']==='3'&& "considerable danger")||(forecastdata['prediction']==='4'&& "high danger")||(forecastdata['prediction']==='5'&& "very high danger")}
          </Typography>
          </>
          }
          
        </DialogContent>
       
      </BootstrapDialog>
    </React.Fragment>
  );
}