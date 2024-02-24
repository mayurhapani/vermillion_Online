import React from "react";
import Style from "../styles/NewsLetter.module.css";

export default function NewsLetter() {
  return (
    <section class={Style.newsletterDiv}>
      <div class="container mx-auto">
        <div class={Style.newsletter}>
          <h2>Newsletter</h2>
          <span>Get Smarter About No-Code</span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit libero a minus facere! Ducimus repudiandae quae, fugiat</p>
          <input placeholder="Enter Your Email" type="email" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
}
