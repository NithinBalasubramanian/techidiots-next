import Head from 'next/head'
import React , { useState , useEffect } from 'react';
import Link from 'next/link'
import axios from '../../../component/apiInstance/Instance_API';
import moment from 'moment';
import ReactPlayer from 'react-player';
import TweetEmbed from 'react-tweet-embed';
import Gist from "react-gist";


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
        window.scrollTo(0, 0);
        Fetchdata();
        const timer = setTimeout(() => {
            FetchdataNot();
          }, 2000);
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

              </div>
          </div>
      </>
    )
}

export default BlogHead
