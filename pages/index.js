
import styles from '../styles/Home.module.css'
import Link from "next/link";


export default function Home() {
  return (
    <div className={styles.container}>
     
        <h1>Main page</h1>
        <Link href="/room">
          <a>
          To the white room
          </a>
          </Link>

    </div>
  )
}
