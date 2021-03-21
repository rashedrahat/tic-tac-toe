import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://en.wikipedia.org/wiki/Tic-tac-toe" target="_blank">Tic-Tac-Toe!</a>
        </h1>

        <div className={styles.grid}>
          <Link href="/play">
            <a className={styles.card}>
              <h1>Play &rarr;</h1>
              <small>2 players.</small>
            </a>
          </Link>

          <Link href="/players-score">
            <a className={styles.card}>
              <h1>Players Score &rarr;</h1>
              <small>All the players who played this game.</small>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
