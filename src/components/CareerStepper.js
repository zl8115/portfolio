// Library Imports
import React from 'react';

// Material UI Imports
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepContent from '@material-ui/core/StepContent';
import Stepper from '@material-ui/core/Stepper';
import Typography from '@material-ui/core/Typography';

function getSteps() {
  const stepList = [
    'Jan 2021 - Present: Work',
    'Oct 2019 - Aug 2020: Work',
    'Oct 2015 - Jun 2019: Studies',
    'Sep 2012 - Jul 2015: Studies',
    'Jan 2009 - Jun 2012: Studies'
  ]
  return stepList;
}

function getStepTitle(step) {
  switch(step) {
    case 0:
      return `Software Engineer`;
    case 1:
      return `Product Lead & Co-Founder`;
    case 2:
      return `MEng in Biomedical Engineering`;
    case 3:
      return `International Baccalaurreate & IGCSE`;
    case 4:
      return `Lower Secondary Assessment (PMR)`;
    default:
      return 'ERROR LOCATION';
  }
}

function getStepLocation(step){
  switch(step) {
    case 0:
      return `MICRO FOCUS, UNITED KINGDOM`;
    case 1:
      return `ELIZE.IO, UNITED KINGDOM`;
    case 2:
      return `IMPERIAL COLLEGE LONDON, UNITED KINGDOM`;
    case 3:
      return `WINDERMERE SCHOOL, UNITED KINGDOM`;
    case 4:
      return `VICTORIA INSTITUTION, MALAYSIA`;
    default:
      return 'ERROR LOCATION';
  }
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'My role at Micro Focus as a Software Enginner is to develop and maintain code primarily in C/C++. I have learned a lot about the Software Development Life Cycle and best practices when coding with new and legacy code.'
    case 1:
      return `My main duties in Elize.io is as a Full Stack Engineer and Machine Learning Engineer. I worked with developing the web application and building the Natural Language Processing (NLP) models used in the backend. The technology used are JavaScript, Express, React, Node, Python, MongoDB, Docker, AWS web deployment and Google Cloud Services`;
    case 2:
      return `During the 3rd and 4th (final) year of the 4-year undergraduate course, I had chosen the Electrical and Electronic (EE) stream which exposed me to statistical analysis techniques and methods. Amongst the modules I took were: Adaptive Signal Processing and Machine Intelligence; Advanced Signal Processing; Digital Biosignal Processing; Optimization; Pattern Recognition.`;
    case 3:
      return `I was given the opportunity to study in the UK at an earlier stage. This allowed me to develop a more International perspective of the world. This unique blend of education from Malaysia and United Kingdom gives me a unique perspective to the world.`;
    case 4:
      return `This was where I spent most of my secondary school education excluding the final year and a half. It was during these years that I developed most of my traits and virtues and even embodying the school motto of "To Be Yet Wiser; To Be a Scholar, Sportsman and a Gentleman". As a result, I am humble, focused, hardworking and curious.`;
    default:
      return 'Unknown step';
  }
}

// MAIN Function
export default function CareerStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleStep = step => () => {
    setActiveStep(step);
  };

  return(
    <Stepper nonLinear activeStep={activeStep} orientation="vertical">
      {steps.map((label, index) => (
        <Step key={label}>
          <StepButton onClick={handleStep(index)}>
            {label}
          </StepButton>
          <StepContent>
            <Typography variant="h6">{getStepTitle(index)}</Typography>
            <Typography variant="subtitle2">{getStepLocation(index)}</Typography>
            <br />
            <Typography>{getStepContent(index)}</Typography>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  )
}
