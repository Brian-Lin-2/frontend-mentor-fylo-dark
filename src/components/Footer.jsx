export default function Footer() {
  return (
    <div className="bg-dark-blue-3 p-5 pt-44 relative -mt-36 lg:pl-32 lg:pr-24 lg:pb-20 lg:-mt-24 lg:pt-36">
      <img className="mx-4 my-12 lg:mx-0" src="./images/logo.svg" alt="" />

      <div className="lg:flex items-start">
        <div className="flex flex-col gap-5 lg:flex-row lg:w-7/12">
          <div className="flex items-start gap-5 lg:w-1/2 lg:pr-2 lg:mr-16">
            <img className="mt-1" src="./images/icon-location.svg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <img src="./images/icon-phone.svg" alt="" />
              <p>+1-543-123-4567</p>
            </div>

            <div className="flex items-center gap-5">
              <img src="./images/icon-email.svg" alt="" />
              <p>example@fylo.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 mt-20 mb-28 lg:flex-row lg:m-0 lg:gap-20 lg:ml-12">
          <div className="flex flex-col gap-4">
            <a>About Us</a>
            <a>Jobs</a>
            <a>Press</a>
            <a>Blog</a>
          </div>

          <div className="flex flex-col gap-4">
            <a>Contact Us</a>
            <a>Terms</a>
            <a>Privacy</a>
          </div>
        </div>

        <div className="flex gap-2 justify-center text-center mb-8 lg:ml-32">
          <i className="fa-brands fa-facebook-f rounded-full p-1 w-6"></i>
          <i className="fa-brands fa-twitter rounded-full p-1 w-6"></i>
          <i className="fa-brands fa-instagram rounded-full p-1 w-6"></i>
        </div>
      </div>
    </div>
  );
}
