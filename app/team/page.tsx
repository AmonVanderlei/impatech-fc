"use client";

import Field from "@/components/Field";
import { TEAMS } from "@/utils/constants";

export default function Team() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-full h-full p-8 flex justify-center">
        <Field team={TEAMS[0]} />
      </div>
    </div>
  );
}
