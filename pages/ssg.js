// static site generation

export default function StaticSideGeneration({ state }) {
  return (
    <>
      {state.map((e) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  const res = await fetch('https://606300ac0133350017fd25e7.mockapi.io/my-api/my-res'); // like https://github.com/api
  const state = await res.json();

  return {
    props: {
      state, // will be passed to the page component as props
    },
  };
}
