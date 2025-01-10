import { useSubscription } from "@/hooks/useSubscription";
import { Button } from "@/components/ui/button";
import Loader from "../loader";
import React from "react";

const PaymentButton = () => {
  const { onSubscribe, isProcessing } = useSubscription();

  return (
    <Button className="text-sm w-full " onClick={onSubscribe}>
      <Loader color="#000" state={isProcessing}>
        Upgrade
      </Loader>
    </Button>
  );
};

export default PaymentButton;
