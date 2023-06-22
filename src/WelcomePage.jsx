import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Grid,
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
          We are excited to present our powerful Kubernetes visualization tool,
          designed to enhance your Kubernetes cluster management experience.
          With our tool, you can gain valuable insights into the structure,
          status, and performance of your Kubernetes environment, empowering you
          to make informed decisions and optimize your infrastructure.
        </h2>
        <Grid container className='gif-container'>
          <Grid item>
            <h2 className="feature1">Our app will provide a visual overview of your kubernetes cluster. The visualization will show the control plane, namespaces, pods, services, deployments and nodes.</h2>
            <img className="gif" src='https://user-images.githubusercontent.com/112515781/247570426-bf10b707-b72b-4b7e-8604-f96767da9d0b.gif'></img>
          </Grid>
          <Grid item>
            <h2 className="feature2">Our app will show you the health and status of the pods, it provides the details including image's name, ready, status, age, and IP. It additionally offers images & vulnerability scan.</h2>
            <img className="gif" src='https://user-images.githubusercontent.com/112515781/247573036-13cd8a06-3849-4a95-8853-b0833db0899a.gif'></img>
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
              href="/login/signupRequest"
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
        <Container className="button-container">
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
          </IconButton>
        </Container>
      </Container>
    </div>
  );
};

export default WelcomePage;
