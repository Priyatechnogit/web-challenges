import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import { volumes } from "../../lib/data.js";

console.log(" SLUG PAGE LOADED");

export default function VolumeDetail(){
    console.log(" COMPONENT RUNNING");
    const router = useRouter();
    console.log("router:",router);
    const { slug } = router.query;
    console.log("slug:", slug);
console.log("volumes:", volumes);
if (!slug) {
    return <p>Loading...</p>;
  }

    const volumeIndex = volumes.findIndex(
    (volume) => volume.slug === slug
  );

  const volume = volumes[volumeIndex];
  if (!volume) {
  return <p>Volume not found</p>;
}
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];


  const { title, description, cover, books } = volume;



  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );




}
    

