import DP from '../../images/dp.jpe';
import styles from './Profile.module.css'
function Profile(){

    return(
        <div className={" col-md-3 col-3 d-none d-md-block"} align="center">

            <div className={styles.box}>

            <br/>

            <div className="row ">
                <div className="col "><img src={DP} alt="Avatar" className={styles.avatar}/></div>
            </div>


            <div className="row">
                <div className="col">Lucille Montgomery</div>
            </div>


            <div className="row">
                <div className="col">UI/UX Designer</div>
            </div>

            
            <div className="row">
                <div className="col" ><a style={{wordBreak:'break-all'}} href="">http://linkedin.com/in/lucille</a></div>
            </div>


            <br/>

            <div className={styles.border+" row"}>
                <div className={styles.rborder+" col"}>
                    <div style={{fontWeight:'bold'}}>767</div>
                    <div>Connections</div>
                </div>


                <div className={styles.space+" col"}>
                <div style={{fontWeight:'bold'}}>60</div>
                    <div>Views</div>
                </div>
            </div>


            <div className='row'>
                <div className={styles.onlypadding+" col"}>Free access exclusive tools & insights</div>
            </div>

            <div className='row'>
             <div className={styles.onlypadding+" col "}> <button className={styles.buttonstyle}>Uprgade to premium</button></div> 
            </div>

            </div>
        </div>
    )
}


export default Profile;