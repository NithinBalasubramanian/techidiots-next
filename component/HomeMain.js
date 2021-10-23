import React , { useState , useEffect } from 'react';
import Link from 'next/link'
import axios from './apiInstance/Instance_API';
import moment from 'moment';

// components

import HomeSlide from './HomeSlide';

const HomeMain = () => {

    let [ Listdata , setListdata ] = useState([]);
  
    let [ FetchStatus , setFetchStatus ] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchData();
    },[])

    const fetchData =  async () => {

        await axios.get('/homeTopFetch')
       .then((res) => {
             setListdata(res.data);
             setFetchStatus(false);
             fetchMid();
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


                        {/* slider part start*/}
                        <HomeSlide data={ Listdata } />
                        {/* slider part end*/}
                        
                        <div className="col-md-8">
                        { Listdata.map((itm,k) => {
                                if(k === 3 || k === 4  ){
                                    return(
                                        <div className="card_top_home">
                                            <Link href={`/Blog/${itm.category}/${itm.url}`}  >
                                            <a>
                                                <div className="category">{ itm.category }</div>
                                                <h2>{ itm.title }</h2>
                                                <div className="byAuth">
                                                    - by {itm.auther}
                                                    <small>{moment(itm.createdOn).fromNow()}</small>
                                                </div>
                                                <img src={itm.imgUrl} loading="lazy" alt={ itm.title } width="100%"  /> 
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
                        { Listdata.map((itm,k) => {
                                if(k > 4 && k < 9 ){
                                    return(
                                        <div className="card_top_sub_home">
                                            <Link href={`/Blog/${itm.category}/${itm.url}`}  >
                                            <a>
                                                    <p className="category">{ itm.category }</p>
                                                    <h2>{ itm.title }</h2>
                                                    <div className="byAuth">
                                                        - by {itm.auther} 
                                                        <small>{ moment(itm.createdOn).fromNow() }</small>
                                                    </div>
                                                    <img src={itm.imgUrl} loading="lazy"  alt={ itm.title } width="100%"  /> 
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

export default HomeMain