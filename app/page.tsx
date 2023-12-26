import Link from 'next/link'
import ProductCart from './components/ProductCart'

export default function Home() {
  return (
    <main>
      <h1>Hello MAX</h1>
      <Link href="/users">Users</Link>
      {/*  
      <video src="GIN.mp4" autoPlay muted loop></video>
      */}
      <ProductCart />
    </main>
  )
}
