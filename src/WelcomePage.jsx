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
        experience while ensuring the security of your infrastructure. With our tool, not only can you gain valuable insights into the 
        structure, status, and performance of your Kubernetes environment, but you can also proactively assess and address vulnerabilities. 
        Our integrated vulnerability scan security feature provides comprehensive scanning capabilities, allowing you to identify and mitigate 
        potential security risks in your Kubernetes deployments. This empowers you to make informed decisions, optimize your infrastructure, 
        and maintain a secure and robust Kubernetes environment.
        </h2>
        <Grid container class='gif-container'>
          <Grid item>
            <h2 className="feature1">Our app will provide a visual overview of your kubernetes cluster. The visualization will show the control plane, namespaces, pods, services, deployments and nodes.</h2>
            <img className="gif" align="left" src='https://user-images.githubusercontent.com/112515781/247570426-bf10b707-b72b-4b7e-8604-f96767da9d0b.gif'></img>
          </Grid>
          <Grid item>
            <h2 className="feature2" >Our app will show you the health and status of the pods, it provides the details including image's name, ready, status, age, and IP. It additionally offers images & vulnerability scan.</h2>
            <img className="gif" align="left" src='https://user-images.githubusercontent.com/112515781/247573036-13cd8a06-3849-4a95-8853-b0833db0899a.gif'></img>
          </Grid>
        </Grid>
        <AppBar className="navBar">
          <Toolbar>
          <img className="logo" src={logo}></img>
            <Button
              className="button1"
              variant="text"
              href="https://github.com/oslabs-beta/indiK8or"
              target="_blank"
            >
              Github
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
        {/* <Container className="button-container">
          <Button className="authors" variant="text" disabled={true}>
            Our engineers:
          </Button>
          <Button className="name" variant="text" disabled={true}>
            Ivy Wang
          </Button>
          <IconButton
            className="linkedin"
            href="https://www.linkedin.com/in/wanwang12/"
          >
            <LinkedInIcon></LinkedInIcon>
          </IconButton>
          <IconButton
            className="github"
            href="https://github.com/WandefulWorld"
          >
            <GitHubIcon></GitHubIcon>
          </IconButton>
          <Button className="name" variant="text" disabled={true}>
            Julian Babon
          </Button>
          <IconButton
            className="linkedin"
            href="https://www.linkedin.com/in/julianbabon/"
          >
            <LinkedInIcon></LinkedInIcon>
          </IconButton>
          <IconButton className="github" href="https://github.com/babonjmc">
            <GitHubIcon></GitHubIcon>
          </IconButton>
          <Button className="name" variant="text" disabled={true}>
            Tadd LeRocque
          </Button>
          <IconButton
            className="linkedin"
            href="https://www.linkedin.com/in/tadd-lerocque-120a0287/"
          >
            <LinkedInIcon></LinkedInIcon>
          </IconButton>
          <IconButton className="github" href="https://github.com/LeRocque">
            <GitHubIcon></GitHubIcon>
          </IconButton>
          <Button className="name" variant="text" disabled={true}>
            Yueran Li
          </Button>
          <IconButton
            className="linkedin"
            href="https://www.linkedin.com/in/yueran-li-ba79bb46/"
          >
            <LinkedInIcon></LinkedInIcon>
          </IconButton>
          <IconButton className="github" href="https://github.com/kneazle714">
            <GitHubIcon></GitHubIcon>
          </IconButton> */}
        {/* </Container> */}
        <Grid item>
            <Box className="team-container">
              <Typography variant="body1" className="authors" align="center">
                Meet the Team
              </Typography>
              <Grid container>
                <Grid item>
                  <Box className="team-box">
                    <img src='https://user-images.githubusercontent.com/112515781/246527162-176051e8-ef3e-410f-bc76-b808f36c28df.png' alt="Ivy Wang" />
                    <Typography variant="subtitle1">Ivy Wang</Typography>
                    <Box display="flex">
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
                    <img src='https://user-images.githubusercontent.com/112515781/246527230-794a60b7-b0b2-461c-b0de-f698ee506387.png' alt="Julian Babon" />
                    <Typography variant="subtitle1">Julian Babon</Typography>
                    <Box display="flex">
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
                    <img src='https://user-images.githubusercontent.com/112515781/246527136-5d6998e9-07cf-4189-81d9-291b09188063.png' alt="Tadd LeRocque" />
                    <Typography variant="subtitle1">Tadd LeRocque</Typography>
                    <Box display="flex">
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
                    <img src='https://user-images.githubusercontent.com/112515781/247617247-7d6f4638-f815-4337-87b3-853fe26fe454.png' alt="Yueran Li" />
                    <Typography variant="subtitle1">Yueran Li</Typography>
                    <Box display="flex">
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
