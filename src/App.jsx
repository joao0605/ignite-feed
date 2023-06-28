
import { Header } from './components/Header'
import { Post } from './components/Post'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/joao0605.png",
        name: "João Fernandes",
        role: "Web developer"
      },
      content: [
        { type: 'paragraph', content: "Fala galeraaa" },
        { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifólio" },
        { type: 'link', content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date('2023-06-28 10:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/ClaudioCunhaDev.png",
        name: "Claudio Cunha",
        role: "Web developer"
      },
      content: [
        { type: 'paragraph', content: "Boa tarde!!" },
        { type: 'paragraph', content: "Finalizei um projeto!!" },
        { type: 'link', content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date('2023-06-26 20:00:00')
    },
    {
      id: 3,
      author: {
        avatarUrl: "https://github.com/Gabriel-Bastos-Rabelo.png",
        name: "Gabriel Rabelo",
        role: "Web developer"
      },
      content: [
        { type: 'paragraph', content: "Olá, pessoal!!!" },
        { type: 'paragraph', content: "Comprei um novo curso" },
        { type: 'link', content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date('2023-06-19 20:00:00')
    },
  ]

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post key={post.id} 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
