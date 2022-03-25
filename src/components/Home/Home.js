import Content from '../Content/Content';
import TopNav from '../TopNav/Topnav';
import style from './Home.module.css'

function Home(){
    return(
        <>
        <div className={style.nav+' row'}>
           <TopNav/>
          
        </div>

<br/>
        <div className="row">
           <Content/>
           <br/>
         </div>
         </>
    )
}


export default Home;