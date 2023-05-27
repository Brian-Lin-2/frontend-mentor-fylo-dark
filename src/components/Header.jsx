export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <a>
        <img className="w-20" src="./images/logo.svg" alt="" />
      </a>

      <a className="flex gap-5 opacity-75">
        <h2>Features</h2>
        <h2>Team</h2>
        <h2>Sign In</h2>
      </a>
    </div>
  );
}
