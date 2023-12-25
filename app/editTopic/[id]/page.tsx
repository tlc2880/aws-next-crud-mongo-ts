import EditTopicForm from "@/components/EditTopicForm";
import { paramsType } from "../../../types";

const getTopicById = async (id: string) => {
  try {
    const res = await fetch(`https://next-mongo-netlify.netlify.app/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function editTopic({ params }: { params: paramsType } ) {
  const {id}  = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  return <EditTopicForm _id={id} title={title} description={description} />;
}