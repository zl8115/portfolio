// Library Imports
import React from 'react';

// Material UI Imports
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';

// Material UI Icon Imports
import BuildIcon from '@material-ui/icons/Build';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SchoolIcon from '@material-ui/icons/School';
import SettingsIcon from '@material-ui/icons/Settings';
import WorkIcon from '@material-ui/icons/Work';

// MAIN Function
export default function ResumeAccordian(props){
  return(
    <>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div style={{display: 'flex', alignItems:'center'}}>
            <SchoolIcon/>
            <Typography variant="h6"> &nbsp;&nbsp;<strong>Education</strong></Typography>
          </div>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <Typography variant="body" paragraph>
            <strong>MEng Biomedical Engineering (1st Class Honours)</strong>, Imperial College London, United Kingdom
            <br/>            
            <em>October 2015 - June 2019</em>
            <br/>
            <ul>
              <li><strong>1st Year (70%):</strong> Programming 1 (93%), Logic &amp; Digital Systems (71%), Mathematics 1 (66%), Bioengineering in Action (75%), Electrical Engineering 1 (48%), Electrical Engineering Labs (75%), Heat &amp; Mass Transport 1 (58%), Biomolecular Engineering 1 (73%), Molecules, Cells, Processes (66%), Medical Science 1 (63%), Vibrations &amp; Waves (71%), Mechanics 1 (84%)</li>
              <li><strong>2nd Year (71%):</strong> Programming 2 (86%), Mathematics 2 (73%), Signals &amp; Systems (63%), Control Systems (62%), Electrical Engineering 2 (81.5%), Electromagnetics 2 (70%), Mechanics 2 Fluids (77%), Heat &amp; Mass Transport 2 (74%), Medical Science 2 (71%), Mechanics 2 SOlids (57%), Engineering Design Project (65.8%), Biomolecular Engineering 2 (66%)</li>
              <li><strong>3rd Year (69%):</strong> Modelling in Biology (77%), Digital Biosignal Processing (87%), Image Processing (69%), Biomedical Instrumentation (62%), Advanced Signal Processing (53%), Group Project (78%), Control Engineering (65%), Finance &amp; Financial Management (69%), Entrepreneurship (63%), Digital Biosignal Processing (75%)</li>
              <li><strong>4th Year (70%):</strong> Adaptive Signal Processing &amp; Machine Intelligence (87%), Optimisation (62%), Pattern Recognition (67%), Computational Neuroscience (66%), Animal Locomotion &amp; Bioinspired Robots (72%), Business Economics (86%), Brain Machine Interfaces (64%), MEng Biomedical Engineering Individual Project (67%)</li>
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
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div style={{display: 'flex', alignItems:'center'}}>
            <WorkIcon/>
            <Typography variant="h6"> &nbsp;&nbsp;<strong>Work Experience</strong></Typography>
          </div>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <Typography variant="body" paragraph>
            <strong>Product Lead</strong>, Elize.io, United Kingdom
            <br/>            
            <em>October 2019 - August 2020</em>
            <br/>
            <ul>
              <li>Dealt with customer development: interviewed and interacted directly with customers to identify and understand customer needs.</li>
              <li>Followed AGILE methodology to manage and plan SPRINT cycles to develop the technology.</li>
              <li>Full-stack development using a MERN stack (MongoDB, Express.js, React.js, Node.js).</li>
              <li>Developed a Flask powered Python REST API that acts as an NLP Summarizer and Topic Classifier that summarizes documents into topics and bullet points.</li>
              <li>Developed, deployed and mainted services using Docker, AWS EC2 and ECR.</li>
            </ul>

            <strong>Undergraduate Teaching Assistant</strong>, Imperial College London, United Kingdom
            <br/>            
            <em>2017 - 2019</em>
            <br/>
            <ul>
              <li>Helped tutor 1st and 2nd year students to code in C and C++ programming (Programming 1 and 2 modules)</li>
              <li>Developed a deeper understanding and appreciation for lower level programming languages.</li>
              <li>Improved listening and communication skills from discussing problems and solutions.</li>
            </ul>

            <strong>Technology Project Manager</strong>, Awetrip, Malaysia/United Kingdom
            <br/>            
            <em>July 2017 - June 2018</em>
            <br/>
            <ul>
              <li>First attempt at creating a startup during university days</li>
              <li>As Technology Project Manager, I constructed and directed the timeline required for the project</li>
              <li>Web Developer, used the LAMP (Laravel, Apache, MySQL, PHP) stack to develop the front-end and backend of the web platform.</li>
            </ul>

            <strong>Cashier</strong>, De Market, Malaysia
            <br/>            
            <em>Aug 2016 - Sept 2016</em>
            <br/>
            <ul>
              <li>Developed skills in task management, decision-making skills and working under pressure. Operated both the scanning and bagging of items in an accurate and efficient manner to maintain customer satisfaction and streamline the paying process.</li>
            </ul>

            <strong>Promoter</strong>, Adz, Malaysia
            <br/>            
            <em>July 2016</em>
            <br/>
            <ul>
              <li>Presented the app to both potential customers and investors. Developed an articulate mindset to persuade and promote the product that best fit the clients' interest.</li>
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div style={{display: 'flex', alignItems:'center'}}>
            <BuildIcon/>
            <Typography variant="h6"> &nbsp;&nbsp;<strong>Engineering Experience</strong></Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Typography variant="body" paragraph>
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
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <div style={{display: 'flex', alignItems:'center'}}>
            <SettingsIcon/>
            <Typography variant="h6"> &nbsp;&nbsp;<strong>Skills</strong></Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="body" paragraph>
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
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </>
  )
}