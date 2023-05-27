export default function Intro() {
  return (
    <div className="text-center">
      <img
        className="mb-10"
        src="./images/illustration-intro.png"
        alt="files"
      />
      <div>
        <h1 className="text-2xl font-bold mb-6">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="font-raleway px-7 mb-8">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="bg-gradient-to-r from-cyan to-blue w-2/3 py-3 rounded-3xl mb-40">
          Get Started
        </button>
      </div>
    </div>
  );
}
