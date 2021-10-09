
import  { GetServerSideProps } from 'next'
import { getServerSideSitemap , ISitemapField } from 'next-sitemap'
import axios from 'axios'


export const getServerSideProps : GetServerSideProps = async (ctx) => {


    let data  = [];

    let url = 'https://mernblogdemo.herokuapp.com/Api/homeBlogs';
    // let url = 'https://mernblogdemo.herokuapp.com/Api/homeTopFetch';

    await axios.get(url)
        .then((res) => {
             data = res.data;
          })
          .catch((error) => {
              console.log(error);
          })


    const fields : ISitemapField[] = data.map(data => ({ loc : `https://techidiots.in/blog/${data.category}/${data.url}`, lastmod : new Date().toISOString() }))

    // console.log(fields);

    return getServerSideSitemap(ctx,fields);
}


export default function sitemap(){

}