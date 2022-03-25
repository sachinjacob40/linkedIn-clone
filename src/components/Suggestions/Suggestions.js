import styles from './Suggestions.module.css'
import DP from '../../images/dp.jpe'
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Suggestions(){

    return(
        <div className={styles.box+" col-md-3 col-3 d-none d-md-block"} >
        
        <div className={styles.divspacer+" row"}>
                <div className='col' style={{padding:'20px 0px 20px 0px',fontWeight:600}}>People you may know</div>
            </div>

            <div className={styles.divspacer+" row"}>
               <div className='col' style={{padding:'20px 0px 20px 0px'}}><img src={DP} alt="Avatar" className={styles.avatarsmall}/> <span>Nina Douglas </span><sub className={styles.sub}>Recruiter - Orange</sub><span className={styles.iconz} style={{marginLeft:1}}><AddCircleIcon color="primary"/></span></div>
            </div>

            <div className={styles.divspacer+" row"}>
                        <div className='col' style={{padding:'20px 0px 20px 0px'}}><img src={DP} alt="Avatar" className={styles.avatarsmall}/> <span>Nina Douglas </span><sub className={styles.sub}>UI/UX Designer</sub><span className={styles.iconz}><AddCircleIcon color="primary"/></span></div>
            </div>

            <div className={styles.divspacer+" row"}>
                 <div className='col' style={{padding:'20px 0px 20px 0px'}}><img src={DP} alt="Avatar" className={styles.avatarsmall}/> <span>Nina Douglas </span><sub className={styles.sub}>SEO Specialist</sub><span className={styles.iconz}><AddCircleIcon color="primary"/></span></div>
            </div>

            <div className={styles.divspacer+" row"}>
            <div className='col' style={{padding:'20px 0px 20px 0px'}}><img src={DP} alt="Avatar" className={styles.avatarsmall}/> <span>Nina Douglas </span><sub className={styles.sub}>Web Developer</sub><span className={styles.iconz}><AddCircleIcon color="primary"/></span></div>
            </div>
            

        </div>
    )


}


export default Suggestions;