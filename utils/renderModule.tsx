// utils/renderModule.tsx
import React from "react";
import { v4 } from "uuid";
import HeroModule, { HeroModulePropsType } from "@/components/heroModule";

type ModulesType = { __typename: string } & HeroModulePropsType;

const MODULE_MAP: Record<
  string,
  React.FunctionComponent<ModulesType> | undefined
> = {
  ModuleHero: HeroModule,
};

export default function renderModule(data: ModulesType) {
  if (data === null) return;
  const moduleType = data.__typename;
  const Module = MODULE_MAP[moduleType];
  if (!Module) {
    return <React.Fragment />;
  }
  return <Module {...data} key={v4()} />;
}