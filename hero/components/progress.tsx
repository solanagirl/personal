"use client";

import React from "react";
import {Progress} from "@heroui/react";

export default function SchoolProgressBar() {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Progress
    classNames={{
      base: "max-w-md",
      track: "drop-shadow-md border border-default",
      indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
      label: "tracking-wider font-medium text-default-600",
      value: "text-foreground/60",
    }}
    label="Degree Completion"
    radius="sm"
    showValueLabel={true}
    size="sm"
    value={75}
  />

  );
}

