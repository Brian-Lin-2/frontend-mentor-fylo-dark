export default function Header() {
  return (
    <div className="flex justify-between items-center mb-16 pt-5 lg:pt-16 lg:mb-32">
      <a>
        <img className="w-20 lg:w-40" src="./images/logo.svg" alt="" />
      </a>

      <a className="flex gap-6 opacity-80 font-raleway text-xs lg:text-sm lg:gap-16">
        <h2>Features</h2>
        <h2>Team</h2>
        <h2>Sign In</h2>
      </a>
    </div>
  );
}
