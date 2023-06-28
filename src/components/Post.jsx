/* eslint-disable react/prop-types */
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function Post({author, publishedAt, content}) {

const [comments, setComments] = useState(["Que post incrível"])
const [newComment, setNewComment] = useState('')

const handleSubmit = (e) =>{
    e.preventDefault()

    setComments([...comments, newComment])

    setNewComment('')
}
const handleNewCommentChange = (e) =>{

    setNewComment(e.target.value)

    }

const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})

const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, 
    {locale: ptBR, 
    addSuffix: true} )
    return (

        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>

                </div>

                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
              {content.map(line => {
                if(line.type === 'paragraph'){
                    return <p>{line.content}</p>
                } else if(line.type === 'link'){
                    return <p><a href="">{line.content}</a></p>
                }
              })}
            </div>
            <form onSubmit={(e) => handleSubmit(e)} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea onChange={(e) => handleNewCommentChange(e)} value={newComment} placeholder='Deixe seu comentário' name='comment' ></textarea>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                
               {comments.map(comment => <Comment content={comment}/>)}
            </div>
        </article>

    )
}