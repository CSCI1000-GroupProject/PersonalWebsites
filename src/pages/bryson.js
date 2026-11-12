import Head from "next/head";

export default function Bryson() {
  return (
    <div>
      <Head>
        <title>Bryson</title>
        <meta name="viewport" content="width=device-width" />
      </Head>

      <p>Website</p>

      <h1>Hey, I'm Bryson.</h1>

      <img src="/bryson.jpg" alt="Bryson" width={300} />

      <p>
        I'm a first-year student at CU Boulder, originally from the Denver
        metro area, and I graduated from Grandview High School in 2026. I'm
        currently studying computer science.
      </p>

      <p>
        Outside of class, I'm really into audio gear like speakers and amps,
        and I play guitar. I love music, Metallica and Avenged Sevenfold are my favorite bands.
      </p>

      <p>Thanks for stopping by, and feel free to reach out!</p>

      <a href="/">Back to Home Page</a>
    </div>
  );
}
