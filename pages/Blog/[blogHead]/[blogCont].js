import Head from 'next/head'
import React , { useState , useEffect } from 'react';
import Link from 'next/link'
import axios from '../../../component/apiInstance/Instance_API';
import moment from 'moment';
import ReactPlayer from 'react-player';
import TweetEmbed from 'react-tweet-embed';

import { useRouter } from 'next/router'

const BlogHead = () => {

    const router = useRouter();

    let { blogHead , blogCont } = router.query;

    const [ datas , setDatas ] = useState([]);

    const [ recent , setRecent ] = useState([]);
    
     let [ FetchStatus , setFetchStatus ] = useState(true);
    
    const Fetchdata = () => {
        axios.get('/view/'+blogCont)
        .then( res => {
            setDatas(res.data);
            setFetchStatus(false);
        })
        .catch( err => {
            console.log(err);
        })
    }

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
        setFetchStatus(true);
        Fetchdata();
        FetchdataNot();
        window.scrollTo(0, 0);
    }, [blogCont]) 

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
        <div className="pageContainer">
              <div className="blogContent">
                  { datas.map((itm,k) => { 
                      return(
                          <>
                          
                        <Head>
                            <title>{itm.title}</title>
                            <meta name="description" content={itm.preheading} />
                            <link rel="canonical" href={ 'https://techidiots.in/'+blogHead+'/'+blogCont } />

                            <meta property="og:image" content="https://techidiots.in/favicon.jpg"/>
                            <meta property="og:url" content={ 'https://techidiots.in/Blog/'+blogHead+'/'+blogCont } />
                            <meta property="og:site_name" content="www.techidiots.in"/>
                            <meta property="og:type" content="website" />
                            <meta property="og:title" content={itm.title} />
                            <meta property="og:description" content={itm.preheading}/>

                            <meta property="twitter:url" content="https://techidiots.in/" />
                            <meta property="twitter:card" content="summary_large_image" />
                            <meta property="twitter:image" content="https://techidiots.in/favicon.jpg" />
                            <meta property="twitter:title" content={itm.title} />
                            <meta property="twitter:description" content={itm.preheading} />
                        </Head>
                          <div className="col-md-6">
                              <div className="category">
                                  { itm.category }
                              </div>
                          </div>
                          <div className="col-md-12">
                              <h1>{itm.title}</h1>
                          </div>
                          <div className="col-md-8">
                              <div className="preheading">
                                  <p style={ {padding:'10px 0px',margin:'0px'} }>{itm.preheading}</p>
                              </div>
                              <div className="byAuth">
                                  - by {itm.auther} 
                              <small>{ moment(itm.createdOn).fromNow() }</small>
                              </div>
                              {/* <img src={itm.filePath} alt="img" width="100%" height="auto" /> */}
                              <img src={itm.imgUrl} alt={ itm.title } width="100%" height="auto" /> 
                              
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
                                                  <h4  key={s_k} >{sub_itm.Content}</h4>
                                              ) 
                                          }else if(sub_itm.SubHeading === 'sub_img'){
                                              return (
                                                  <img src={sub_itm.Content} alt="techidiots" width="100%" height="auto" className="sub_img" />
                                              ) 
                                          }else if(sub_itm.SubHeading === 'tweet'){
                                              return (
                                                  <div className="tweet">
                                                   <TweetEmbed  id={ sub_itm.Content } />
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
                                    <p className="reference"> Reference : { itm.reference } </p>
                              </div>
                            </div>
                         </>
                      )
                  }) }
                  <div className="col-md-4 row recent">
                      <div className="recent_part">
                          {recent.map((itm,k) => {
                              return (
                                  <div className="card_recent ">
                                      <Link href={ `/Blog/${itm.category}/${itm.url}` }  >
                                        <a>
                                          <img src={itm.imgUrl} width="100%" height="150px" alt=""></img>
                                          <h5>{itm.title}</h5>
                                        </a>
                                      </Link>
                                  </div>
                              )
                          })
                          }
                      </div>
                  </div>
              </div>
          </div>
      </>
    )
}

export default BlogHead
