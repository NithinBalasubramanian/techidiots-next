import { useRouter } from 'next/router'

const BlogHead = () => {

    const router = useRouter();

    let { category , Title } = router.query;

    return(
        <div className="ErrorPage">
            <h1>{ Title }</h1>
        </div>
    )
}

export default BlogHead