// Library Imports
import React from 'react';

// Material UI Imports
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import StepContent from '@mui/material/StepContent';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function getSteps() {
  const stepList = [
    'Jan 2021 - Present',
    'Oct 2019 - Aug 2020'
  ]
  return stepList;
}

function getStepTitle(step) {
  switch(step) {
    case 0:
      return `Software Engineer`;
    case 1:
      return `Product Lead & Co-Founder`;
    default:
      return 'ERROR LOCATION';
  }
}

function getStepLocation(step){
  switch(step) {
    case 0:
      return `OpenText (FORMERLY MICRO FOCUS), UNITED KINGDOM`;
    case 1:
      return `ELIZE.IO, UNITED KINGDOM`;
    default:
      return 'ERROR LOCATION';
  }
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (<React.Fragment>
        At OpenText, I worked on <Link href="https://www.microfocus.com/en-us/products/file-viewer-filter/overview" underline="always" color="inherit">IDOL KeyView</Link>, a document file reader and extraction software that specializes in file format detection; decryption; and subfile and text extraction of over 1500 file formats. My role in this team is to develop and maintain the Software Development Kits used in low latency, high availability and high throughput application on various platforms like Windows, Linux and MacOS. In this role, I have gained invaluable experience in C/C++ development on Windows on a large code base with legacy code.
      </React.Fragment>)
    case 1:
      return (<React.Fragment>
        I co-founded a startup, Elize.io, to develop to provide automated transcription and summarisation. As Product Lead, my main role was more akin to a Full Stack Developer and Machine Learning Engineer to develop the web platform and technology stack used to perform automated transcription and summarisation. This allowed me to develop my programming skills in Python, React and Node.js while expanding my systems engineer knowledge with Docker, AWS and Google Cloud Services. This opportunity also required me to get a deeper understanding of Natural Language Processing and expand my knowledge on machine learning. However, through my other role as co-founder, I was able to develop much more valuable insights on company operations, such as product management, communication and providing value to customers. Whilst, this startup did not succeed and has since dissolved, this experience has provided me with a unique and invalueable experience to have a more holistic approach when delivering solutions.
      </React.Fragment>);
    default:
      return (<React.Fragment>
        Unknown step
      </React.Fragment>);
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
