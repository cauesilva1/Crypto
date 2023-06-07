"use client"
import '../app/globals.css'
import styles from './graficos.module.css'
import Header from '@/app/Components/Header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });


export default function Home() {
  return (
    <>
    <Header />
    <div className={styles.voltarpagina}>
        voltar
    </div>
    
    <main className={styles.main}>
      <div className={styles.criptos}>
        <div  className={styles.cardcript}>
            <h3 className={styles.namecard}>bitcoin</h3>
          <div className={styles.imgcard}> 
            <img src="/bitcoin2.png" alt="bitcoin"  className={styles.image}/> 
          </div>
          <div className={styles.grafico}>
            
          </div>
        </div>
        <div  className={styles.cardcript} >
        <h3 className={styles.namecard}>Ethereum</h3>

          <div className={styles.imgcard}> 
            <img src="/Ethereum.png" alt="Ethereum"  className={styles.image2}/> 
          </div>
          <div className={styles.grafico}>
            
          </div>
        </div>
        <div  className={styles.cardcript}>
        <h3 className={inter.className}>Binance-Coin</h3>

          <div className={styles.imgcard}> 
            <img src="/Binance-Coin.png" alt="Binance-Coin" width={60}  /> 
          </div>
          <div className={styles.grafico}>
            
          </div>
        </div>
      </div>
    </main>
      
    </>
  )
}
