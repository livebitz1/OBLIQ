import React from 'react'
import styles from './domino-loader.module.css'

const DominoLoader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

export default DominoLoader 