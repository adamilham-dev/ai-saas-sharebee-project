"use client";

import { useCreateFolders } from "@/hooks/useCreateFolders";
import { Button } from "@/components/ui/button";
import FolderPlusDuotine from "@/components/icons/folder-plus-duotone";
import React from "react";

type Props = { workspaceId: string };

const CreateFolders = ({ workspaceId }: Props) => {
  const { onCreateNewFolder } = useCreateFolders(workspaceId);

  return (
    <Button
      onClick={onCreateNewFolder}
      className="bg-[#1D1D1D] text-[#707070] flex items-center gap-2 py-6 px-4 rounded-2xl"
    >
      <FolderPlusDuotine />
      Create Folder
    </Button>
  );
};

export default CreateFolders;
