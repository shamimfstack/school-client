

import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle";
// import Tilt from "react-parallax-tilt";
import emailjs from '@emailjs/browser'


const Contact = () => {
  const handleSendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_814kl4j', 'template_k950ebn', e.target, 'CTW9-unA3HWxnKfGP')
  }

  return (
    <div>
        <Helmet>
            <title>contact me</title>
        </Helmet>
        <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/fpXXTdz/home-bg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="pt-12">
            {/* <Tilt> */}
              {/* <div className="flex justify-center items-center"> */}
                <SectionTitle heading={"Contact Me"}></SectionTitle>
              {/* </div> */}
            {/* </Tilt> */}

            <div className="mt-8 w-1/2 mx-auto py-10">
              <form onSubmit={handleSendEmail}>
                <input className="border p-1 mb-2 w-full rounded-md bg-transparent" type="text" name="name" id="name" placeholder="name" />
                <input className="border p-1 mb-2 w-full rounded-md bg-transparent" type="text" name="email_from" id="email" placeholder="email" />
                <textarea className="border p-1 mb-2 w-full rounded-md bg-transparent resize-none" type="true" name="message" id="message" cols="30" rows="6" placeholder="your message"></textarea>
                <input type="submit" className="btn btn-info btn-sm btn-block" value="Send Message"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

