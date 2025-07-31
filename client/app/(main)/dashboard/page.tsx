"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";

const page = () => {
  const { data: session, error } = authClient.useSession();
  console.log("Session Data:", session);
  console.log("Session Error:", error);
  return (
    <div>
      dashboard
      {session ? (
        <div>
          <h1>Welcome, {session.user.name}</h1>
          <p>Email: {session.user.email}</p>
        </div>
      ) : (
        <p>Please sign in to view your dashboard.</p>
      )}
    </div>
  );
};

export default page;
