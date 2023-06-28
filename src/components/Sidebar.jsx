import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar(){


    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=50" alt="" />
       
            <div className={styles.profile}>
                <Avatar  src={"https://avatars.githubusercontent.com/u/86742734?v=4"}/>
                <strong>João Fernandes</strong>
                <span>Web Developer</span>
            </div>
            <footer>
              
                <a href="#">   <PencilLine size={20}/> Editar seu perfil</a>
            </footer>
        </aside>
    )
}