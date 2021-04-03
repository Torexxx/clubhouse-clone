
// import {WelcomeStep} from '../components/steps/WelcomeStep';
import {EnterPhoneStep} from '../components/steps/EnterPhoneStep';
import Head from "next/head";

export default function Home() {
  return (
    <div> 
      <Head>
        <meta name= "viewport" content="wisth=device-width, initial-scale-1.0" />
        <title>Clubhouse: Drop-in audio chat</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap"
         rel="stylesheet" />
      </Head>
     
       {/* <WelcomeStep /> */}
       <EnterPhoneStep />
    </div>
  )
}
