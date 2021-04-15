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
                </div>
            </div>
        </>
    )
}

export default Category