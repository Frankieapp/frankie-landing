import Head from "next/head";

export default function Join() {
  return (
    <>
      <Head>
        <title>We’re just getting started — and we want your voice in the room.</title>
        <script async src="https://tally.so/widgets/embed.js"></script>
      </Head>
      <div className="w-full h-screen">
        <iframe
          data-tally-src="https://tally.so/r/mepjWl?transparentBackground=1"
          title="Frankie Beta Signup"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          style={{ border: "none", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        />
      </div>
    </>
  );
}
