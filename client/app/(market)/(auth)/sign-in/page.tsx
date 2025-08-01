import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import SignInForm from "../_components/sign-in-form";

const page = async () => {
  return (
    <Card className="w-full max-w-lg px-3">
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          Sign In to LinkMint
        </CardTitle>
        <CardDescription className="text-center">
          Securely access your links
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignInForm />
      </CardContent>
      <CardFooter className="block">
        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <Link href="/sign-up" className="text-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default page;
