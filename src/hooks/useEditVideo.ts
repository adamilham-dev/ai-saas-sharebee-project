import { editVideoInfoSchema } from "@/components/forms/edit-video/schema";
import { useMutationData } from "./useMutationData";
import { editVideoInfo } from "@/actions/workspace";
import useZodForm from "./useZodForm";

export const useEditVideo = (
  videoId: string,
  title: string,
  description: string
) => {
  const { mutate, isPending } = useMutationData(
    ["edit-video"],
    (data: { title: string; description: string }) =>
      editVideoInfo(videoId, data.title, data.description),
    "preview-video"
  );

  const { errors, onFormSubmit, register } = useZodForm(
    editVideoInfoSchema,
    mutate,
    {
      title,
      description,
    }
  );

  return { onFormSubmit, register, errors, isPending };
};
