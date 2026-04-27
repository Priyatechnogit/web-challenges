import Link from "next/link";
import { volumes } from "@/resources/lib/data";

export default function VolumesPage(){
return (
    <>
      <h1>All Volumes</h1>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>
              {volume.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}