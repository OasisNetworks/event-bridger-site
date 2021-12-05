import Document, { Html, Head, Main, NextScript } from 'next/document'

class BaseDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/Product Sans Bold.ttf"
                        as="font"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/Product Sans Regular.ttf"
                        as="font"
                        crossOrigin=""
                    />
                </Head>
                <body><Main /><NextScript /></body>
            </Html>
        )
    }
}


export default BaseDocument