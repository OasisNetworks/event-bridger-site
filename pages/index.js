import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Event Bridge APP</title>
        <meta name="description" content="Event Bridge APP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <div className="relative z-10 pb-8 mt-8 bg-white min-h-screen max-w-6xl mx-auto">
          <div className="flex flex-row">
            <a href="#" className="align-middle">
              <div className="flex items-center justify-between">
                <Image className="h-8 w-auto sm:h-10 inline-block" alt="logo" width={64} height={64} src="/logo.png" />
                <p className="leading-6 h-full pl-4 text-2xl font-bold">Event <br/>Bridger</p>
              </div>
            </a>
            <div className="bg-gray-200 p-3 px-6 rounded-xl block m-auto mr-0">
              <p className="text-gray-600 text-xl font-bold">
                Docs
              </p>
            </div>
          </div>

          <div className="pt-14 flex justify-between">
            {/* Title */}
            <div className="">
              <h1 className="text-left text-6xl font-bold mb-5">
                Connect you events
              </h1>
              <h1 className="text-left text-6xl font-bold">
                From Stripe To Mobile
              </h1>
              <p className="text-left text-4xl pt-8 max-w-3xl text-gray-400 font-light mb-12">
              Event Bridger helps you transform you events from your Source to Destination
              </p>

              <div className="flex space-x-4">
                <div>
                  <Image alt="logo" width={120} height={40} src="/download-app-store.png" />
                </div>
                <div>
                  <Image alt="logo" width={135} height={40} src="/download-google-play.png" />
                </div>
              </div>
            </div>

            {/* screenshot */}
            <Image className="h-8 w-auto sm:h-10 inline-block" alt="logo" width={286} height={578} src="/iphone-screen-shot.png" />
          </div>
          
        </div>
        <div className="min-h-screen bg-blue-500 w-screen">
        {/* max-w-6xl  */}
        </div>
        <div className="min-h-screen bg-white w-screen">
        {/* max-w-6xl  */}
        </div>
      </main>

      <footer className="w-full p-3 border-t">
        <a
          href="https://alpha.let.sh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row content-center justify-center w-full pt-2"
        >
          <p className="text-l"> Powered by </p>
          
          <span className="pt-0.5">
            <Image src="/let-sh-logo.svg" alt="let.sh logo" width={92} height={24} />
          </span>
        </a>
      </footer>
    </div>
  )
}
