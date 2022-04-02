import React , { useState , useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head'
import Link from 'next/link'
import axios from './apiInstance/Instance_API';
import moment from 'moment';
import Image from 'next/image'

// components

import HomeSlide from './HomeSlide';

const HomeMain = (props) => {


    let [ Listdata , setListdata ] = useState([]);
  
    let [ FetchStatus , setFetchStatus ] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        // fetchData();
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

    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }
      

    return(
        <>
            {/* <Head>
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
            </Head> */}

            <NextSeo
                title="Techidiots - The collection of Tech for Techies"
                description="Techidiots is developed to be a platform to collect latest techology informations from trustable sources and analyse it to present before you."
                canonical= { process.env.NEXT_PUBLIC_BASE_URL  }
                openGraph={{
                    url: process.env.NEXT_PUBLIC_BASE_URL,
                    title: 'Techidiots - The collection of Tech for Techies',
                    description: 'Techidiots is developed to be a platform to collect latest techology informations from trustable sources and analyse it to present before you.',
                    images: [
                    {
                        url: `${ process.env.NEXT_PUBLIC_BASE_URL  }/techidiots.png`,
                        width: 800,
                        height: 600,
                        alt: 'Techidiots - The collection of Tech for Techies',
                        type: 'image/png',
                    },
                    {
                        url: `${ process.env.NEXT_PUBLIC_BASE_URL  }/techidiots.png`,
                        width: 900,
                        height: 800,
                        alt: 'Techidiots - The collection of Tech for Techies',
                        type: 'image/pmg',
                    }
                    ],
                    site_name: 'Techidiots',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />

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

                    { props.datas &&
                    <>
                        {/* slider part start*/}
                        <HomeSlide data={ props.datas } />
                        {/* slider part end*/}
                        
                        <div className="col-md-8">
                        { props.datas.map((itm,k) => {
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
                                                <Image
                                                loader={myLoader}
                                                src= {itm.imgUrl}
                                                alt= { itm.title }
                                                width={ 1200 }
                                                height={500}
                                                className="images"
                                                />
                                                {/* <img src={itm.imgUrl} loading="lazy" alt={ itm.title } width="100%"  />  */}
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
                        { props.datas.map((itm,k) => {
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
                                                    {/* <img src={itm.imgUrl} loading="lazy"  alt={ itm.title } width="100%"  />  */}

                                                    <Image
                                                        loader={myLoader}
                                                        src= {itm.imgUrl}
                                                        alt= { itm.title }
                                                        width={ 800 }
                                                        height={500}
                                                        className="images"
                                                    />
                                            </a>
                                            </Link>
                                        </div>    
                                    )
                                }
                            })
                            }
                        </div>
                        </>
                        }
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

// This gets called on every request
export const getServerSideProps = (context) => {

    // Fetch data from external API

    // const res = await axios.get('/homeTopFetch')
    //             .then((res) => {
    //                 return res.data;
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             })
  
    // console.log(res);

    // Pass data to the page via props
    return { 
        props : { 
            name : 'nithin'
        } 
    }
  }