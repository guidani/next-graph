import { getCharacters } from "@/services/graphql/getCharacters";

export default async function Home() {
  const { info, results } = await getCharacters();
  // const characters = JSON.stringify(data);
  console.log(results);
  return (
    <main className="min-h-screen">
      {/* <div>{JSON.stringify(data, null, 2)}</div> */}
      <div><span>Total: </span>{info?.count}</div>
      {/* <div>{characters}</div> */}
      {results?.map((i: any, index: any) => {
        return (
          <p key={index}>
            <span>Name:</span> {i.name}
          </p>
        );
      })}
    </main>
  );
}
