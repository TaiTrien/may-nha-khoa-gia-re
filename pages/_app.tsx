import React, { useRef } from "react";
import "../src/index.css";
import "../src/App.css";
import "../src/i18n/config";
import type { AppProps } from "next/app";
import { Toaster } from "../components/ui/toaster";
import { Toaster as Sonner } from "../components/ui/sonner";
import { TooltipProvider } from "../components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ZaloChatButton from "../components/ZaloChatButton";

function MyApp({ Component, pageProps }: AppProps) {
  // Ensure QueryClient is not recreated on every render
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Component {...pageProps} />
        <ZaloChatButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default MyApp; 