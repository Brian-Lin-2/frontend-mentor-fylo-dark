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
    <div>
      <p>{testimonial.text}</p>
      <div>
        <img src={testimonial.image} />

        <div>
          <h1>{testimonial.name}</h1>
          <p>{testimonial.profession}</p>
        </div>
      </div>
    </div>
  );
}
