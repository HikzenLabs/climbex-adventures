import { useState } from "react";

import { motion } from "motion/react";

import emailjs from "@emailjs/browser";

import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
  User,
} from "lucide-react";

export function Contact() {

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      trek: "",
      message: "",
    });

  const sendEmail = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setLoading(true);

    try {

      await emailjs.send(
        "YOUR_SERVICE_ID",

        "YOUR_TEMPLATE_ID",

        {
          name: formData.name,

          email: formData.email,

          phone: formData.phone,

          trek: formData.trek,

          message: formData.message,
        },

        "YOUR_PUBLIC_KEY"
      );

      alert(
        "Message sent successfully!"
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        trek: "",
        message: "",
      });

    } catch (error) {

      console.error(error);

      alert(
        "Failed to send message."
      );
    }

    setLoading(false);
  };

  const contactInfo = [
    {
      icon: Phone,

      title: "Phone",

      content: "+91 1234567890",

      link: "tel:+911234567890",
    },

    {
      icon: Mail,

      title: "Email",

      content: "info@climbexadventures.com",

      link:
        "mailto:info@climbexadventures.com",
    },

    {
      icon: MapPin,

      title: "Location",

      content:
        "Srinagar, Kashmir, India",

      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: MessageCircle,

      name: "WhatsApp",

      link: "https://wa.me/1234567890",

      color:
        "from-[#25D366] to-[#128C7E]",
    },

    {
      icon: Instagram,

      name: "Instagram",

      link:
        "https://instagram.com/climbexadventures",

      color:
        "from-[#E1306C] to-[#C13584]",
    },

    {
      icon: Facebook,

      name: "Facebook",

      link:
        "https://facebook.com/climbexadventures",

      color:
        "from-[#1877F2] to-[#0C63D4]",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-[#0B1F33] relative overflow-hidden">

      {/* GLOW EFFECTS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#7DD3FC]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#FB923C]/10 blur-[120px] rounded-full" />

      {/* HERO */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">

        <div className="max-w-5xl mx-auto text-center">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.6,
            }}
          >

            <p className="text-[#7DD3FC] uppercase tracking-[4px] text-sm mb-4">

              Contact Us
            </p>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">

              Get in{" "}

              <span className="text-[#7DD3FC]">
                Touch
              </span>
            </h1>

            <p className="text-white/60 text-lg mt-6 max-w-2xl mx-auto">

              Have questions about a trek or want to customize your adventure?
              We’re here to help you plan the perfect Kashmir experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">

        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-10">

          {/* FORM */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-6 md:p-10"
          >

            <h2 className="text-3xl font-bold text-white mb-3">

              Send Us a Message
            </h2>

            <p className="text-white/60 mb-10">

              Fill out the form below and we’ll get back to you shortly.
            </p>

            <form
              onSubmit={sendEmail}

              className="space-y-6"
            >

              {/* NAME */}
              <div>

                <label className="block text-sm text-white/50 mb-3">

                  Full Name
                </label>

                <div className="relative">

                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />

                  <input
                    type="text"
                    name="name"

                    value={formData.name}

                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }

                    required

                    placeholder="Your Name"

                    className="w-full pl-12 px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 outline-none focus:border-[#7DD3FC] focus:ring-2 focus:ring-[#7DD3FC]/40"
                  />
                </div>
              </div>

              {/* EMAIL + PHONE */}
              <div className="grid md:grid-cols-2 gap-5">

                <div>

                  <label className="block text-sm text-white/50 mb-3">

                    Email
                  </label>

                  <div className="relative">

                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />

                    <input
                      type="email"
                      name="email"

                      value={formData.email}

                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }

                      required

                      placeholder="you@example.com"

                      className="w-full pl-12 px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 outline-none focus:border-[#7DD3FC] focus:ring-2 focus:ring-[#7DD3FC]/40"
                    />
                  </div>
                </div>

                <div>

                  <label className="block text-sm text-white/50 mb-3">

                    Phone
                  </label>

                  <div className="relative">

                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />

                    <input
                      type="tel"
                      name="phone"

                      value={formData.phone}

                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }

                      required

                      placeholder="+91 1234567890"

                      className="w-full pl-12 px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 outline-none focus:border-[#7DD3FC] focus:ring-2 focus:ring-[#7DD3FC]/40"
                    />
                  </div>
                </div>
              </div>

              {/* TREK */}
              <div>

                <label className="block text-sm text-white/50 mb-3">

                  Interested In
                </label>

                <select
                  value={formData.trek}

                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      trek: e.target.value,
                    })
                  }

                  className="w-full bg-[#071018] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-[#7DD3FC] focus:ring-2 focus:ring-[#7DD3FC]/40"
                >

                  <option value="">
                    Select
                  </option>

                  <option>
                    Trek
                  </option>

                  <option>
                    Trip
                  </option>

                  <option>
                    Expedidtion
                  </option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>

                <label className="block text-sm text-white/50 mb-3">

                  Message
                </label>

                <textarea
                  rows={5}

                  value={formData.message}

                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }

                  placeholder="Tell us about your adventure plans..."

                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-3xl text-white placeholder-white/30 outline-none focus:border-[#7DD3FC] focus:ring-2 focus:ring-[#7DD3FC]/40 resize-none"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"

                disabled={loading}

                className="w-full py-5 bg-gradient-to-r from-[#FB923C] to-[#F97316] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-[#FB923C]/50 transition-all duration-300 hover:scale-[1.01]"
              >

                {loading
                  ? "Sending..."
                  : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            className="space-y-8"
          >

            {/* CONTACT INFO */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8">

              <h2 className="text-3xl font-bold text-white mb-8">

                Contact Information
              </h2>

              <div className="space-y-5">

                {contactInfo.map((info) => (

                  <a
                    key={info.title}

                    href={info.link}

                    className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-3xl p-5 hover:bg-white/10 hover:border-[#7DD3FC]/40 transition-all duration-300"
                  >

                    <div className="w-14 h-14 rounded-2xl bg-[#7DD3FC]/20 flex items-center justify-center">

                      <info.icon className="w-6 h-6 text-[#7DD3FC]" />
                    </div>

                    <div>

                      <h3 className="text-white font-semibold mb-1">

                        {info.title}
                      </h3>

                      <p className="text-white/60 text-sm">

                        {info.content}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* SOCIALS */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8">

              <h2 className="text-3xl font-bold text-white mb-8">

                Follow Us
              </h2>

              <div className="space-y-4">

                {socialLinks.map((social) => (

                  <a
                    key={social.name}

                    href={social.link}

                    target="_blank"

                    rel="noopener noreferrer"

                    className={`flex items-center gap-4 bg-gradient-to-r ${social.color} px-6 py-5 rounded-2xl text-white font-medium hover:scale-[1.02] transition-all duration-300`}
                  >

                    <social.icon className="w-6 h-6" />

                    <span>
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            
            
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-10 pt-2">

          {/* WHATSAPP */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-6 md:p-10 space-y-10"
          >

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8">

              <h2 className="text-3xl font-bold text-white mb-4">

                Quick Support
              </h2>

              <p className="text-white/60 mb-6">

                Need an instant reply? Chat with us directly on WhatsApp.
              </p>

              <a
                href="https://wa.me/1234567890"

                target="_blank"

                rel="noopener noreferrer"

                className="flex items-center justify-center gap-3 w-full py-5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold text-lg hover:scale-[1.01] transition-all duration-300 shadow-lg hover:shadow-[#25D366]/40"
              >

                <MessageCircle className="w-5 h-5" />

                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

           {/* Hikzen */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            className="space-y-8"
          >

                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8">

  <h2 className="text-3xl font-bold text-white mb-4">

    Need Software Solutions?
  </h2>

  <p className="text-white/60 mb-6 leading-relaxed">

    Looking for a modern website, mobile app, custom software,
    or digital solutions for your business? Our technology partner
    HikzenLabs builds scalable and high-performance digital products.
  </p>

  <a
    href="https://www.hikzenlabs.com"

    target="_blank"

    rel="noopener noreferrer"

    className="flex items-center justify-center gap-3 w-full py-5 rounded-full bg-gradient-to-r from-[#7DD3FC] to-[#0EA5E9] text-white font-semibold text-lg hover:scale-[1.01] transition-all duration-300 shadow-lg hover:shadow-[#7DD3FC]/40"
  >

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L21 3m0 0h-3.75M21 3v3.75M10.5 3H6.75A2.25 2.25 0 004.5 5.25v12.5A2.25 2.25 0 006.75 20h12.5a2.25 2.25 0 002.25-2.25V13.5"
      />
    </svg>

    Visit HikzenLabs
  </a>
</div>

            
            
          </motion.div>
        </div>







        {/* MAP */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          className="max-w-7xl mx-auto mt-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-6 md:p-10"
        >

          <h2 className="text-3xl font-bold text-white mb-8 text-center">

            Our{" "}

            <span className="text-[#7DD3FC]">
              Location
            </span>
          </h2>

          <div className="p-3 rounded-3xl overflow-hidden border border-white/10 bg-white/5">

            <div className="relative h-[350px] md:h-[500px] rounded-3xl overflow-hidden">

              <iframe
                src="https://embed.waze.com/iframe?zoom=16&lat=34.083671&lon=74.797282&ct=livemap"

                width="100%"

                height="100%"

                style={{
                  border: 0,
                }}

                allowFullScreen

                loading="lazy"

                referrerPolicy="no-referrer-when-downgrade"

                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}