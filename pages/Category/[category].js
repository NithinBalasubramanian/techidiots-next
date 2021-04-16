import Head from 'next/head'
import React , { useState , useEffect } from 'react';
import Link from 'next/link'
import axios from '../../component/apiInstance/Instance_API';
import moment from 'moment';
import { useRouter } from 'next/router'

const Category = () => {

    const router = useRouter();

    let { category } = router.query;

    
  let [ Listdata , setListdata ] = useState([]);

  let [ FetchStatus , setFetchStatus ] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
       setFetchStatus(true);
        fetchAll();
    }, [category])

    const fetchAll = () =>{
        axios.get('/blogFetch/'+category)
        .then((res) => {
            setListdata(res.data);
            setFetchStatus(false);
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
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta charset="utf-8" />
                <meta name="description" content="Techidiots is developed to be a platform to collect latest techology informations from trustable sources and analyse it to present before you."/>
               
                <meta property="og:image" content="/favicon.jpg"/>
                <meta property="og:url" content="https://techidiots.in"/>
                <meta property="og:site_name" content="www.techidiots.in"/>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="TechIdiots - The Collections of Tech for Techies"/>
                <meta property="og:description" content="Techidiots is developed to be a platform to collect latest techology informations from trustable sources and analyse it to present before you."/>

                <meta property="twitter:url" content="https://techidiots.in/" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:image" content="https://techidiots.in/favicon.jpg" />
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
            </Head>
            <div className="contMain">
                <div className="homeListContainer">
                <div className="row">
                    <div className="col-md-8">
                    { Listdata.map((itm,k) => {
                            if(k === 0 || k === 1  ){
                                return(
                                    <div className="card_top_home">
                                        <Link href={`/Blog/${itm.category}/${itm.url}`} >
                                            <a>
                                                <div className="category">{ itm.category }</div>
                                                <h4>{ itm.title }</h4>
                                                <div className="byAuth">
                                                    - by {itm.auther}
                                                    <small>{ moment(itm.createdOn).fromNow() }</small>
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
                        { Listdata.map((itm,k) => {
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
                            <h1> Techidiots / { category }</h1>
                        </div>
                    </div>
                    <div className="row">
                         { Listdata.map((itm,k) => {
                            if(k === 5 || k === 6 || k === 10 || k === 11 || k === 15 || k=== 16){
                                return(
                                <div className="col-md-6 card_col" >
                                    <div className="card_home">
                                        <Link href={`/Blog/${itm.category}/${itm.url}`}  >
                                           <a>
                                            <img src={itm.imgUrl} alt={ itm.title } width="100%" height="300px" /> 
                                            <div className="byAuth">
                                                - From {itm.auther} 
                                            </div>
                                            <h4>{ itm.title }</h4>
                                            <p>{ itm.preheading } </p>
                                          </a>
                                        </Link>
                                    </div>                        
                                </div>
                                )
                            }
                          if(k > 4){
                            return(
                                <div className="col-md-4 card_col">
                                    <div className="card_home">
                                        <Link href={`/Blog/${itm.category}/${itm.url}`}  >
                                           <a>
                                            <img src={itm.imgUrl} alt={ itm.title } width="100%" height="250px" /> 
                                            <div className="byAuth">
                                            - From {itm.auther} 
                                            </div>
                                            <h4>{ itm.title }</h4>
                                            <p>{ itm.preheading } </p>
                                           </a>
                                        </Link>
                                    </div>
                                </div>
                                )
                              }
                            })
                        }
                   </div>
                </div>
            </div>
        </>
    )
}

export default Category
