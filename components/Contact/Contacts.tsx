import React from "react";
import styles from "@/components/Contact/Contact.module.css";

export default function Contact() {
  return (
    <main className={styles.contact}>
      <div className={styles.fauxText}>
        <p>let' s keep in touch</p>
        <h2>contact Us</h2>
      </div>
      <div className={styles.heroContact}>
        <section>
          <h5>contact Agency</h5>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias voluptate consequatur ut, id earum suscipit labore
            </p>
          </div>
        </section>
        <section>
          <h5>our contact</h5>
          <div className={styles.addres}>
            <p>Address : 614 Street Ambohipo</p>
            <p>Phone : 340123654789</p>
            <p>Email : contactus@gmail.com</p>
          </div>
        </section>
        <section className={styles.puts}>
          <h5>Any questions</h5>
          <main>
            <div className={styles.inputs}>
              <input type="text" placeholder="Your name" className="input" />
            </div>
            <div className={styles.inputs}>
              <input type="email" placeholder="Email" className="input" />
            </div>
            <fieldset className={styles.inputs}>
              {/* <legend className="fieldset-legend">Your Mesages</legend> */}
              <textarea
                className="textarea h-24"
                placeholder="Your Messages"
              ></textarea>
              {/* <div className="label">Optional</div> */}
            </fieldset>
            <button>Contact Us</button>
          </main>
        </section>
      </div>
    </main>
  );
}
