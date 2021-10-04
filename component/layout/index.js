import Head from 'next/head'
import FooterComponent from './footer'
import Navigation from './navigation'

export default function Layout({ children }) {

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <div className="container mx-auto">
      <Head>
        <title>Dinas Pariwisata Pulpis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navigation/>
      </header>
      <main>
        {
            children
        }
      </main>
      <footer>
        <FooterComponent/>
      </footer>
        
    </div>
  )
}
