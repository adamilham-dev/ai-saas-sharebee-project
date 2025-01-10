"use client";

import { useMutationDataState } from "@/hooks/useMutationData";
import { getWorkspaceFolders } from "@/actions/workspace";
import { useQueryData } from "@/hooks/useQueryData";
import { useDispatch } from "react-redux";
import { ArrowRight } from "lucide-react";
import { FOLDERS } from "@/redux/slices/folders";
import { cn } from "@/lib/utils";
import FolderDuotone from "@/components/icons/folder-duotone";
import Videos from "../videos";
import Folder from "./folder";
import React from "react";

type Props = {
  workspaceId: string;
};

export type FoldersProps = {
  status: number;
  data: ({
    _count: {
      videos: number;
    };
  } & {
    id: string;
    name: string;
    createdAt: Date;
    workSpaceId: string | null;
  })[];
};

const Folders = ({ workspaceId }: Props) => {
  const dispatch = useDispatch();
  //Get folders
  const { data, isFetched } = useQueryData(["workspace-folders"], () =>
    getWorkspaceFolders(workspaceId)
  );

  const { latestVariables } = useMutationDataState(["create-folder"]);

  const { status, data: folders } = data as FoldersProps;

  if (isFetched && folders) {
    dispatch(FOLDERS({ folders: folders }));
  }

  return (
    <div className="flex flex-col gap-4" suppressHydrationWarning>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <FolderDuotone />
          <h2 className="text-[#BDBDBD] text-xl"> Folders</h2>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[#BDBDBD]">See all</p>
          <ArrowRight color="#707070" />
        </div>
      </div>
      <div
        className={cn(
          status !== 200 && "justify-center",
          "flex items-center gap-4 overflow-x-auto w-full"
        )}
      >
        {status !== 200 ? (
          <p className="text-neutral-300">No folders in workspace</p>
        ) : (
          <>
            {latestVariables && latestVariables.status === "pending" && (
              <Folder
                name={latestVariables.variables.name}
                id={latestVariables.variables.id}
                optimistic
              />
            )}
            {folders.map((folder) => (
              <Folder
                name={folder.name}
                count={folder._count.videos}
                id={folder.id}
                key={folder.id}
              />
            ))}
          </>
        )}
      </div>
      <Videos
        workspaceId={workspaceId}
        folderId={workspaceId}
        videosKey="user-videos"
      />
    </div>
  );
};

export default Folders;
