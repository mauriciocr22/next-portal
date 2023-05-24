export default function Login() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex min-w-[400px] bg-white p-8">
        <form className="flex w-full flex-col items-center">
          <h1 className="mb-8 w-full text-center text-5xl font-normal">
            Login
          </h1>
          <input
            type="email"
            placeholder="Email"
            className="mb-2 w-full p-2 text-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 text-lg"
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
            <a className="text-[#4E4E4E] hover:text-black" href="#">
              Sign up
            </a>
          </span>
        </form>
      </div>
    </div>
  );
}
