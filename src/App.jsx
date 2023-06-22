
import { Header } from './components/Header'
import {Post} from './components/Post'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

function App() {
  

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post author={"João"} 
          content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam, unde distinctio quisquam sit porro magni, eos iure quis voluptates reiciendis accusamus omnis explicabo autem debitis consequuntur. Quo, aliquam quod!"}
          /> 
          <Post author={"Pedro"} 
          content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam, unde distinctio quisquam sit porro magni, eos iure quis voluptates reiciendis accusamus omnis explicabo autem debitis consequuntur. Quo, aliquam quod!"}
          /> 
        </main>
      </div>
    </div>
  )
}

export default App
