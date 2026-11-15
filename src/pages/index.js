import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Our GitHub Group Project</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <h1>Welcome to our GitHub Group Project</h1>

      <div className="buttons">
        <a href="/bryson">Bryson</a>
        <a href="/christian">Christian</a>
        <a href="/caleb">Caleb</a>
        <a href="/addiskidan">Addiskidan</a>
      </div>

      <style jsx global>{`
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: Arial, Helvetica, sans-serif;
      background: #0d1117;
      color: #e6edf3;
      text-align: center;
    }

    h1 {
      font-size: 2.2rem;
      margin-bottom: 40px;
      padding: 0 20px;
    }

    .buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    .buttons a {
      display: inline-block;
      width: 160px;
      padding: 16px 0;
      background: #238636;
      color: white;
      text-decoration: none;
      font-size: 1.1rem;
      font-weight: bold;
      border-radius: 8px;
      transition: background 0.2s, transform 0.2s;
    }

    .buttons a:hover {
      background: #2ea043;
      transform: translateY(-3px);
    }
      `}</style>
    </>
  );
}
