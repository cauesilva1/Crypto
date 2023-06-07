"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Header from './Components/Header'
import { useRouter } from 'next/navigation'; 

export default function Home() {
  
  const router = useRouter();

  const handleCardClick = (coinId: string) => {
    router.push(`/coins/${coinId}`);
  };

  return (
    <>
    <Header />
    
    <main className={styles.main}>
      <div className={styles.image}>
        <Image
          className={styles.logo}
          src="/maodedinheiro.png"
          alt="imagem de carteira"
          width={350}
          height={350}
          priority
        />
      </div>
      <div className={styles.criptos}>
        <a href="#" className={styles.cardcript}>
          <div> 
            <img src="/bitcoin.png" alt="bitcoin"  className={styles.image}/> 
          </div>
        </a>
        <a href="#" className={styles.cardcript} >
          <div> 
            <img src="/Ethereum.png" alt="Ethereum"  className={styles.image2}/> 
          </div>
        </a>
        <a href="#" className={styles.cardcript}>
          <div> 
            <img src="/Binance-Coin.png" alt="Binance-Coin" width={90}  /> 
          </div>
        </a>
      </div>
    </main>
      
    </>
  )
}
