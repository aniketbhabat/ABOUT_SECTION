import './sidebar.css'
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Sidebar(){
    return(
     <div id="sidebar">
        <div id="top">
        <img src="Aniket .passport.jpg"></img>
        <h2>Aniket</h2>
        <h3>Hello,World!</h3>
        </div>
        <hr></hr>
        <div id="age">
            <HourglassBottomIcon className='icons'/>
        <div>
                <h4>AGE</h4>
                <p>23 years old</p>
             </div>
        </div>

        <div id="location">
            <LocationOnIcon className='icons'/>
             <div>
                <h4>LOCATION</h4>
                <p></p>India
             </div>
        </div>

        <div id="personality">
            <PersonIcon className='icons'/>
            <div>
            <h4>PERSONALITY</h4>
                <p>Introvert</p>
             </div>
        </div>

        <div id="social">
        <GitHubIcon className='social-icons'/>
        <InstagramIcon className='social-icons'/>
        <LinkedInIcon className='social-icons'/>
        <TwitterIcon className='social-icons'/>
        </div>
     </div>
    )
 }
 
 export default Sidebar