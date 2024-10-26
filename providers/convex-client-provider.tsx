"use client";

import {
  useAuth,
  RedirectToSignIn,
  SignedOut,
} from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient, AuthLoading, Authenticated } from "convex/react";

import { Loading } from "@/components/auth/loading";

const convexURL = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexURL);

interface ConvexClientProvider {
  children: React.ReactNode;
}

export const ConvexClientProvider = ({ children }: ConvexClientProvider) => {
  return (
    <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
      <Authenticated>{children}</Authenticated>
      <AuthLoading>
        <Loading />
      </AuthLoading>
      <header>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </header>
    </ConvexProviderWithClerk>
  );
};
