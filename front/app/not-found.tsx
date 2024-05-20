import Link from 'next/link'
import styles from "./styles/not-found.module.scss"
import React from 'react';

function NotFound() {
  return (
    <div className={styles.not_found_page}>
      <h2 className={styles.title}>Not Found Page</h2>
      <p className={styles.description}>Could not find requested resource</p>
      <Link href="/" className={styles.home}>Return To Home Page</Link>
    </div>
  )
}

export default NotFound;