import { Button } from "@/components/ui/button";
import { Links } from "@/components/icons";
import { toast } from "sonner";
import React from "react";

type Props = {
  videoId: string;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null;
};

const CopyLink = ({ videoId, className, variant }: Props) => {
  const onCopyClipboard = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_HOST_URL}/preview/${videoId}`
    );

    toast("Copied", {
      description: "Link successfully copied",
    });
  };

  return (
    <Button variant={variant} onClick={onCopyClipboard} className={className}>
      <Links />
    </Button>
  );
};

export default CopyLink;
