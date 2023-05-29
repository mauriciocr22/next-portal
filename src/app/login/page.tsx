import { Input } from "@/components/Input";
import { Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex min-w-[400px] rounded-[6px] p-8">
        <form className="flex w-full flex-col items-center">
          <h1 className="mb-8 text-4xl lg:text-5xl"> Login</h1>
          <Input
            type="email"
            label="Email"
            icon={<Mail className="text-[#aaa]" />}
            required
          />
          <Input
            type="password"
            label="Password"
            icon={<Lock className="text-[#aaa]" />}
            required
          />
          <div className="mb-3 mt-8 flex w-full flex-row justify-between">
            <div>
              <input
                placeholder="Email"
                type="checkbox"
                className="mr-1"
                name="fremember"
                id="fremember"
              />
              <label htmlFor="fremember">Remember me</label>
            </div>
            <a href="#" className="text-[#4E4E4E] hover:text-black">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="mb-8 flex w-full cursor-pointer justify-center rounded-sm bg-[#4f67ff] p-2 text-lg text-white transition-colors hover:bg-[#2a46ff]"
            value="submit"
          >
            Login
          </button>
          <span>
            Do not have an account?{" "}
            <Link className="text-[#4E4E4E] hover:text-black" href="/signup">
              Sign up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
