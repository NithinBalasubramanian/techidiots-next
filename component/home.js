import React , { useState , useEffect } from 'react';
import Link from 'next/link'
import axios from './apiInstance/Instance_API';
import moment from 'moment';

const Home = () => {

    let [ Listdata , setListdata ] = useState([]);
  
    let [ ListInfo , setListInfo ] = useState([]);
  
    let [ ListNews , setListNews ] = useState([]);
    
    let [ ListTopdata , setListTopdata ] = useState([]);
  
    let [ FetchStatus , setFetchStatus ] = useState(true);
  
      useEffect(() => {
          window.scrollTo(0, 0);
          fetchAbove();
        
        const timer = setTimeout(() => {
           fetchMid();
          }, 3000);
        const timer1 = setTimeout(() => {
           fetchAll();
          }, 5000);
        return () => clearTimeout(timer);
        
      }, [])
    
      const fetchAbove = () => {
          axios.get('/homeTopFetch')
        .then((res) => {
              setListTopdata(res.data);
              setFetchStatus(false);
          })
          .catch((error) => {
              console.log(error);
          })
      }
      
      const fetchMid = () => {
         axios.get('/blogFetchHome/techInfo')
        .then((res) => {
              setListInfo(res.data);
          })
          .catch((error) => {
              console.log(error);
          })
          axios.get('/blogFetchHome/techNews')
        .then((res) => {
              setListNews(res.data);
          })
          .catch((error) => {
              console.log(error);
          })
      }
  
      const fetchAll = () =>{
          axios.get('/homeFetch')
          .then((res) => {
              setListdata(res.data);
          })
          .catch((error) => {
              console.log(error);
          })
      }

    return(
        <>
        <div className={(FetchStatus) ? "preLoader" : "preNone" } >
            <div className="wrap">
                <div className="loading">
                    <div className="bounceball"></div>
                    <div className="text">Fetching</div>
                </div>
            </div>
        </div>
        <div className="contMain">
            <div className="homeListContainer">
                <div className="row">
                    <div className="col-md-8">
                    { ListTopdata.map((itm,k) => {
                            if(k === 0 || k === 1  ){
                                return(
                                    <div className="card_top_home">
                                        <Link href={`/Blog/${itm.category}/${itm.url}`}  >
                                        <a>
                                            <div className="category">{ itm.category }</div>
                                            <h4>{ itm.title }</h4>
                                            <div className="byAuth">
                                                - by {itm.auther}
                                                <small>{moment(itm.createdOn).fromNow()}</small>
                                            </div>
                                            <img src={itm.imgUrl} alt={ itm.title } width="100%"  /> 
                                            <p>{ itm.preheading } </p>
                                        </a>  
                                        </Link>
                                    </div>    
                            )
                            }
                        })
                        }
                    </div>
                    <div className="col-md-4">
                    { ListTopdata.map((itm,k) => {
                            if(k > 1 && k < 5 ){
                                return(
                                    <div className="card_top_sub_home">
                                        <Link href={`/Blog/${itm.category}/${itm.url}`}  >
                                        <a>
                                                <p className="category">{ itm.category }</p>
                                                <h4>{ itm.title }</h4>
                                                <div className="byAuth">
                                                    - by {itm.auther} 
                                                    <small>{ moment(itm.createdOn).fromNow() }</small>
                                                </div>
                                                <img src={itm.imgUrl} alt={ itm.title } width="100%"  /> 
                                        </a>
                                        </Link>
                                    </div>    
                                )
                            }
                        })
                        }
                    </div>
                    <div className="col-md-12 midAbout">
                        <p>About TechIdiots</p>
                        <h1><span>TechIdiots </span>is developed to give YOU a platform to <span>VIEW</span> and <span>GAIN</span> more information on latest <span>TECH</span> Based NEWS and information all in one . This <span>REFERS</span> information from many<span>TRUSTABLE</span>  resources and <span>PRESENT</span> before YOU .... </h1>
                    </div>
                </div>
            </div>
        </div>
     </>
    )
}

export default Home