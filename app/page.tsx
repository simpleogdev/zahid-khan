import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Main from "@/components/Main";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Main />
      <About />
      <Intro />
    <div className="flex flex-col">
    <Projects
        title="Imdb Clone"
        des="I developed a website using Next.js and Tailwind CSS, utilizing the TMDB API
            to create a clone of IMDb. The site features search functionality, displaying
            movie and TV details elegantly with posters and ratings. Leveraging Next.js
            allowed for optimized performance, while Tailwind CSS streamlined styling.
            Integrating the TMDB API enabled dynamic content fetching dark mode toggle.
            The project hones my skills in front-end development, API integration, and UI
            design. Future enhancements could involve user reviews and watchlists. Viewers
            can explore the live demo to experience the IMDb-like interface and search for
            their favorite movies and TV shows seamlessly."
        live="https://imdb-clonee.vercel.app/"
        github="https://github.com/simpleogdev/imdb-clone"
        image="/images/imdb.png"
      />
      <Projects
        title="News App"
        des="I crafted a dynamic Breaking News app employing Next.js and Tailwind CSS. This application delivers real-time updates on breaking news stories in an engaging and user-friendly interface. The utilization of Next.js ensures efficient rendering and seamless navigation, while Tailwind CSS facilitated rapid and responsive design implementation. By combining these technologies, I've constructed a platform that offers a smooth user experience, keeping individuals well-informed with the latest developments as they unfold."
        live="https://breaking-news-57a2.vercel.app/"
        github="https://github.com/simpleogdev/breaking-news"
        image="/images/news.png"
      />

      <Projects
        title="Messenger Clone"
        des="I crafted a Messenger clone using Next.js and Tailwind CSS, complete with real-time chat capabilities powered by Pusher. Seamlessly integrating Next.js ensured optimized rendering, while Tailwind CSS facilitated sleek styling. Leveraging Pusher's real-time functionality enabled instant message updates. The project enhanced my proficiency in front-end development, API integration, and UI design, while also delving into real-time web features. This clone stands as a testament to my growing skill set and offers users a platform to engage in live chats, mirroring the experience of a familiar messaging application. Experience the demo to engage in dynamic, real-time conversations"
        live="https://message-app-v2.vercel.app/"
        github="https://github.com/simpleogdev/message-app-v2/tree/main"
        image="/images/messanger.png"
      />
      <Projects
        title="Weather App"
        des="I designed a weather app that provides real-time weather updates and forecasts. Through meticulous coding and integration of various APIs, users can receive accurate weather data for their location. The app's intuitive interface ensures ease of use, displaying temperature, humidity, wind speed, and more. By creating this app, I honed my programming skills and gained valuable experience in API handling and user-centric design. As I continue to refine and expand the app's features, I look forward to offering users an indispensable tool for staying informed about the ever-changing weather conditions in their area."
        live="https://today-weather-app.vercel.app/"
        github="https://github.com/simpleogdev/Weather"
        image="/images/weather.png"
      />
      <Projects
        title="Perpet Clone"
        des="I've successfully developed a versatile website clone known as Perpet, a platform designed to create web and Android applications for clients. This project was crafted using the power of Next.js and the elegance of Tailwind CSS. Perpet is not only aesthetically pleasing but also fully responsive, ensuring a seamless user experience across various devices. Its user-friendly interface simplifies the process of generating web and Android applications, making it an ideal choice for clients seeking a convenient solution for their digital needs."
        live="https://perpet-clone.vercel.app/"
        github="https://github.com/simpleogdev/perpet-clone"
        image="/images/perpet.png"
      />
      <Projects
        title="Practice Landing Page"
        des="I designed a modern practice landing page for a course provider website using cutting-edge technologies like Next.js and Tailwind CSS. This dynamic combination enabled me to craft a visually appealing and responsive interface. Leveraging Next.js facilitated efficient routing and server-side rendering, while Tailwind CSS expedited the styling process. The result is a sleek, user-friendly platform that showcases courses seamlessly. Through this project, I honed my skills in front-end development and gained valuable experience in creating engaging web experiences. The landing page stands as a testament to my commitment to delivering high-quality, modern web solutions."
        live="https://landing-page-practicee.vercel.app/"
        github="https://github.com/simpleogdev/landing-page"
        image="/images/landingpage.png"
      />
    </div>
      <Contact />
      <Footer />
    </main>
  );
}
