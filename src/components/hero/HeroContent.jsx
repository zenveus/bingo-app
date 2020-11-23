import React from "react";
import heroimg from "../images/hero-img.png";
import "../styles/heroContent.scss";
import logoimg from "../images/logo.png";

export const HeroContent = () => {
  return (
    <section id="hero-Content-section ">
      <div>
        <div style={{ padding: " 0rem 4rem" }}>
          <h1>Woof! You are a part of something special!</h1>
          <p className="mycontentwrapper">
            <span style={{ marginBottom: "2rem" }}>
              Thank you for signing up with Bingo and protecting your pup.If you
              need any help, please contact us at: support@joinbingo.co
            </span>
            <span style={{ marginBottom: "2rem" }}>
              As a reminder, your coverage takes effect after a 3 day waiting
              period. When a claim does arrise, please email the vet bill to:
              claims@joinbingo.co
            </span>
            <span style={{ marginBottom: "2rem" }}>
              Don’t worry, we will send your policy document, claims
              instructions, and more to the email you provided us.
            </span>
          </p>
        </div>
        <div
          className="myImgwrapper"
          style={{ backgroundImage: "url(" + heroimg + ")" }}
        >
          <div style={{ padding: "2rem" }}>
            <img src={logoimg} style={{ width: "27%" }} />
          </div>
        </div>
      </div>
    </section>
  );
};
