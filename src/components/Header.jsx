export default function Header() {
  return (
    <div className="flex justify-between items-center mb-16 pt-5 lg:pt-16 lg:mb-32">
      <a>
        <img
          className="w-20 lg:w-40 hover:cursor-pointer"
          src="./images/logo.svg"
          alt=""
        />
      </a>

      <a className="flex gap-6 font-raleway text-xs lg:text-sm lg:gap-16">
        <h2 className="border-b border-dark-blue-3 opacity-80 hover:opacity-100 hover:cursor-pointer hover:text-white hover:border-white">
          Features
        </h2>
        <h2 className="border-b border-dark-blue-3 opacity-80 hover:opacity-100 hover:cursor-pointer hover:text-white hover:border-white">
          Team
        </h2>
        <h2 className="border-b border-dark-blue-3 opacity-80 hover:opacity-100 hover:cursor-pointer hover:text-white hover:border-white">
          Sign In
        </h2>
      </a>
    </div>
  );
}
