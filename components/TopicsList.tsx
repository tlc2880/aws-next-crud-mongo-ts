import React  from 'react';
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { topicType } from "../types.d";

const getTopics = async () => {
  try {
    const res: Response = await fetch('https://next-mongo-vercel-rouge.vercel.app/api/topics', {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
}

// type Props = {
//   id: string
// }

export default async function TopicsList() { //{id}: Props ) {
  const {topics}: any = await getTopics();

  return (
    <>
    {topics.map((t: topicType) => (
      <div key={t._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">{t.title}</h2>
          <div>{t.description}</div>
        </div>
        <div className="flex gap-2">
          <RemoveBtn/>
          <Link href={`/editTopic/${t._id}`}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
      ))}
    </>
  )
}
