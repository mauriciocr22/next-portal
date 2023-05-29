import { Input } from "@/components/Input";

import humanSvg from "../../assets/human.svg";

import Link from "next/link";
import Image from "next/image";

export default function SignUp() {
  return (
    <div className="flex h-full w-full flex-row">
      <aside className="bg-blue hidden h-full w-[35%] min-w-[450px] items-center justify-center bg-gradient-to-br from-blue-600 from-5% via-blue-700 to-blue-800 p-5 lg:flex">
        <div className="align-center flex-col">
          <Image src={humanSvg} alt="Human working" height={500} />
          <h1 className="text-5xl font-bold text-white">Join us!</h1>
          <p className="text-lg text-white">
            Create your account to keep using our service.
          </p>
        </div>
      </aside>
      <div className="flex h-full w-full items-center justify-center lg:w-[65%] lg:shadow-left">
        <div className="flex rounded-[6px] bg-[#fdfdfd] p-8">
          <form className="flex w-full flex-col items-center">
            <h1 className="mb-8 w-full text-center text-4xl font-normal lg:text-5xl">
              Create your account
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
              Create account
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
    </div>
  );
}
