// Library Imports
import React from 'react';

// Material UI Imports
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

// Material UI Icon Imports
import BuildIcon from '@mui/icons-material/Build';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';
import WorkIcon from '@mui/icons-material/Work';

// MAIN Function
export default function ResumeAccordion(props){
  return(
    <>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div style={{display: 'flex', alignItems:'center'}}>
            <WorkIcon/>
            <Typography variant="h6"> &nbsp;&nbsp;<strong>Work Experience</strong></Typography>
          </div>
        </AccordionSummary>

        <AccordionDetails>
          <Typography variant="body">
            <strong>Software Engineer</strong>, OpenText (formerly Micro Focus, United Kingdom
            <br/>            
            <em>January 2021 - Present</em>
            <br/>
            <ul>
              <li>Worked in IDOL KeyView, a document file reader and extraction software specializing in file format detection; decryption; and subfile, metadata and text extraction.</li>
              <li>Developed and maintained Software Development Kits in C/C++ used in low latency, high availability and high throughput application on various platforms like Windows, Linux and MacOS.</li>
              <li>Improved the C API interface for the FilterSDK product, streamlining customer workflow by unifying operations from a stream or file source and enabling cross-functionality between the modes.</li>
              <li>Optimized extracting text from Open Document Spreadsheet (.ods) files by profiling the reader and introducing a caching mechanism to reduce unnecessary overhead, reducing process time by 70%.</li>
              <li>Improved DevOps practices by introducing git worktree and developing various inhouse scripts, saving up to 36 hours per release cycle while improving reliability and resilience.</li>
              <li>Proposed and led a multi-stage project to improve the Jenkins CI/CD system with a potential to reduce lead time by 40%; deployment time by 50%; and error rates by 15%.</li>
            </ul>

            <strong>Full Stack Developer</strong>, Elize.io, United Kingdom
            <br/>            
            <em>October 2019 - August 2020</em>
            <br/>
            <ul>
              <li>Full-stack development using a MERN stack (MongoDB, Express.js, React.js, Node.js).</li>
              <li>Developed a Flask API that acts as an NLP Summarizer and Topic Classifier that summarizes documents into topics and bullet points.</li>
              <li>Technology used: Docker, AWS EC2 &amp; ECR; Google Speech-to-Text, Analytics &amp; Cloud Storage;</li>
              <li>Actively engaged with customers to deliver customer focused solutions.</li>
            </ul>

            <strong>Undergraduate Teaching Assistant</strong>, Imperial College London, United Kingdom
            <br/>            
            <em>2017 - 2019</em>
            <br/>
            <ul>
              <li>Assisted in tutoring 1st and 2nd year students to code in C and C++ (Programming 1 and 2 modules)</li>
            </ul>

            <strong>Technology Project Manager</strong>, Awetrip, Malaysia/United Kingdom
            <br/>            
            <em>July 2017 - June 2018</em>
            <br/>
            <ul>
              <li>Developed the main web platform using a LAMP (Laravel, Apache, MySQL, PHP) stack.</li>
              <li>The startup participated and won 1st place in iCUBE's CIPTA UK 2017 event that resulted in gaining the support of Cradle Fund Sdn Bhd, 1337 Ventures and Khazanah Nasional Bhd.</li>
            </ul>

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div style={{display: 'flex', alignItems:'center'}}>
            <SchoolIcon/>
            <Typography variant="h6"> &nbsp;&nbsp;<strong>Education</strong></Typography>
          </div>
        </AccordionSummary>

        <AccordionDetails>
          <Typography variant="body">
            <strong>MEng Biomedical Engineering (1st Class Honours)</strong>, Imperial College London, United Kingdom
            <br/>            
            <em>October 2015 - June 2019</em>
            <br/>
            <ul>
              <li><strong>4th Year (70%):</strong> Adaptive Signal Processing &amp; Machine Intelligence (87%), Optimisation (62%), Pattern Recognition (67%), Computational Neuroscience (66%), Animal Locomotion &amp; Bioinspired Robots (72%), Business Economics (86%), Brain Machine Interfaces (64%), MEng Biomedical Engineering Individual Project (67%)</li>
              <li><strong>3rd Year (69%):</strong> Modelling in Biology (77%), Digital Biosignal Processing (87%), Image Processing (69%), Biomedical Instrumentation (62%), Advanced Signal Processing (53%), Group Project (78%), Control Engineering (65%), Finance &amp; Financial Management (69%), Entrepreneurship (63%), Digital Biosignal Processing (75%)</li>
              <li><strong>2nd Year (71%):</strong> Programming 2 (86%), Mathematics 2 (73%), Signals &amp; Systems (63%), Control Systems (62%), Electrical Engineering 2 (81.5%), Electromagnetics 2 (70%), Mechanics 2 Fluids (77%), Heat &amp; Mass Transport 2 (74%), Medical Science 2 (71%), Mechanics 2 Solids (57%), Engineering Design Project (65.8%), Biomolecular Engineering 2 (66%)</li>
              <li><strong>1st Year (70%):</strong> Programming 1 (93%), Logic &amp; Digital Systems (71%), Mathematics 1 (66%), Bioengineering in Action (75%), Electrical Engineering 1 (48%), Electrical Engineering Labs (75%), Heat &amp; Mass Transport 1 (58%), Biomolecular Engineering 1 (73%), Molecules, Cells, Processes (66%), Medical Science 1 (63%), Vibrations &amp; Waves (71%), Mechanics 1 (84%)</li>
            </ul>

            <strong>International Baccalaureate - Bilingual Diploma (36/45)</strong>, Windermere School, United Kingdom
            <br/>            
            <em>2013 - 2015</em>
            <br/>
            <ul>
              <li><strong>Higher Level:</strong> Mathematics (6), Biology (6), Physics (6)</li>
              <li><strong>Standard Level:</strong> Psychology (6), English Language and Literature (5), Self-Taught Malay Literature 1 (5)</li>
              <li><strong>Extended Essay Physics:</strong> B</li>
              <li><strong>Theory of Knowledge:</strong> B</li>
            </ul>

            <strong>International General Certificate of Secondary Education (IGCSE) - Edexcel</strong>, Windermere School, United Kingdom
            <br/>            
            <em>2012 - 2013</em>
            <br/>
            <ul>
              <li>Mathematics: A*</li>
              <li>English Language: A</li>
            </ul>

            <strong>General Certificate of Secondary Education (GCSE) - AQA</strong>, Windermere School, United Kingdom
            <br/>            
            <em>2012 - 2013</em>
            <br/>
            <ul>
              <li>Biology: A*</li>
              <li>Chemistry: A*</li>
              <li>Physics: A*</li>
            </ul>

            <strong>Free Standing Mathematics Qualifications - OCR</strong>, Windermere School, United Kingdom
            <br/>            
            <em>2012 - 2013</em>
            <br/>
            <ul>
              <li>Additional Mathematics: A</li>
            </ul>

            <strong>Lower Secondary Assessment (PMR)</strong>, Victoria Institution, Malaysia
            <br/>            
            <em>2009 - 2011</em>
            <br/>
            <ul>
              <li>Malay Language: B</li>
              <li>English Language: A</li>
              <li>Mathematics: A</li>
              <li>Science: A</li>
              <li>History: A</li>
              <li>Geography: A</li>
              <li>Integrated Living Skills - Commerce and Entrepreneurship: A</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div style={{display: 'flex', alignItems:'center'}}>
            <BuildIcon/>
            <Typography variant="h6"> &nbsp;&nbsp;<strong>Engineering Experience</strong></Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="body">
            <strong>Undergraduate Research Opportunity (UROP) and 4th Year Engineering Individual Project</strong>, Imperial College London, United Kingdom
            <br/>            
            <em>July 2018 - June 2019</em>
            <br/>
            <ul>
              <li><strong>Project Title &amp; Description:</strong> A Focal Tracking System Design. Designed and developed a cheap novel focal tracking system that estimates and tracks the optimal focal distance of an image.</li>
              <li>Applied signal processing and machine vision skills to develop the algorithm using convolution filters, Fourier analysis and predictors such as gradient descent, LMS and Wiener Filters.</li>
              <li>Self-managed and organized the project to develop the machine vision and signal processing aspects in parallel with the hardware implementation.</li>
              <li>Presented the project at the AFRUK Summer School Celebration Gala 2018. Improved communication skills through the poster presentation and networking with the donators.</li>
            </ul>

            <strong>3rd Year Engineering Group Project</strong>, Imperial College London, United Kingdom
            <br/>            
            <em>Oct 2017 - June 2018</em>
            <br/>
            <ul>
              <li><strong>Project Title &amp; Description:</strong> Machine Learning based Denoising of Electrocardiogram Signals from a Wearable ECG Monitor. Worked in a team of 6 engineering students and 2 medical students to design and develop a wearable ECG monitor and a five-layer convolutional autoencoder used to denoise the recorded signal.</li>
              <li>Codeveloped the machine learning architecture using PyTorch on Linux to train the model. Developed a deeper understanding to apply machine learning and signal processing</li>
              <li>Applied signal processing skills to denoise the ECG signal for comparison and verification.</li>
              <li>Applied simple statistical analysis methods to verify the significance of the denoising model.</li>
            </ul>

            <strong>2nd Year Engineering Design Project</strong>, Imperial College London, United Kingdom
            <br/>            
            <em>Oct 2016 - June 2017</em>
            <br/>
            <ul>
              <li><strong>Project Title &amp; Description:</strong> Controlling Ada Hand with Myoband: Myobionics. Worked in a team of 9 to design a control interface between a prosthetic arm (Ada Hand) and a wearable EMG recording device (Myoband) placed on the forearm.</li>
              <li>Managed and directed the team to meet the required milestone and goals of the project. Developed leadership and management skills.</li>
              <li>Utilized Arduino IDE and electrical engineering skills to develop the Bluetooth interface.</li>
              <li>Exhibited the project at Imperial Festival. Gained experience in public engagement and improved on presentation skills to a general audience.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <div style={{display: 'flex', alignItems:'center'}}>
            <SettingsIcon/>
            <Typography variant="h6"> &nbsp;&nbsp;<strong>Skills</strong></Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body">
            <strong>IT Skills</strong>
            <ul>
              <li>Microsoft Excel and other Office packages.</li>
              <li>Adobe Photoshop and Illustrator.</li>
              <li>SolidWorks.</li>
              <li>LabView.</li>
              <li>Linux.</li>              
            </ul>

            <strong>Programming</strong>
            <ul>
              <li>C &amp; C++</li>
              <li>MATLAB &amp; MuPad</li>
              <li>Python - Pandas, NumPy, scikit-learn, matplotlib, seaborn, BeautifulSoup, TensorFlow.</li>
              <li>Javascript - Node.js, Express.js, React.js.</li>
              <li>PHP &amp; MySQL.</li>
              <li>HTML &amp; CSS.</li>
              <li>Arduino IDE.</li>
            </ul>

            <strong>Languages</strong>
            <ul>
              <li>English (Native)</li>
              <li>Malay (Fluent)</li>
              <li>Chinese (Basic)</li>
              <li>Japanese (Basic)</li>
            </ul>

            <strong>Roles</strong>
            <ul>
              <li>Vice-Captain of Imperial College Kendo Club (2018-2019)</li>
              <li>Secretary of Imperial College Kendo Club (2018-2019)</li>
            </ul>

            <strong>Achievements</strong>
            <ul>
              <li>Autonomous Racer Winner and People's Choice (2019)</li>
              <li>Best Ethics Report (2016)</li>
              <li>Gold Duke of Edinburgh Award (2016)</li>
              <li>Gold UKMT Senior Challenge Award (2015)</li>
            </ul>

            <strong>Studentships</strong>
            <ul>
              <li>Animal Free Research UK (AFRUK) Summer Studentship 2018</li>
            </ul>
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      </>
  )
}