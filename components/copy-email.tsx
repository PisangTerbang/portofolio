"use client";

import { useEffect, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (state === "idle") return;
    const timer = window.setTimeout(() => setState("idle"), 2400);
    return () => window.clearTimeout(timer);
  }, [state]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-ghost copy-email"
        data-state={state}
        onClick={copy}
      >
        {state === "copied" ? "Email copied" : "Copy email"}
      </button>
      <span className="sr-only" aria-live="polite">
        {state === "copied"
          ? "Email address copied to clipboard."
          : state === "failed"
            ? "Couldn't copy. Select the email address above instead."
            : ""}
      </span>
    </>
  );
}
