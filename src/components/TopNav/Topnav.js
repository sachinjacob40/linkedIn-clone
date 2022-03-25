import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WorkIcon from '@mui/icons-material/Work';
import GridViewIcon from '@mui/icons-material/GridView';
import style from './Topnav.module.css';
import DP from '../../images/dp.jpe';
import SearchIcon from '@mui/icons-material/Search';

function Topnav(){

    return(
        <>
        <div className=' col-md-1 col-1'><LinkedInIcon color="primary" sx={{ fontSize: 50 }}/></div>
        <div className={style.searchbar+" col-md-2 col-2"} > <input type="text" style={{width:'100%'}} placeholder="Search.."/></div>
        <div className={style.margin+' col-md-8 col-8'}>
            <div className={style.rowz+" row g-0"}>
                <div className= {style.pointericons+" col"} ><HomeIcon color="primary"/><span className={style.text}>Home</span> </div>
                <div className= {style.pointericons+" col"} ><NotificationsIcon/> <span className={style.text}>Notifications</span></div>
                <div className= {style.pointericons+" col"} ><PeopleIcon/> <span className={style.text}>Network</span></div>
                <div className= {style.pointericons+" col"} ><WorkIcon/> <span className={style.text}>Jobs</span></div>
                <div className= {style.pointericons+" col"} ><GridViewIcon/> <span className={style.text}>Work</span></div>
                <div className= {style.pointericons+" col"} ><ChatBubbleOutlineIcon/><span className={style.text}>Messaging</span></div>
            </div>
        </div>
        
        <div className={style.neg+' col-md-1 col img-fluid'} style={{marginTop:5,cursor:'pointer'}}><img src={DP} alt="Avatar" className={style.avatar}/></div>
        </>
    )
}


export default Topnav;