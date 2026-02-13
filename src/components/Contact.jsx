import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-prose mx-auto px-4 py-10 text-black border-t border-black/10"
    >
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <p className="text-base leading-relaxed mb-6">
        I'm open to new opportunities, collaborations, or just to chat about
        blockchain, development, or anything tech-related. Reach out via email
        or connect on social.
      </p>
      <p className="mb-4">
        <a
          href="mailto:0xkaushik.eth@gmail.com"
          className="text-black underline"
        >
          0xkaushik.eth@gmail.com
        </a>
      </p>
      <p className="text-sm text-black/80">
        <a
          href="https://github.com/KaushikKC"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          GitHub
        </a>
        {" · "}
        <a
          href="https://www.linkedin.com/in/kaushik-k-36b871219/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          LinkedIn
        </a>
        {" · "}
        <a
          href="https://x.com/0xkaushik_k"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          X
        </a>
        {" · "}
        <a
          href="https://medium.com/@kccreations1704"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Medium
        </a>
      </p>
    </section>
  );
};

export default Contact;
