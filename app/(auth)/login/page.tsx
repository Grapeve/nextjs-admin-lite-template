"use client";

import { onStart } from "@/lib/router-events/events";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  return (
    <div className="flex h-full justify-center items-center">
      <button
        onClick={() => {
          router.push("/profile");
          onStart();
        }}
      >
        Click me to main Page
      </button>
    </div>
  );
};

export default LoginPage;
