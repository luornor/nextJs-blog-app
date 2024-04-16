import Link from 'next/link'
import Meta from '../../../components/Meta'

import linkstyles from '../../../styles/Link.module.css'

const article = ({ article }) => {
  
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link className={linkstyles.back_link}  href='/'>Go Back</Link>
      <Link href="/edit/id" as={`edit/${article.id}`}>Edit article</Link>
    </>
  )
}


export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts`
  );

  const articles = await res.json();

  const ids = articles.map((article) => article.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};


export default article