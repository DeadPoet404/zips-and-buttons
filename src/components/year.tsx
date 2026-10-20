"use client";

import { useSyncExternalStore } from "react";

const EMPTY = "";

function subscribe(onChange: () => void): () => void {
  window.addEventListener("focus", onChange);
  return () => window.removeEventListener("focus", onChange);
}

function getSnapshot(): string {
  return String(new Date().getFullYear());
}

function getServerSnapshot(): string {
  return EMPTY;
}

export default function Year() {
  return <>{useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)}</>;
}
