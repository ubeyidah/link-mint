import Link from "next/link";
import SignUpForm from "../_components/sign-up-form";

const page = () => {
  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">
          Create your account
        </h1>
        <p className="text-sm text-muted-foreground">
          Start shortening smarter — get free coins when you join
        </p>
      </div>

      {/* Form */}
      <SignUpForm />

      {/* Footer */}
      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="font-medium text-primary hover:underline underline-offset-2"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default page;
