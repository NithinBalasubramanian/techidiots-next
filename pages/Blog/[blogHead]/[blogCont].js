import Head from 'next/head'
import React , { useState , useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link'
import axios from '../../../component/apiInstance/Instance_API';
import moment from 'moment';
import ReactPlayer from 'react-player';
import TweetEmbed from 'react-tweet-embed';
import Gist from "react-gist";

import { FaWhatsapp , FaInstagram , FaTwitter , FaFacebook } from 'react-icons/fa'
import { AiOutlineMail  } from 'react-icons/ai'


import { useRouter } from 'next/router'

const BlogHead = (props) => {

    console.log(props);

    const router = useRouter();

    let { blogHead , blogCont } = router.query;

    const [ datas , setDatas ] = useState([]);

    const [ recent , setRecent ] = useState([]);
    
     let [ FetchStatus , setFetchStatus ] = useState(false);
    
    // const Fetchdata = () => {
    //     axios.get('/view/'+blogCont)
    //     .then( res => {
    //         setDatas(res.data);
    //         setFetchStatus(false);
    //         FetchdataNot();
    //     })
    //     .catch( err => {
    //         console.log(err);
    //     })
    // }

    const FetchdataNot = () => {
        axios.get('/recentCategory/'+blogHead+'/'+blogCont)
        .then( res => {
            setRecent(res.data);
        })
        .catch( err => {
            console.log(err);
        })
    }

    useEffect(()=>{
        // setFetchStatus(true);
        window.scrollTo(0, 0);
        // Fetchdata();
        // const timer = setTimeout(() => {
        //     FetchdataNot();
        //   }, 2000);
    }, [blogCont]) 

    let url = process.env.NEXT_PUBLIC_BASE_URL;

    return(
        <>

        <Head>
            <meta property="twitter:url" content= { process.env.NEXT_PUBLIC_BASE_URL } />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:image" content= { `${ process.env.NEXT_PUBLIC_BASE_URL }/techidiots.png`} />
            <meta property="twitter:title" content="TechIdiots - The Collections of Tech for Techies" />
            <meta property="twitter:description" content="Techidiots is developed to be a platform to collect latest techology informations from trustable sources and analyse it to present before you." />
        </Head>


        <div className={(!props.data) ? "preLoader" : "preNone" } >
            <div className="wrap">
                <div className="loading">
                    <div className="bounceball"></div>
                    <div className="text">Fetching</div>
                </div>
            </div>
        </div>
        <div className="pageContainer">
            { props.data &&
            <>
              <div className="blogContent">
                  { props.data.map((itm,k) => { 
                      return(
                          <>
                            {/* <Head>
                                <title>{itm.title}</title>
                                <link rel="icon" href="/favicon.ico"/>

                                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                                <meta charset="utf-8" />
                                <meta name="description" content={itm.preheading} />
                                <link rel="canonical" href={ 'https://techidiots.in/'+blogHead+'/'+blogCont } />
                                <meta property="og:image" content="/techidiots.png"/>
                                <meta property="og:url" content={ 'https://techidiots.in/Blog/'+blogHead+'/'+blogCont } />
                                <meta property="og:site_name" content="www.techidiots.in"/>
                                <meta property="og:type" content="website" />
                                <meta property="og:title" content={itm.title} />
                                <meta property="og:description" content={itm.preheading}/>
                                <meta property="twitter:url" content={ 'https://techidiots.in/Blog/'+blogHead+'/'+blogCont } />
                                <meta property="twitter:card" content="summary_large_image" />
                                <meta property="twitter:image" content="https://techidiots.in/techidiots.png" />
                                <meta property="twitter:title" content={itm.title} />
                                <meta property="twitter:description" content={itm.preheading} />
                                <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
                                <meta name="theme-color" content="#000000"/>
                                <meta name="robots" content="index,follow"/>
                                <meta name="author" content="Techidiots - Pingifinit"/>
                                <meta name="publisher" content="Techidiots - Pingifinit"/>
                                <meta name="owner" content="Techidiots - Pingifinit"/>
                                <meta name="keywords" content={ (itm.key) ? itm.key : "Techidiots,technews,latest technology, technology,Marketing , tesla , Programming ,Hyundai ,Jaguar ,Facebook ,Cybersecurity ,Remote ,Cloud crypto,bitcoin,Microsoft ,google,apple,blockchain,Ethereum ,youtube , Nithin balasubramanian , rajan karan ,AlphaFold , DeepMind , Artificial Intelligence trends , Martech" } />
                                <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
                                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                                <link rel="manifest" href="/site.webmanifest" />
                                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                                <meta name="msapplication-TileColor" content="#da532c" />
                            </Head> */}

                            <NextSeo
                                title= {itm.title}
                                description={itm.preheading} 
                                canonical={ process.env.NEXT_PUBLIC_BASE_URL + '/'+blogHead+'/'+blogCont } 
                                openGraph={{
                                    url:  process.env.NEXT_PUBLIC_BASE_URL + '/'+blogHead+'/'+blogCont,
                                    title:  `Techidiots - ${itm.title}`,
                                    description: itm.preheading,
                                    images: [
                                    {
                                        url: process.env.NEXT_PUBLIC_BASE_URL + '/techidiots.png',
                                        width: 800,
                                        height: 600,
                                        alt: itm.title,
                                        type: 'image/png',
                                    },
                                    {
                                        url: process.env.NEXT_PUBLIC_BASE_URL + '/techidiots.png',
                                        width: 900,
                                        height: 800,
                                        alt: itm.title ,
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


                          <div className="col-md-12 blogOn">

                                <div className="share">
                                    <a href={ `https://api.whatsapp.com/send?text=${url}/${itm.category}/${itm.url} `} target="_blank" aria-label="Whatsapp">
                                        <FaWhatsapp style={{ fontSize : '25px', margin : '15px 25px' , color : '#25D366'}} />
                                    </a>
                                    <a href={ `https://www.facebook.com/sharer/sharer.php?u=${url}/${itm.category}/${itm.url} `} target="_blank" aria-label="Facebook">
                                        <FaFacebook style={{ fontSize : '25px', margin : '15px 25px' , color : '#4267B2'}} />
                                    </a>
                                    {/* <a href={ `https://www.instagram.com/sharer/sharer.php?u=${url}/${itm.category}/${itm.url} `}  target="_blank" aria-label="Instagram">
                                        <FaInstagram style={{ fontSize : '25px', margin : '15px 25px' , color : '#E1306C'}} />
                                    </a> */}
                                    <a href={ `https://twitter.com/share?text=${itm.title}&url=${url}/${itm.category}/${itm.url} `} target="_blank" aria-label="Twitter">
                                        <FaTwitter style={{ fontSize : '25px', margin : '15px 25px' , color : '#1DA1F2'}} />
                                    </a>
                                    <a href={ `mailto:?subject=Checkout this blog at Techidiots&body=${itm.title}  ${url}/${itm.category}/${itm.url} `} target="_blank" aria-label="Mail">
                                        <AiOutlineMail style={{ fontSize : '25px', margin : '15px 25px' , color : '#FF5A5F'}} />
                                    </a>
                                </div>

                              <div className="blogContView">
                              <div className="category">
                                  { itm.category }
                              </div>
                               <div className="blogTitle">
                                 <h1>{itm.title}</h1>
                            
                              </div>
                              <div className="preheading">
                                  <p style={ {padding:'10px 0px',margin:'0px'} }>{itm.preheading}</p>
                              </div>
                              <div className="byAuth">
                                  - by {itm.auther}  
                              <small>{ moment(itm.createdOn).fromNow() }</small>
                              </div>
                              {/* <img src={itm.filePath} alt="img" width="100%" height="auto" /> */}
                              <img src={itm.imgUrl} loading="lazy" className="blogImgMain" alt={ itm.title } width="100%" height="auto" /> 

                               <div className="contentDisp">
                                  <p className="paraMainCont">{itm.blog}</p>
                                     { (itm.subPara) ? 
                                         itm.subPara.map((sub_itm,s_k) => {
                                          if(sub_itm.SubHeading === 'head'){
                                              return (
                                                  <h2  key={s_k} >{sub_itm.Content}</h2>
                                              ) 
                                          }else if(sub_itm.SubHeading === 'sub_head'){
                                              return (
                                                  <h2  key={s_k} >{sub_itm.Content}</h2>
                                              ) 
                                          }else if(sub_itm.SubHeading === 'sub_img'){
                                              return (
                                                  <img loading="lazy" src={sub_itm.Content} alt={itm.title} width="100%" height="auto" className="sub_img" />
                                              ) 
                                          }else if(sub_itm.SubHeading === 'tweet'){
                                              return (
                                                  <div className="tweet">
                                                   <TweetEmbed  id={ sub_itm.Content } />
                                                  </div>
                                              ) 
                                          }else if(sub_itm.SubHeading === 'gist'){
                                              return (
                                                <div>
                                                    <Gist id={ sub_itm.Content } />
                                                </div>
                                              ) 
                                          }else if(sub_itm.SubHeading === 'bold'){
                                              return (
                                                  <p><b  key={s_k} >{sub_itm.Content}</b></p>
                                              ) 
                                          }else if(sub_itm.SubHeading === 'youtube'){
                                              return (
                                                 <ReactPlayer url={ sub_itm.Content } width="100%" height="400px" />
                                              ) 
                                          }else if(sub_itm.SubHeading === 'quotes'){
                                              return (
                                                  <blockquote className="otro-blockquote">
                                                   { sub_itm.Content }
                                                 </blockquote>

                                              ) 
                                          }else{
                                              return (
                                                  <p  className="paraSubCont" key={s_k} >{sub_itm.Content}</p>
                                              ) 
                                          }
                                      })
                                     : null 
                                     }


                                    { (itm.subLink) ? 
                                         itm.subLink.map((subLink,l_k) => {
                                          if(subLink.linkFor === 'ref' ){
                                              var linkFor = "For more reference and help";
                                          }else if(subLink.linkFor === 'also_view'){
                                              var linkFor = "Also check related article ";
                                          }else{
                                              var linkFor = "For above mentioned Link";
                                          }
                                          return(
                                              <div className="links">
                                                  <p>{ linkFor } <a href={ subLink.link }  target="_blank" rel="noopener noreferrer">Click Here</a></p>
                                              </div>
                                          )
                                        }
                                      ) 
                                    : null
                                    }
                                    { itm.reference &&
                                        <p className="reference"> Reference : { itm.reference } </p>
                                    }
                              </div>
                            </div>
                            </div>
                         </>
                      )
                  }) }
              </div>

              <div className="listBlogViewPage">
                {recent.map((itm,k) => {
                        return (
                            <div className="listBelowCard">
                                <Link href={ `/Blog/${itm.category}/${itm.url}` }  >
                                <a className="listBelowFlex">
                                    <div class="blogListImage">
                                      <img loading="lazy" src={itm.imgUrl} width="100%" height="100%" alt={itm.title}></img>
                                    </div>
                                    <div class="blogListPreCont">
                                      <div className="category">
                                       { itm.category }
                                      </div>
                                      <h3>{itm.title}</h3>
                                      <p>{itm.preheading}</p>
                                      {/* <small>  - by {itm.auther} </small>
                                      <small className="onDate">{ moment(itm.createdOn).fromNow() }</small> */}
                                    </div>
                                </a>
                                </Link>
                            </div>
                            )
                        })
                    }
              </div>
            </>
            }
          </div>
      </>
    )
}

export const getServerSideProps = async(context) => {

    // Fetch data from external API

    let {  blogCont } = context.query;
  
    const res = await axios.get('/view/'+blogCont)
                .then((res) => {
                    return res.data;
                })
                .catch((error) => {
                    console.log(error);
                })
  
  
    // Pass data to the page via props
    return { 
        props : { 
            data : res
        } 
    }
  }

export default BlogHead



// This gets called on every request

