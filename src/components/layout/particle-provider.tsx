"use client";

import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const engineInit = async (engine: Engine) => {
  await loadSlim(engine);
};

export const ParticlesProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ParticlesProvider init={engineInit}>{children}</ParticlesProvider>;
};
