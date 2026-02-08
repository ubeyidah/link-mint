import Link from "next/link";
import SignInForm from "../_components/sign-in-form";

const page = async () => {
  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">
          Sign in to your account to continue
        </p>
      </div>

      {/* Form */}
      <SignInForm />

      {/* Footer */}
      <p className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/sign-up"
          className="font-medium text-primary hover:underline underline-offset-2"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default page;

