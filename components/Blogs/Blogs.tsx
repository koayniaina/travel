import React from "react";
import styles from "@/components/Blogs/Blog.module.css";
export default function Blogs() {
  return (
    <main className={styles.blog}>
      <div>
      <h2 className={styles.title}>Blogs.</h2>
      <p className={styles.titles}>Lorem ipsum dolor sit amet consectetur adipisicing</p>

      </div>
      <section className={styles.HeroBlog}>
        <div className="card bg-base-100 h-100  shadow-sm">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1558714027-a3c33b547b77?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">My Unforgettable Journey in Russie</h2>
            <p>
              Discover the most breathtakings routes in the pyrenees perfect for all skill levels
            </p>
            <div className="card-actions justify-start">
              <button className="btn">Read More</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  h-100  shadow-sm">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              What to pack for Your Next Adventure
            </h2>
            <p>
             Packing smart can make or break your trip 
             Here's checklist to ensure you're prepared
            </p>
            <div className="card-actions justify-start">
              <button className="btn">Read More</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 h-100  shadow-sm">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1546979348-7a211780ad7f?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
             <h2 className="card-title">My Unforgettable Journey in Japon</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-start">
              <button className="btn">Read More</button>
            </div>
          </div>
        </div>
        
      </section>
    </main>
  );
}
