export default function Header() {
  return (
    <div className="flex justify-between items-center mb-16 pt-5">
      <a>
        <img className="w-20" src="./images/logo.svg" alt="" />
      </a>

      <a className="flex gap-6 opacity-80 font-raleway text-xs">
        <h2>Features</h2>
        <h2>Team</h2>
        <h2>Sign In</h2>
      </a>
    </div>
  );
}
