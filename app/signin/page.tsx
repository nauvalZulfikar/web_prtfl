"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SignInInner() {
  const params = useSearchParams();
  const error = params.get("error");
  const callbackUrl = params.get("callbackUrl") || "/";

  return (
    <main className="grid min-h-dvh place-items-center bg-background px-4">
      <div className="w-full max-w-sm rounded-2xl border border-neutral-200/60 bg-white/80 p-8 shadow-sm backdrop-blur">
        <h1 className="mb-1 text-xl font-semibold tracking-tight">Sign in</h1>
        <p className="mb-6 text-sm text-neutral-500">
          Private dashboard. Only the owner can sign in.
        </p>

        {error && (
          <div className="mb-4 rounded-md border border-red-300/60 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error === "AccessDenied"
              ? "This Google account is not authorized."
              : `Sign-in error: ${error}`}
          </div>
        )}

        <button
          onClick={() => signIn("google", { callbackUrl })}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.616z"
            />
            <path
              fill="#34A853"
              d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A9 9 0 0 0 9 18z"
            />
            <path
              fill="#FBBC05"
              d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A9 9 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z"
            />
            <path
              fill="#EA4335"
              d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A9 9 0 0 0 .957 4.962L3.964 7.294C4.672 5.167 6.656 3.58 9 3.58z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        <p className="mt-6 text-center text-xs text-neutral-400">
          ←{" "}
          <a href="/" className="underline hover:text-neutral-600">
            Back to home
          </a>
        </p>
      </div>
    </main>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={<main className="grid min-h-dvh place-items-center" />}>
      <SignInInner />
    </Suspense>
  );
}
