"use client";

import SeamlessBackground from "./SeamlessBackground";

interface BackgroundLayersProps {
  useSeamless?: boolean;
}

export default function BackgroundLayers({
  useSeamless = true
}: BackgroundLayersProps) {
  return (
    <div className="background-layers">
      {useSeamless && <SeamlessBackground />}
    </div>
  );
}