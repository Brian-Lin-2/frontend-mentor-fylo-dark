export default function About() {
  return (
    <div className="flex flex-col gap-4 font-raleway mb-40 mx-2 lg:flex-row lg:items-center">
      <img
        className="mb-6"
        src="./images/illustration-stay-productive.png"
        alt="people working"
      />

      <div className="mx-8 flex flex-col gap-4">
        <h1 className="font-bold text-lg lg:text-4xl lg:mr-40">
          Stay productive, wherever you are
        </h1>
        <p className="opacity-80 lg:mr-12">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
          <br /> <br />
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a className="text-cyan opacity-100 flex items-center gap-2 pb-0.5 border-b border-cyan w-fit lg:mt-2 hover:cursor-pointer hover:opacity-80">
          <p>See how Fylo works</p>
          <img src="./images/icon-arrow.svg" alt="" />
        </a>
      </div>
    </div>
  );
}
