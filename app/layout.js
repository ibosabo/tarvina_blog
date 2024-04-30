import React from 'react'
import '../styles/global.css'
import styles from './styles.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NavBar from '@/components/Header/navBar'

const Layout = ({children}) => {
  return (
    <html lang='en'>
      <body className={styles.container}>
        <Header/>
        <NavBar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}

export default Layout

