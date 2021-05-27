import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Image from 'react-bootstrap/Image';
import Tybalt from './tybalt.png';
import Benvolio from './Benvolio.jpg';
import Dashboard from './main-dashboard.gif';
import Notification from './notification.gif';
import Messages from './messages.gif';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Object of the Game', 'Follow Characters', 'Main Dashboard','Notification Panel', 'Messages Panel'];
}

function getStepContent(step) {
    
  switch (step) {
    case 0:
      return <div style={{display: "flex", marginBottom: "20px"}}>
            <text><strong>First thing’s first:</strong> your goal is to gain as much influence as you can through the posts you decide to share. As you navigate through your dashboard, some people or stories may seem a bit familiar to you. Who knows! Over time you may gain enough influence to dictate their endings. The choice is always yours.
            </text>
            </div>;
    case 1:
      return <div>
      <div>
        <text>Let’s start off with following some popular accounts for inspiration! Click on any of their profile pictures to look through their content first or Follow All if you wish to go straight to your dashboard.

        </text>
      </div>
       <div  style={{display: "flex", width: "100%", alignItems: "center", justifyContent:"center"}}>
            <Image style={{width: "100px", marginRight:"30px"}} src={Tybalt} roundedCircle></Image>
            <Image style={{width: "100px"}} src={Benvolio} roundedCircle></Image>
        </div> 
        <div style={{marginBottom: "20px", display: "flex", marginTop:"10px", width: "100%", alignItems: "center", justifyContent:"center"}}>
            <text style={{paddingLeft:"10px", marginRight:"30px"}}>Tybalt</text>
            <text style={{paddingLeft:"50px"}}>Benvolio</text>
        </div>
        </div>;
    case 2:
      return <div style={{ marginBottom: "20px"}}>
      <text>This section here is your Main Dashboard. Here you will find all the content you can potentially share to your profile. You can like, view comments, and scroll at your leisure. 

        <br></br>
        <br></br>Since you are a new account, the amount and types of posts you can share at the moment are unfortunately limited.

      </text>
      <div style={{marginBottom: "20px", display: "flex", marginTop:"10px", width: "100%", alignItems: "center", justifyContent:"center"}}><Image style={{width: "400px"}} src={Dashboard}></Image></div>
      </div>;
    case 3:
      return <div style={{ marginBottom: "20px"}}>
      <text>These are your Notifications. Follower interactions and engagement are recorded here.
      </text>
      <div style={{marginBottom: "20px", display: "flex", marginTop:"10px", width: "100%", alignItems: "center", justifyContent:"center"}}><Image style={{width: "400px"}} src={Notification}></Image></div>
      </div>;
      case 4:
        return <div style={{ marginBottom: "20px"}}>
        <text>These are your Direct Messages. Rather self-explanatory. Time to time we will send you messages to help with your experience and provide some pointers. 
        </text>
        <div style={{marginBottom: "20px", display: "flex", marginTop:"10px", width: "100%", alignItems: "center", justifyContent:"center"}}><Image style={{width: "400px"}} src={Messages}></Image></div>
        </div>;
    default:
      return 'Unknown step';
  }
}

 function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : ''}
                    {activeStep === steps.length - 2 ? 'Next' : ''}
                    {activeStep === steps.length - 3 ? 'Next' : ''}
                    {activeStep === steps.length - 4 ? 'Follow All' : ''}
                    {activeStep === steps.length - 5 ? 'Next' : ''}
                    
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Tutorial Complete - please exit to proceed to the game</Typography>
          <Button variant="contained" color="primary" onClick={handleReset} className={classes.button}>
            Reset Tutorial
          </Button>
        </Paper>
      )}
    </div>
  );
}

export default VerticalLinearStepper