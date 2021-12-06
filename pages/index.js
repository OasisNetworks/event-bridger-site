import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect} from 'react'
import anime from 'animejs';

export default function Home() {
  var connectTextParis = [
    [ "Stripe", "Database" ],
    [ "App Store" , "Message" ],
    [ "GitHub", "Email" ],
  ]
  function animateConnectorText(classSelector) {
    var textWrapper = document.querySelector('.'+classSelector);
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    var loopCount = 1;
    var textOrder = 0;
    if (classSelector === "connector-destination-text") {
      textOrder = 1;
    }
    var coonnectorTimeline = anime.timeline({
      loop: true,
    })
    .add({
      targets: '.'+classSelector+' .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: '.'+classSelector+' .line',
      translateX: [0, document.querySelector('.'+classSelector).getBoundingClientRect().width + 10],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    }).add({
      targets: '.'+classSelector+' .letter',
      opacity: [0,1],
      easing: "easeInOutExpo",
      duration: 600,
      offset: '-=775',
      delay: (el, i) => 34 * (i+1)
    }).add({
      opacity: 1,
      duration: 600,
    }).add({
      targets: '.'+classSelector,
      opacity: 0,
      duration: 1000,
      easing: "easeInOutExpo",
      delay: 1000,
      changeComplete: function(anim) {
        var textWrapper = document.querySelector('.' + classSelector);
        console.log("order: ", loopCount % 3);
        if (textWrapper !== null) {
          textWrapper.textContent = connectTextParis[loopCount%3][textOrder]
          textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
          loopCount += 1;
          console.log("loop: ", loopCount);
        }
      }
    }).add({
      opacity: 1,
      duration: 100,
    });
  }

  useEffect(() => animateConnectorText("connector-source-text"), []);
  useEffect(() => animateConnectorText("connector-destination-text"), []);

  return (
    <div>
      <Head>
        <title>Event Bridge APP</title>
        <meta name="description" content="Event Bridge APP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <div className="relative z-10 pb-8 mt-8 bg-white min-h-screen max-w-6xl 2xl:mx-auto xl:mx-auto mx-10">
          <div className="flex flex-row">
            <Link href="/" passHref>
              <div href="#" className="align-middle hover:opacity-80 cursor-pointer">
                <div className="flex items-center justify-between">
                  <Image className="h-8 w-auto sm:h-10 inline-block" alt="logo" width={64} height={64} src="/logo.png" />
                  <div className="leading-6 h-full pl-4 text-2xl font-bold" style={{color: 'black'}}>Event <br/>Bridger</div>
                </div>
              </div>
            </Link>
            <Link href="/docs" passHref>
              <div className="hover:opacity-80 bg-gray-300 p-3 px-6 rounded-xl block m-auto mr-0 cursor-pointer">
                <p className="text-gray-700 text-xl font-bold">
                  Docs
                </p>
              </div>
            </Link>
          </div>

          <div className="pt-14 flex justify-between">
            {/* Title */}
            <div className="">
              <h1 className="text-left text-6xl font-bold mb-5">
                Connect you events
              </h1>
              <h1 className="text-left text-6xl font-bold">
                From
                <div className="inline-block mx-3 px-5 py-6 bg-blue-500 text-white">
                  <p className="connector-source-text">Stripe</p>
                </div>
                to
                <div className="inline-block mx-3 px-5 py-6 bg-blue-500 text-white">
                  <p className="connector-destination-text">Mobile</p>
                </div>
              </h1>
              <p className="text-left text-3xl pt-8 max-w-3xl text-gray-400 font-light mb-16">
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
        <Link
          href="https://alpha.let.sh"
          passHref
        >
          <div className="flex flex-row content-center justify-center w-full pt-2 cursor-pointer">
            <div className="text-l">Powered by </div>
            
            <span className="pt-0.5">
              <Image src="/let-sh-logo.svg" alt="let.sh logo" width={92} height={24} />
            </span>
          </div>
        </Link>
      </footer>
    </div>
  )
}
