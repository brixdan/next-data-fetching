// incremental static generation

export default function IncrementalStaticGeneration({ state }) {
  return (
    <>
      {state.map((e) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const res = await fetch('https://606300ac0133350017fd25e7.mockapi.io/my-api/my-res'); // like https://github.com/api
  const state = await res.json();

  return {
    props: {
      state, // will be passed to the page component as props
    },

    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 5, // In seconds
  };
}
