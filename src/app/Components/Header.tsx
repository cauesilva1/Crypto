"use client"

import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { Inter } from 'next/font/google';

type TCrypto = {
    name: string;
    current_price: number;
  }

const inter = Inter({ subsets: ['latin'] });

export default function Header() {
  const [cryptoData, setCryptoData] = useState<TCrypto[]>([]);
  const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());
  const [weather, setWeather] = useState('');



  useEffect(() => {
    const fetchCryptoData = async () => {

      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&ids=bitcoin%2Cethereum%2Cbinancecoin');
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchWeather = async () => {
      try {
        const locationResponse = await fetch('https://geolocation-db.com/json/');
        const locationData = await locationResponse.json();
      } catch (error) {
        console.log(error);
      }
    };

    fetchCryptoData();
    fetchWeather();

    const interval = setInterval(() => {
      setLocalTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <p className={inter.className}>Horario atual:</p>
        <p className={inter.className}>{localTime}</p>
      </div>

      <div>

        <a href="/graficos" className={styles.graficos}> graficos</a>

      </div>



      <div className={styles.crypto}>
        {cryptoData.map((crypto, index) => (
          <div className={styles.moedas} key={index}>
            <h3 className={inter.className}>{crypto.name}</h3>
            <p className={inter.className}>{crypto.current_price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          </div>
        ))}
      </div>
    </header>
  );
}
