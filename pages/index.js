import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Ttwitter clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      home page
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        {/* sidebar */}
        <Sidebar/>
        {/* feeds */}
        {/* wideget */}
        {/* model */}
      </main>
       </div>
  )
}
