"use client";

import { LoadVoiceFlowAgent } from "@/lib/voiceflow";
import React, { useEffect } from "react";

const VoiceFlowAgent = () => {
  useEffect(() => {
    LoadVoiceFlowAgent();
  }, []);
  return <></>;
};

export default VoiceFlowAgent;
