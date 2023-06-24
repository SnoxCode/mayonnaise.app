import Link from 'next/link'
import header from './Header.module.css'

export default function Header() {
  return (
    <header className={header.header}>
      <nav>
        <div className={header.logo}>
          <Link className={header.link} href={'/'}>
            <span className={header.brand}>Mayonnaise.</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}