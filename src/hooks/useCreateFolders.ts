import { useMutationData } from "./useMutationData";
import { createFolder } from "@/actions/workspace";

export const useCreateFolders = (workspaceId: string) => {
  const { mutate } = useMutationData(
    ["create-folder"],
    () => createFolder(workspaceId),
    "workspace-folders"
  );

  const onCreateNewFolder = () =>
    mutate({ name: "Untitled", id: "optimitsitc--id" });

  return { onCreateNewFolder };
};
