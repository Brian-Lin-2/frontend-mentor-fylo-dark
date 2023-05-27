export default function Intro() {
  return (
    <div className="text-center">
      <img
        className="mb-10 m-auto lg:w-1/2"
        src="./images/illustration-intro.png"
        alt="files"
      />
      <div className="mx-72">
        <h1 className="text-2xl font-bold mb-6 lg:text-3xl lg:leading-normal">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="font-raleway px-5 mb-8 opacity-80 mx-20 lg:text-base">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="bg-gradient-to-r from-cyan to-blue w-2/3 py-3 rounded-3xl font-bold lg:w-52">
          Get Started
        </button>
      </div>
    </div>
  );
}
