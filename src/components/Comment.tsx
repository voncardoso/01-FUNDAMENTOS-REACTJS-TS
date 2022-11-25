import style from "./Comment.module.css"
import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import { useState } from "react"

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps){
    const [likeCount, setLikeCount] = useState(0);
    
    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1;
        });
    }
    return(
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://github.com/voncardoso.png" alt="" />

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                           <strong>Von Harrison</strong> 
                           <time title="11 de Maio as 08:12" dateTime="2022-11-21 08:12:30">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentario">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}