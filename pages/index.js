import {server} from '../config'
import ArticleList from "../components/ArticleList";
import styles from "../styles/Edit.module.css"
import Link from 'next/link';


export default function Home({articles}) {
    return (
        <>
        <div>
        <Link href="/article/create" >
        <button className={styles.post}>Create Post</button>
        </Link>
           <ArticleList articles={articles}/>
        </div>
        </>
        
        
    );
}

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const articles = await res.json();
  
    return {
      props: {
        articles,
      },
    };
  };

// export const getStaticProps = async ()=>{
//     const res = await fetch(`${server}/api/articles`)
//     const articles = await res.json()

//     return {
//         props: {
//             articles
//         }
//     }
// }