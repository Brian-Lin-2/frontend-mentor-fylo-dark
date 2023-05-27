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
      <img className="w-6 mx-4" src="images/bg-quotes.png" alt="" />
      <div className="grid grid-cols-1 grids-row-3 font-raleway text-xs gap-6 leading-5 mx-3 mb-52">
        {testimonial.map((testimonial) => {
          return (
            <div
              className="p-5 bg-dark-blue-4 rounded"
              key={crypto.randomUUID()}
            >
              <p className="opacity-80 mb-4">{testimonial.text}</p>
              <div className="flex items-center gap-2">
                <img className="w-8 rounded-full" src={testimonial.image} />

                <div>
                  <h1 className="font-open-sans font-bold">
                    {testimonial.name}
                  </h1>
                  <p className="opacity-80">{testimonial.profession}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
