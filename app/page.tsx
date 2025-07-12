import Explores from "@/components/Explores/Explores";
import Contact from "@/components/Contact/Contacts";
import Blog from "@/components/Blogs/Blogs";
import News from "@/components/News/News.";

export default function Home() {
  return (
    <main>
      <section id="about">
        <News />
      </section>
      <section id="explores">
        <Explores />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
