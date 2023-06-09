import Form from './components/Form'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.maincontainer}>
          <h1 className={styles.h1}>
            Mayonnaise.
          </h1>
        </div>
        <div className={styles.text}>
          The Sauce you didn't know you need. <br /> 
          Be the first one to try it out. ETA: Q1 2077.
        </div>
        <Form />
      </div>
      <div className={styles.cube}>
        M
      </div>
    </main>
  )
}