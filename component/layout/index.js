import Head from 'next/head'
import FooterComponent from './footer'
import Navigation from './navigation'

export default function Layout({ children, header }) {

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <div className="container mx-auto h-screen">
      <Head>
        <title>Dinas Pariwisata Pulpis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navigation/>
        {
          header ? 
          <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">{ header }</h1>
          </div>
        </header> : null
        }
      </header>
      <main className="mb-auto flex-grow">
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
