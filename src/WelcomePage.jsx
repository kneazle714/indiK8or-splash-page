import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Grid,
  Box,
  Typography
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Welcome.scss';
import logo from './assets/logo1.png';

const WelcomePage = () => {

  return (
    <div id="back">
      <Container className="welcome-container">
        <h1 className="intro-heading">
          Introducing indiK8or: Simplify and Visualize Your Kubernetes
          Environment
        </h1>
        <h2 className="intro">
        We are excited to present our powerful Kubernetes visualization tool, designed to enhance your Kubernetes cluster management 
        experience while ensuring the security of your infrastructure. By combining metrics visualization and vulnerability scanning,
         our tool empowers you to optimize your infrastructure, make informed decisions, and maintain a secure Kubernetes environment.
        </h2>
        <Typography variant="body1" className="header1" align="center" sx={{ fontWeight: 'bold' }}>
              ☆ Getting Started ☆
              </Typography>
        <Grid container class='start-container'>
          <Grid item>
            <h2 className="start1">• Visit our GitHub repository <a href="https://github.com/oslabs-beta/indiK8or" target="_blank" rel="noopener noreferrer" className='hyperlink'>here.</a></h2>
            <h2 className="start2">• Follow the steps in <a href="https://github.com/oslabs-beta/indiK8or#readme" target="_blank" rel="noopener noreferrer" className='hyperlink'>README</a> to start the application.</h2>
          </Grid>
        </Grid>
        <Typography variant="body1" className="header2" align="center" sx={{ fontWeight: 'bold' }}>
              <span role="img" aria-label="star" className="star">✼ </span>
                About Our App
                <span role="img" aria-label="star" className="star"> ✼</span>
              </Typography>
        <Grid container class='gif-container'>
          <Grid item>
            <h2 className="feature1">Our app will provide a visual overview of your kubernetes cluster. The dashboard will show CPU, memory, disk and network metrics.</h2>
            <img className="gif" align="left" src='https://user-images.githubusercontent.com/112515781/247570426-bf10b707-b72b-4b7e-8604-f96767da9d0b.gif'></img>
          </Grid>
          <Grid item>
            <h2 className="feature2" >Our app will show you the health and status of the pods, it provides the details including image's name, ready, status, age, and IP. It additionally offers images & vulnerability scan.</h2>
            <img className="gif" align="left" src='https://user-images.githubusercontent.com/112515781/247573036-13cd8a06-3849-4a95-8853-b0833db0899a.gif'></img>
          </Grid>
        </Grid>
        <AppBar className="navbar">
          <Toolbar className='toolbar'>
          <img className="logo" src={logo} alt='Logo'/>
            <Button
              className="button1"
              variant="text"
              href="https://github.com/oslabs-beta/indiK8or"
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              className="button2"
              variant="text"
              href="https://www.linkedin.com/company/indik8or"
              target="_blank"
            >
              LinkedIn
            </Button>
            <Button
              className="button3"
              variant="text"
              href="https://medium.com/@wanwangbtb/a-new-game-player-indik8or-237daac583d6"
              target="_blank"
            >
              Blog
            </Button>
          </Toolbar>
        </AppBar>
        
        <Grid item>
            <Box className="team-container">
              <Typography variant="body1" className="authors" align="center" sx={{ fontWeight: 'bold' }}>
              <span role="img" aria-label="star" className="star">♥ </span>
                Meet the Team
                <span role="img" aria-label="star" className="star"> ♥</span>
              </Typography>
              <Grid container>
                <Grid item>
                  <Box className="team-box">
                    <img className="team-photo" src='https://user-images.githubusercontent.com/112515781/246527162-176051e8-ef3e-410f-bc76-b808f36c28df.png' alt="Ivy Wang" />
                    <Typography variant="subtitle1" className="name" sx={{ fontWeight: 'bold' }}>Ivy Wang</Typography>
                    <Box className="team-icon" display="flex">
                      <IconButton href="https://www.linkedin.com/in/wanwang12/">
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton href="https://github.com/WandefulWorld">
                        <GitHubIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Grid>
                <Grid item>
                  <Box className="team-box">
                    <img className="team-photo" src='https://user-images.githubusercontent.com/112515781/246527230-794a60b7-b0b2-461c-b0de-f698ee506387.png' alt="Julian Babon" />
                    <Typography variant="subtitle1" className="name" sx={{ fontWeight: 'bold' }}>Julian Babon</Typography>
                    <Box className="team-icon" display="flex">
                      <IconButton href="https://www.linkedin.com/in/julianbabon/">
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton href="https://github.com/babonjmc">
                        <GitHubIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Grid>
                <Grid item>
                  <Box className="team-box">
                    <img className="team-photo" src='https://user-images.githubusercontent.com/112515781/246527136-5d6998e9-07cf-4189-81d9-291b09188063.png' alt="Tadd LeRocque" />
                    <Typography variant="subtitle1" className="name" sx={{ fontWeight: 'bold' }}>Tadd LeRocque</Typography>
                    <Box className="team-icon" display="flex">
                      <IconButton href="https://www.linkedin.com/in/tadd-lerocque-120a0287/">
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton href="https://github.com/LeRocque">
                        <GitHubIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Grid>
                <Grid item>
                  <Box className="team-box">
                    <img className="team-photo" src='https://user-images.githubusercontent.com/112515781/247617247-7d6f4638-f815-4337-87b3-853fe26fe454.png' alt="Yueran Li" />
                    <Typography variant="subtitle1" className="name" sx={{ fontWeight: 'bold' }}>Yueran Li</Typography>
                    <Box className="team-icon" display="flex">
                      <IconButton href="https://www.linkedin.com/in/yueran-li-ba79bb46/">
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton href="https://github.com/kneazle714">
                        <GitHubIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
      </Container>
    </div>
  );
};

export default WelcomePage;
