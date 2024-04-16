import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'

const ArticleItem = ({article}) => {
  const date = new Date().toUTCString()
  return (
    <>

    <Link href="/article/id" as={`article/${article.id}`}>
      <a className={articleStyles.card}>
        
        <h3> {article.title} &rarr;</h3>
        <span>{date}</span>
      </a>
    </Link>
    </>
    
  )
}

export default ArticleItem
