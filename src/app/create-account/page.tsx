import { Input } from "@/components/Input";
import { Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function CreateAccount() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex min-w-[400px] rounded-[6px] bg-white p-8 shadow-md">
        <form className="flex w-full flex-col items-center">
          <h1 className="mb-8 w-full text-center text-5xl font-normal">
            Create Account
          </h1>
          <div className="flex w-full gap-4">
            <Input type="text" label="First Name" required />
            <Input type="text" label="Last Name" required />
          </div>
          <Input type="email" label="Email" required />
          <Input type="password" label="Password" required />
          <button
            type="submit"
            className="mb-8 mt-8 flex w-full cursor-pointer justify-center rounded-sm bg-[#4f67ff] p-2 text-lg text-white transition-colors hover:bg-[#2a46ff]"
            value="submit"
          >
            Sign Up
          </button>
          <span>
            Already an user?{" "}
            <Link href="/login" className="text-[#4E4E4E] hover:text-black">
              Sign in
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
