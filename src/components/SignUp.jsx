export default function SignUp() {
  return (
    <div className="flex flex-col gap-4 text-center px-6 py-8 mx-2 mb-20 bg-dark-blue-1 rounded-lg">
      <h1 className="text-base font-bold">Get early access today</h1>
      <p className="font-raleway opacity-80">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form className="flex flex-col gap-4 pt-4">
        <input
          className="pt-3 pb-2 px-6 rounded-full outline-none text-2xs"
          htmlFor="email"
          name="email"
          placeholder="example@email.com"
        />
        <button className="bg-gradient-to-r from-cyan to-blue font-bold p-3 rounded-full text-xs">
          Get Started For Free
        </button>
      </form>
    </div>
  );
}
