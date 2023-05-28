export default function Testimonial() {
  const testimonial = [
    {
      name: "Satish Patel",
      image: "./images/profile-1.jpg",
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      profession: "Founder & CEO, Huddle",
    },
    {
      name: "Bruce McKenzie",
      image: "./images/profile-2.jpg",
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      profession: "Founder & CEO, Huddle",
    },
    {
      name: "Iva Boyd",
      image: "./images/profile-3.jpg",
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      profession: "Founder & CEO, Huddle",
    },
  ];

  return (
    <>
      <img
        className="w-6 mx-4 lg:relative lg:w-12 lg:z-10 lg:left-6 lg:-bottom-3"
        src="images/bg-quotes.png"
        alt=""
      />
      <div className="grid grid-cols-1 grids-row-3 font-raleway text-xs gap-6 leading-5 mx-3 mb-40 lg:grid-rows-1 lg:grid-cols-3 lg:relative lg:z-20 lg:gap-12 lg:mx-12 lg:mb-52">
        {testimonial.map((testimonial) => {
          return (
            <div
              className="p-5 bg-dark-blue-4 rounded lg:p-6 lg:pt-8"
              key={crypto.randomUUID()}
            >
              <p className="opacity-80 mb-4 lg:text-sm lg:mr-4">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-2">
                <img className="w-8 rounded-full" src={testimonial.image} />

                <div className="lg:mt-2">
                  <h1 className="font-open-sans font-bold">
                    {testimonial.name}
                  </h1>
                  <p className="opacity-80 lg:leading-4">
                    {testimonial.profession}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
