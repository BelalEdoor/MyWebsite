import githubIcon from "../assets/github.svg";
import externalLink from "../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <section id="project" className="mt-40 px-6">
      <ScrollAnimation animateIn="fadedown">
        <h2 className="text-center mt-8 text-purple-500 text-[2.5rem] font-semibold">
          My Projects
        </h2>
      </ScrollAnimation>
      <div className="grid gap-8 overflow-hidden grid-cols-3">
        {/* Card 1 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="p-8 bg-gray-900 rounded-xl flex flex-col h-full text-white hover:translate-y-[-5px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 transition duration-300">
            <header className="flex items-center justify-between mb-14 text-blue-500">
              <svg
  width="50"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#A855F7"   // <-- هنا لون البنفسجي
  strokeWidth="1"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <title>Folder</title>
  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
</svg>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/BilalEdoor/Address-Book.git"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:brightness-125 transition"
                >
                  <img
                    src={githubIcon}
                    alt="GitHub"
                    className="w-12 filter invert"
                  />
                </a>
                <a
                  href="https://github.com/BilalEdoor/Address-Book.git"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:brightness-125 transition"
                >
                  <img
                    src={externalLink}
                    alt="Visit site"
                    className="w-12 filter invert"
                  />
                </a>
              </div>
            </header>
            <div className="flex-grow">
              <h3 className="mb-8 text-xl font-semibold text-purple-500">
                Address Book
              </h3>
              <p className="mb-8 tracking-wide">
                This project was designed using object-oriented programming with
                Java, where all the basic concepts were applied in this project,
                such as interface, anteriority, polymorphism, and the project was
                worked using the GUI.
              </p>
            </div>
            <footer>
              <ul className="flex items-center gap-8 text-lg opacity-60">
                <li>JAVA</li>
                <li>OOP</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Card 2 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="p-8 bg-gray-900 rounded-xl flex flex-col h-full text-white hover:translate-y-[-5px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 transition duration-300">
            <header className="flex items-center justify-between mb-14 text-blue-500">
              <svg
  width="50"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#A855F7"   // <-- هنا لون البنفسجي
  strokeWidth="1"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <title>Folder</title>
  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
</svg>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/BilalEdoor/project---react-js-training-.git"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:brightness-125 transition"
                >
                  <img
                    src={githubIcon}
                    alt="GitHub"
                    className="w-12 filter invert"
                  />
                </a>
                <a
                  href="https://github.com/BilalEdoor/project---react-js-training-.git"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:brightness-125 transition"
                >
                  <img
                    src={externalLink}
                    alt="Visit site"
                    className="w-12 filter invert"
                  />
                </a>
              </div>
            </header>
            <div className="flex-grow">
              <h3 className="mb-8 text-xl font-semibold text-purple-500">
                Bilal Store
              </h3>
              <p className="mb-8 tracking-wide">
                This project was designed using react js, and the style was also
                added to the various pages using the tailwind css library.
              </p>
            </div>
            <footer>
              <ul className="flex items-center gap-8 text-lg opacity-60">
                <li>React Js</li>
                <li>Tailwind css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Card 3 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="p-8 bg-gray-900 rounded-xl flex flex-col h-full text-white hover:translate-y-[-5px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 transition duration-300">
            <header className="flex items-center justify-between mb-14 text-blue-500">
             <svg
  width="50"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#A855F7"   // <-- هنا لون البنفسجي
  strokeWidth="1"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <title>Folder</title>
  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
</svg>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/BilalEdoor/smart-driving-.git"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:brightness-125 transition"
                >
                  <img
                    src={githubIcon}
                    alt="GitHub"
                    className="w-12 filter invert"
                  />
                </a>
                <a
                  href="https://github.com/BilalEdoor/smart-driving-.git"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:brightness-125 transition"
                >
                  <img
                    src={externalLink}
                    alt="Visit site"
                    className="w-12 filter invert"
                  />
                </a>
              </div>
            </header>
            <div className="flex-grow">
              <h3 className="mb-8 text-xl font-semibold text-purple-500">
                Smart Driving
              </h3>
              <p className="mb-8 tracking-wide">
                The project involves controlling the car via the Internet The
                ESP32 was used as a microcontroller, joystick, and the Arduino
                Cloud site to connect the board, the controller, and the car
                board.
              </p>
            </div>
            <footer>
              <ul className="flex items-center gap-8 text-lg opacity-60">
                <li>C++</li>
                <li>Arduino cloud</li>
                <li>Esp32 microcontroller</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Card 4 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="p-8 bg-gray-900 rounded-xl flex flex-col h-full text-white hover:translate-y-[-5px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 transition duration-300">
            <header className="flex items-center justify-between mb-14 text-blue-500">
                      <svg
  width="50"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#A855F7"   // <-- هنا لون البنفسجي
  strokeWidth="1"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <title>Folder</title>
  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
</svg>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/BilalEdoor/weather-journal-app.git"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:brightness-125 transition"
                >
                  <img
                    src={githubIcon}
                    alt="GitHub"
                    className="w-12 filter invert"
                  />
                </a>
                <a
                  href="https://github.com/BilalEdoor/weather-journal-app.git"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:brightness-125 transition"
                >
                  <img
                    src={externalLink}
                    alt="Visit site"
                    className="w-12 filter invert"
                  />
                </a>
              </div>
            </header>
            <div className="flex-grow">
              <h3 className="mb-8 text-xl font-semibold text-purple-500">
                Whether journal app
              </h3>
              <p className="mb-8 tracking-wide">
                The Weather Journal app uses Node.js and Express APIs to fetch
                historical weather data using user input in an interactive
                interface.
              </p>
            </div>
            <footer>
              <ul className="flex items-center gap-8 text-lg opacity-60">
                <li>Node js</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Card 5 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="p-8 bg-gray-900 rounded-xl flex flex-col h-full text-white hover:translate-y-[-5px] hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 transition duration-300">
            <header className="flex items-center justify-between mb-14 text-blue-500">
             <svg
  width="50"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#A855F7"   // <-- هنا لون البنفسجي
  strokeWidth="1"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <title>Folder</title>
  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
</svg>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/BilalEdoor/FEND-Capstone-travel-app.git"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:brightness-125 transition"
                >
                  <img
                    src={githubIcon}
                    alt="GitHub"
                    className="w-12 filter invert"
                  />
                </a>
                <a
                  href="https://github.com/BilalEdoor/FEND-Capstone-travel-app.git"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:brightness-125 transition"
                >
                  <img
                    src={externalLink}
                    alt="Visit site"
                    className="w-12 filter invert"
                  />
                </a>
              </div>
            </header>
            <div className="flex-grow">
              <h3 className="mb-8 text-xl font-semibold text-purple-500">
                Capstone travel app
              </h3>
              <p className="mb-8 tracking-wide">
                A frontend capstone project that builds a travel app,
                integrating APIs to fetch weather, location, and trip details
                for a dynamic user experience.
              </p>
            </div>
            <footer>
              <ul className="flex items-center gap-8 text-lg opacity-60">
                <li>Node js</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
