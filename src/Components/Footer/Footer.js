import React from "react";

const Footer = () => {
  return (
    <div>
      <p
        style={{
          textAlign: "center",
          fontFamily: "cursive",
          marginTop: "30px",
        }}
      >
        Made with ❤️ by Anil Kumar Nayak |
        <a
          href="http://anil639.github.io/portfolio/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <b>Portfolio</b>
        </a>{" "}
      </p>
    </div>
  );
};

export default Footer;
