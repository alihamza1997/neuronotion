import '../src/styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
    
          <Script
        id="track-pageview-pixel"
        src="https://connect.facebook.net/en_US/fbevents.js"
        onLoad={() => {
          fbq('init', '230622039592089');
          fbq('track', 'PageView');
        }}
      />
        
      <Script
        id="vercel-speed-insights"
        src="/_vercel/insights/script.js"
        />
          
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Neuro Notion ┃ The Ultimate ADHD Study Notion Template</title>
        <link rel="stylesheet" href="../node_modules/tailwindcss/tailwind.css" />
        <link rel="icon" href="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/logo.webp" type="image/webp" />
        <style>
          {'.hero-section{margin-bottom:50px;} .star-rating{margin-bottom:50px;} .centered-image{display:block;margin-left:auto;margin-right:auto;max-width:100%;height:auto;} .full-header{z-index:10;} h3{color:black;}'}
        </style>
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
              <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
              <link rel="preconnect" href="https://cdn.jsdelivr.net" />
              <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.1/dist/tailwind.min.css" as="style" />
        <link rel="preload" href="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/logo.webp" as="image" />
        <link rel="preload" href="/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Fjoshiebudd%2Fnotionwidgets%2Fmain%2Flogo.webp" as="image" />
        <link rel="preload" href="https://raw.githubusercontent.com/joshiebudd/notionwidgets/main/maindemo.webp" as="image" />
        <link rel="preload" href="/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Fjoshiebudd%2Fnotionwidgets%2Fmain%2Fmaindemo.webp" as="image" />   
        
      </Head>



      <Component {...pageProps} />
    </>
  );
}

export default MyApp;