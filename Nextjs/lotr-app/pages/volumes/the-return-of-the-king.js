import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/resources/lib/data";

export default function ReturnOfTheKingPage() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );

  if (!volume) return <p>Volume not found.</p>;

   const index = volumes.findIndex(
  ({ slug }) => slug === "the-return-of-the-king"
);
  const previousVolume = volumes[index - 1];
  const nextVolume = volumes[index + 1];

  

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>

      <h1>{volume.title}</h1>
      <p>{volume.description}</p>

      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}. {book.title}
          </li>
        ))}
      </ul>

      <Image
        src={`/images/${volume.cover}`}
        alt={volume.title}
        width={140}
        height={230}
      />

       {previousVolume && (
        <Link href={`/volumes/${previousVolume.slug}`}>
          ← {previousVolume.title}
        </Link>
      )}

      {nextVolume && (
        <Link href={`/volumes/${nextVolume.slug}`}>
          {nextVolume.title} →
        </Link>
      )}
    </>
  );
}