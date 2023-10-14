export default function Review({ name, job, image, text }) {
  return (
    <section>
      <div>
        <img src={image} width={"100px"} />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <p>{text}</p>
    </section>
  );
}
