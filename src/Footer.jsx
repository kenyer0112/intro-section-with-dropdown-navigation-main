const Footer = () => {
  return (
    <div className="h-14 flex justify-center items-center flex-wrap gap-3 my-3 sm:my-0 lg:mt-16">
      <span className="inline-block">Challenge by </span>

      <a
        href="https://www.frontendmentor.io/home"
        rel="noopener"
        target="_blank"
        className="inline-block text-zinc-800 hover:text-zinc-950"
      >
        Frontend Mentor.
      </a>
      <span className="inline-block">Coded by Kenyer Susaña .</span>
    </div>
  );
};

export default Footer;
