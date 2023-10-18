import { getCharacters } from "@/services/graphql/getCharacters";
import { getHygraphPosts } from "@/services/graphql/getHygraphPosts";
import Image from "next/image";

export default async function Home() {
  const { info, results } = await getCharacters();
  const posts = await getHygraphPosts();
  // const characters = JSON.stringify(data);

  return (
    <main className="min-h-screen">
      
      <div>
        <span>Total: </span>
        {info?.count}
      </div>
      {/* <div>{characters}</div> */}
      {results?.map((i: any, index: any) => {
        return (
          <p key={index}>
            <span>Name:</span> {i.name}
          </p>
        );
      })}
      <hr />
      <h2>From hygraph</h2>
      <div>
        {posts?.map((p, index) => {
          return (
            <div key={index}>
              <span>ID: {p.post.id}</span>
              <h2>Title: {p.post.title}</h2>
              <h4>Slug: {p.post.slug}</h4>
              <Image
                alt={p.post.slug}
                src={p.post.imagem.url}
                width={100}
                height={100}
              />
              <p>{p.post.content.text}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
