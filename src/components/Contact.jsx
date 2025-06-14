import emailIcon from "../assets/email-icon.svg";
import phoneIcon from "../assets/phone-icon.svg";
import { Form } from "./Form";

export function Contact() {
  return (
    <section id="contact" className="mt-40">
    <header className="text-center">
  <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
    Contact
  </h2>
  <p className="text-white ">
    Ready to get started on your project?
  </p>
  <p className="text-white font-bold">
    Contact me now for a Free consultation.
  </p>
</header>



      <div className="contacts flex items-center justify-center gap-8 mt-6 flex-wrap md:flex-nowrap">
        {/* Email Box */}
        <div className="flex items-center justify-center w-full md:w-1/2 max-w-[30rem] gap-8 rounded-[1.4rem] px-7 py-6 cursor-pointer
          bg-gradient-to-r from-pink-500 to-purple-500
          hover:from-pink-600 hover:to-purple-600
          transition-colors duration-200"
        >
          <a
            href="mailto:belaledoor25@gmail.com"
            onClick={(e) => {
              e.preventDefault();
              const gmailUrl =
                "https://mail.google.com/mail/?view=cm&fs=1&to=belaledoor25@gmail.com";
              window.open(gmailUrl, "_blank");
            }}
          >
            <img src={emailIcon} alt="Email" className="w-16" />
          </a>
          <a
            href="mailto:belaledoor25@gmail.com"
            onClick={(e) => {
              e.preventDefault();
              const gmailUrl =
                "https://mail.google.com/mail/?view=cm&fs=1&to=belaledoor25@gmail.com";
              window.open(gmailUrl, "_blank");
            }}
            className="text-white font-medium hover:text-purple-300 transition-colors duration-200"
          >
            belaledoor25@gmail.com
          </a>
        </div>

        {/* Phone Box */}
        <div className="flex items-center justify-center w-full md:w-1/2 max-w-[30rem] gap-8 rounded-[1.4rem] px-7 py-6 cursor-pointer
          bg-gradient-to-r from-pink-500 to-purple-500
          hover:from-pink-600 hover:to-purple-600
          transition-colors duration-200"
        >
          <a href="tel:+970568033525">
            <img src={phoneIcon} alt="Phone No" className="w-16" />
          </a>
          <a
            href="tel:+970568033525"
            className="text-white font-medium hover:text-purple-300 transition-colors duration-200"
          >
            (+970) 568033525
          </a>
        </div>
      </div>
      <Form />
    </section>
  );
}
