export default function About() {
  return (
    <div className="flex flex-col gap-4 font-raleway mb-40 mx-2">
      <img
        className="mb-6"
        src="./images/illustration-stay-productive.png"
        alt="people working"
      />
      <h1 className="font-bold text-lg">Stay productive, wherever you are</h1>
      <p>
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.
        <br /> <br />
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required.
      </p>
      <a className="flex items-center gap-2 pb-0.5 border-b border-cyan w-fit">
        <p className="text-cyan">See how Fylo works</p>
        <img src="./images/icon-arrow.svg" alt="" />
      </a>
    </div>
  );
}
