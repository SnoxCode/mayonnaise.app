'use client'

import Image from 'next/image'
import footer from './footer.module.css'

export default function Footer() {
  return (
    <footer className={footer.footer}>
      <span className={footer.notice}>© 2023 Mayonnaise</span>
      <a href="http://github.com/SnoxCode/mayonnaise.app" target="_blank" rel="noopener noreferrer" className={footer.link}>
        <Image 
          src={'/github.svg'} 
          width={20}
          height={20}
        />
      </a>
    </footer>
  )
}