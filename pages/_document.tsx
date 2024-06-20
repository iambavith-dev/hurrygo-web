import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.4.47/css/materialdesignicons.min.css" integrity="sha512-/k658G6UsCvbkGRB3vPXpsPHgWeduJwiWGPCGS14IQw3xpr63AEMdA8nMYG2gmYkXitQxDTn6iiK/2fD4T87qA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <title>HurryGo | Auto ride booking</title>
      <meta name="description" content="Book Auto rides at low cost in Tamil Nadu."/>
      <meta name="keywords" content="Auto booking, Kanyakumari, Auto ride, Auto ride booking, driver, Nagercoil, Marthandam"/>
      <meta http-equiv="content-language" content="en-us"/>    
      <meta property="og:title" content="HurryGo | Auto ride booking" />
      <meta property="og:site_name" content="hurrygo.in" />
      <meta property="og:url" content="https://hurrygo.in/" />
      <meta property="og:description" content="Book Auto rides at low cost in Tamil Nadu." />
      <meta property="og:type" content="article" />
      <meta property="og:image" content="https://www.hurrygo.in/banner.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@hurrygo-app"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
