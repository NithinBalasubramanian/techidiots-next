import Head from 'next/head'
import React , { useState , useEffect } from 'react';
import Link from 'next/link'
import axios from './apiInstance/Instance_API';
import moment from 'moment';
import { useRouter } from 'next/router'

const Home = () => {

    let [ Listdata , setListdata ] = useState([]);
  
    let [ ListInfo , setListInfo ] = useState([]);
  
    let [ ListNews , setListNews ] = useState([]);
    
    let [ ListTopdata , setListTopdata ] = useState([]);
  
    let [ FetchStatus , setFetchStatus ] = useState(true);

    const { asPath } = useRouter()
  
      useEffect(() => {
          window.scrollTo(0, 0);
          fetchAbove();
        
        const timer = setTimeout(() => {
            setFetchStatus(false);
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
        <Head>
            <title>Techidiots - The collection of Tech for Techies</title>
            <meta name="description" content="Techidiots is developed to be a platform to collect latest techology informations from trustable sources and analyse it to present before you."/>
            <link rel="canonical" href="https://techidiots.in" />
            <link rel="icon" href="/favicon.ico"/>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta charset="utf-8" />
            <meta property="og:image" content="/techidiots.png"/>
            <meta property="og:url" content="https://techidiots.in"/>
            <meta property="og:site_name" content="www.techidiots.in"/>
            <meta property="og:type" content="website" />
            <meta property="og:title" content="TechIdiots - The Collections of Tech for Techies"/>
            <meta property="og:description" content="Techidiots is developed to be a platform to collect latest techology informations from trustable sources and analyse it to present before you."/>

            <meta property="twitter:url" content="https://techidiots.in/" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:image" content="https://techidiots.in/techidiots.png" />
            <meta property="twitter:title" content="TechIdiots - The Collections of Tech for Techies" />
            <meta property="twitter:description" content="Techidiots is developed to be a platform to collect latest techology informations from trustable sources and analyse it to present before you." />
            <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
            <meta name="theme-color" content="#000000"/>
            <meta name="robots" content="index,follow"/>
            <meta name="author" content="Techidiots - Pingifinit"/>
            <meta name="publisher" content="Techidiots - Pingifinit"/>
            <meta name="owner" content="Techidiots - Pingifinit"/>
            <meta name="keywords" content="Techidiots,technews,latest technology, technology,Marketing , tesla , Programming ,Hyundai ,Jaguar ,Facebook ,Cybersecurity ,Remote ,Cloud crypto,bitcoin,Microsoft ,google,apple,blockchain,Ethereum ,youtube , Nithin balasubramanian , rajan karan ,AlphaFold , DeepMind , Artificial Intelligence trends , Martech"/>
            <meta name="facebook-domain-verification" content="q5r5o0qa0x8ohoxlhfp1xf5itrgkm7" />
                    
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />   
            <script data-ad-client="ca-pub-3827320441512963" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        <div className="contMain">
            <div className="homeListContainer">
                <div className="headerList">
                { ListTopdata.map((itm,k) => {
                            if(k === 0 ){
                                return(
                                    <div className="colm_1">
                                        <img src={ itm.imgUrl } width="100%" height="100%" />
                                        <Link href={`/Blog/${itm.category}/${itm.url}`} >
                                        <div className="onImage">
                                            <h4>{ itm.title }</h4>
                                        </div>
                                        </Link>
                                    </div>
                               )
                            }else if(k == 1){
                                return(
                                    <div className="colm_2">
                                        <img src={ itm.imgUrl } width="100%" height="100%" />
                                        <Link href={`/Blog/${itm.category}/${itm.url}`} >
                                        <div className="onImage">
                                            <h4>{ itm.title }</h4>
                                        </div>
                                        </Link>
                                    </div>
                               )
                            }else if(k == 2){
                                return(
                                    <div className="colm_3">
                                      <img src={ itm.imgUrl } width="100%" height="100%" />
                                      <Link href={`/Blog/${itm.category}/${itm.url}`} >
                                        <div className="onImage">
                                            <h4>{ itm.title }</h4>
                                        </div>
                                        </Link>
                                    </div>
                               )
                            }
                        })
                    }
                </div>
                <div className="row">
                    <div className="col-md-8">
                    { ListTopdata.map((itm,k) => {
                            if(k === 3 || k === 4  ){
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
                    { ListTopdata.map((itm,k) => {
                            if(k > 4 && k < 9 ){
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
                <div className="row">
                     <div className="col-md-6">
                         <h4 className="listHeading"><b>LATEST TECH ARTICLES</b></h4>
                        { ListInfo.map((itm,k) => {
                         return(
                           <Link href={`/Blog/${itm.category}/${itm.url}`}  >
                             <a className="articleViewHome">
                                <div className="articleImage">
                                  <img src={itm.imgUrl} alt={ itm.title } loading="lazy"  width="100%" height="100%"  /> 
                                </div>
                                <div className="articleCont">
                                  <small>{ moment(itm.createdOn).fromNow() }</small>
                                  <h4>{ itm.title }</h4>
                                </div>
                              </a>
                         </Link>
                         )
                        })
                       }
                      </div>
                     <div className="col-md-6">
                     <h4 className="listHeading"><b>LATEST TECH NEWS </b></h4>
                        { ListNews.map((itm,k) => {
                         return(
                           <Link href={`/Blog/${itm.category}/${itm.url}`} >
                            <a  className="articleViewHome">
                                <div className="articleImage">
                                  <img src={itm.imgUrl} alt={ itm.title } loading="lazy" width="100%" height="100%"  /> 
                                </div>
                                <div className="articleCont">
                                  <small>{ moment(itm.createdOn).fromNow() }</small>
                                  <h4>{ itm.title }</h4>
                                </div>
                            </a>
                         </Link>
                         )
                        })
                       }
                      </div>
                   </div>
                  <h4 className="listHeading"><b>TECH COLLECTIONS</b></h4>
                  <div className="row">
                              { Listdata.map((itm,k) => {
                            if(k === 0 || k === 1 || k === 5 || k === 6 ){
                                return(
                                <div className="col-md-6 card_col" >
                                    <div className="card_home">
                                            <div className="category">
                                                { itm.category }
                                            </div>
                                        <Link href={`/Blog/${itm.category}/${itm.url}`}  >
                                           <a>
                                            <img src={itm.imgUrl} alt={ itm.title } loading="lazy" width="100%" height="300px" /> 
                                            <div className="byAuth">
                                                - by {itm.auther} 
                                                <small>{ moment(itm.createdOn).fromNow() }</small>
                                            </div>
                                            <h4>{ itm.title }</h4>
                                            <p>{ itm.preheading } </p>
                                          </a>
                                        </Link>
                                    </div>                        
                                </div>
                                )
                            }
                            return(
                                <div className="col-md-4 card_col">
                                    <div className="card_home">
                                        <Link href={`/Blog/${itm.category}/${itm.url}`}  >
                                            <a>
                                                <div className="category">
                                                    { itm.category }
                                                </div>
                                                <img src={itm.imgUrl} alt={ itm.title } loading="lazy" width="100%" height="250px" /> 
                                                <div className="byAuth">
                                                - by {itm.auther} 
                                                    <small>{ moment(itm.createdOn).fromNow() }</small>
                                                </div>
                                                <h4>{ itm.title }</h4>
                                                <p>{ itm.preheading } </p>
                                             </a>
                                        </Link>
                                    </div>
                                </div>
                                )
                            })
                        }
                   </div>
            </div>
        </div>
     </>
    )
}

export default Home
