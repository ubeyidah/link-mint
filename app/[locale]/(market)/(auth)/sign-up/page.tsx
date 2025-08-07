import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import SignUpForm from "../_components/sign-up-form";

const page = () => {
  return (
    <Card className="w-full max-w-lg px-3">
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          Create your LinkMint account
        </CardTitle>
        <CardDescription className="text-center">
          Start shortening smarter & get free coins when you join.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
      <CardFooter className="block">
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-primary hover:underline">
            Sign In
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default page;
