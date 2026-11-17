import Head from 'next/head';
export default function Bryson() {
  return (
    <div>
      <Head>
        <title>Caleb</title>
        <meta name="viewport" content="width=device-width" />
      </Head>

      <p>Website</p>

      <h1>Hey, I'm Caleb.</h1>

      <img src="/caleb.jpg" alt="Caleb" width={300} />

      <p>
        I'm a first-year student at CU Boulder, originally from Los Angeles, but I moved to the Denver Metro Area.
        I am a Computer Science major attending the University of Colorado Boulder. I graduated from Eaglecrest High School in 2026.
      </p>

      <p>
        Outside of class, I like to hang out with my friends and talk to family. I like to play sports, 
        however I love to watch football; go Broncos. I was apart of my high school's tennis team and still love to play the sport
      </p>

      <p>Thanks for stopping by, and feel free to reach out!</p>

      <a href="/">Back to Home Page</a>
    </div>
  );
}
