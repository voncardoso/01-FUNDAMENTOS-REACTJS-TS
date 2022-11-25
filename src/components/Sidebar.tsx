import {PencilLine} from "phosphor-react"
import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";


export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1667835949430-a2516cc93d27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" alt="" 
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/voncardoso.png"/>
                <strong>Von Harrison</strong>
                <span>Web Develop</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>   
    )
}