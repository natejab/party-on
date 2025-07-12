
import React from "react";


const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow p-4 mb-4 ${className}`}>{children}</div>
);
const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);
const Button = ({ children, className = "" }) => (
  <button className={`bg-red-500 hover:bg-red-600 text-white p-2 rounded ${className}`}>{children}</button>
);

import { Mail, MapPin } from "lucide-react";


export default function PartyOnWebsite() {
  return (
    <div className="bg-cyan-100 min-h-screen text-gray-800">
      {/* Header */}
      <header className="bg-cyan-100 py-6 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Party On!</h1>
          <nav className="space-x-6">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Home */}
      <section id="home" className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-semibold mb-6">Welcome to Party On!</h2>
        <p className="text-lg mb-4 max-w-2xl">
          Staten Island’s favorite event space for every occasion — birthdays, holidays,
          business events, and more! Make memories and support a good cause while you're at it.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Birthday', 'Superbowl', 'Christmas', 'Easter'].map(event => (
            <img
              key={event}
              src={`/${event}.jpg`}
              alt={`${event} party`}
              className="rounded-2xl shadow-md object-cover h-40 w-full"
            />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-cyan-100 py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg max-w-3xl">
            Party On! provides a cozy, flexible space for all kinds of gatherings — from Super Bowl parties to
            bridal showers. Plus, we proudly donate a portion of every reservation to Lou’s Helping Hand Foundation.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Birthday Parties",
            "Super Bowl Parties",
            "Christmas and Easter Celebrations",
            "Graduation Parties",
            "Bridal or Baby Showers",
            "Business Meetings",
            "Pop-Up Shops",
            "Private Events"
          ].map(service => (
            <Card key={service} className="shadow-md">
              <CardContent className="p-4 text-lg font-medium">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-cyan-100 py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5" /> partyonstatenisland@gmail.com
          </p>
          <p className="text-lg mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5" /> 475 Belfield Ave, Staten Island, NY 10312
          </p>
          <p className="text-lg mb-6">Phone: 718-966-3121</p>

          <form className="grid grid-cols-1 gap-4 max-w-xl">
            <input className="p-2 rounded border" type="text" placeholder="Your Name" required />
            <input className="p-2 rounded border" type="email" placeholder="Your Email" required />
            <textarea className="p-2 rounded border" rows="4" placeholder="Your Message"></textarea>
            <Button type="submit" className="bg-red-500 hover:bg-red-600 text-white">Send Message</Button>
          </form>

 {/* Instagram Follow Section */}
    <div className="mt-8 flex items-center gap-4">
      <p className="text-lg">Follow us on Instagram:</p>
      <a
        href="https://instagram.com/partyonstatenisland"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 font-semibold hover:underline"
      >
        @partyonstatenisland
      </a>
    </div>

          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.913230624066!2d-74.19080262345088!3d40.54366055168467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24e5cbfac67c7%3A0x5d542204b0c9e5e7!2s475%20Belfield%20Ave%2C%20Staten%20Island%2C%20NY%2010312!5e0!3m2!1sen!2sus!4v1720000000000"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl shadow-md"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-200 py-6 mt-12 text-center text-sm">
        <p>© {new Date().getFullYear()} Party On! | A portion of every reservation is donated to Lou’s Helping Hand Foundation.</p>
      </footer>
    </div>
  );
}
