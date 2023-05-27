export default function Footer() {
  return (
    <div className="mx-2">
      <img className="mx-4 my-12" src="./images/logo.svg" alt="" />

      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-5">
          <img className="mt-1" src="./images/icon-location.svg" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div className="flex items-center gap-5">
          <img src="./images/icon-phone.svg" alt="" />
          <p>+1-543-123-4567</p>
        </div>

        <div className="flex items-center gap-5">
          <img src="./images/icon-email.svg" alt="" />
          <p>example@fylo.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 my-20">
        <a>About Us</a>
        <a>Jobs</a>
        <a>Press</a>
        <a>Blog</a>

        <a className="mt-8">Contact</a>
        <a>Terms</a>
        <a>Privacy</a>
      </div>

      <div>
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
      </div>
    </div>
  );
}
