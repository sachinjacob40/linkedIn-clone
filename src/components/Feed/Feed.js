import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import SendIcon from '@mui/icons-material/Send';
import styles from './Feed.module.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import DP from '../../images/dp.jpe';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Feed(){

    const [data,setData]=useState([])
    const [dataRecieved,setDataRecieved]=useState(false)

    const [checkFetching,setCheckFetching]=useState(false);

    useEffect(()=>{

        window.addEventListener('scroll', handleScroll);

        axios.get('https://api.unsplash.com/photos?page=2&&client_id=4b93d1ba487be4e97a48a5872cfa8809e43a1c00a958f3d2da777e25f5aab6a2')
        .then((res)=>{
            setData(res.data)
            setDataRecieved(true)
        })
        .catch((err)=>{})

        return () => window.removeEventListener('scroll', handleScroll);
    },[])


    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            setCheckFetching(true);
            addListItems();
        }
        
      }


      function addListItems(){
        setTimeout(() => {
            setData(prevState => ([...prevState,...prevState]))
            setCheckFetching(false);
          }, 2000);
      }

    return(
        <div className={styles.mrs+" col-md-6 col-10" } align="center" >

        
        <div className="row">
            <div className='col' style={{height:'5rem'}}>
                <textarea type="text" placeholder="Write here. Add images or video for visual impact"  className={styles.textarea}/>
            </div>
        </div>
        <div className={styles.item+" row"}>

            <div className='col-md-8 col-8' style={{padding:8,cursor:'pointer'}}>
                <div className='row'>
                <div className='col'>
                <FeedOutlinedIcon color="disabled" fontSize="small"/> <span className={styles.hide}>Article</span>
            </div>

            <div className='col' style={{cursor:'pointer'}}>
            <PhotoCameraOutlinedIcon color="disabled" fontSize="small"/><span className={styles.hide}>Image</span> 
            </div>

            <div className='col' style={{cursor:'pointer'}}>
               <VideocamOutlinedIcon color="disabled" fontSize="small"/> <span className={styles.hide}>Video</span>
            </div>
                </div>
            </div>

            <div className='col'>
                <span className={styles.arrow}><SendIcon color="primary"/></span>
                
            </div>
            
        </div>
        <br/>
        
        { !data.length?(
           dataRecieved?<div>End of feed</div>:<div className='loader'></div>
        ): <div>
            {data.map(item=>(
                <div className='row' style={{margin:0}}>
            <div className='col' style={{backgroundColor:'white'}}> 
                <div className='row'>
                        <div className='col-1 img-fluid'>
                        <img src={item.user.profile_image.medium} alt="Avatar" className={styles.avatarsmall}/>
                        </div>
                        <div className={styles.textcontent+' col text-start'}>{item.user.name}<p>{item.user.location||'Kochi,Kerala'}</p></div>
                        <div className='col-1 ' style={{marginRight:10}}>
                            <MoreHorizIcon/>
                        </div>
                </div>

                <div className='row'>
                        <div className={styles.content+' col'} >
                            {item.user.bio}
                          </div>  
                       
                </div>

                <div className='row'>
                        <div className='col' style={{margin:10}}>
                            <img className={styles.limit} src={item.urls.regular}/>
                            
                        </div>  
                       
                </div>

                <div className='row'>
                    <div className='col-6'>
                        <div className='row'>
                        <div className='col-4'>
                             <FavoriteBorderOutlinedIcon/> <span>35</span>
                             
                             </div>
                          
        

                        <div className='col-4'>
                            <ChatBubbleOutlineOutlinedIcon/> 50
                        </div>

                        <div className='col-4'>
                                <ShareOutlinedIcon/> Share
                        </div>
                        </div> 
                </div>
                
                </div>

                <div className='row'>
                    <div className='col'>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
            ))}


       {true && <div style={{height:'4rem'}}><div className='loader'></div></div>}
        </div>    
        }
        


        </div>
    )
}

export default Feed;