import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, MessageCircle } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    trek: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi! I'm ${formData.name}. I'm interested in ${formData.trek || "trekking with Kashmir Adventures"}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
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
      content: "info@kashmirtrek.com",
      link: "mailto:info@kashmirtrek.com",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Srinagar, Kashmir, India",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: MessageCircle,
      name: "WhatsApp",
      link: "https://wa.me/1234567890",
      color: "from-[#25D366] to-[#128C7E]",
    },
    {
      icon: Instagram,
      name: "Instagram",
      link: "https://instagram.com",
      color: "from-[#E1306C] to-[#C13584]",
    },
    {
      icon: Facebook,
      name: "Facebook",
      link: "https://facebook.com",
      color: "from-[#1877F2] to-[#0C63D4]",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F33]/90 via-[#0B1F33]/85 to-[#0B1F33]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="text-[#7DD3FC]">Touch</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Have questions about a trek? Want to customize your adventure? We're here to help plan
              your perfect Kashmir experience.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B1F33]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <p className="text-white/60 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. You can also
                reach us directly on WhatsApp for immediate assistance.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white text-sm mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#7DD3FC] transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#7DD3FC] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#7DD3FC] transition-colors"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm mb-2">Interested Trek</label>
                  <select
                    value={formData.trek}
                    onChange={(e) => setFormData({ ...formData, trek: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#7DD3FC] transition-colors"
                  >
                    <option value="" className="bg-[#0B1F33]">
                      Select a trek
                    </option>
                    <option value="Great Lakes Trek" className="bg-[#0B1F33]">
                      Great Lakes Trek
                    </option>
                    <option value="Tarsar Marsar Trek" className="bg-[#0B1F33]">
                      Tarsar Marsar Trek
                    </option>
                    <option value="Kashmir Alpine Trek" className="bg-[#0B1F33]">
                      Kashmir Alpine Trek
                    </option>
                    <option value="Kolahoi Glacier Trek" className="bg-[#0B1F33]">
                      Kolahoi Glacier Trek
                    </option>
                    <option value="Custom Trek" className="bg-[#0B1F33]">
                      Custom Trek
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-white text-sm mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#7DD3FC] transition-colors resize-none"
                    placeholder="Tell us about your adventure plans..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#FB923C] to-[#F97316] text-white rounded-full font-semibold shadow-lg hover:shadow-[#FB923C]/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message via WhatsApp
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-white/60 mb-8">
                  Prefer to reach out directly? Here are all the ways you can connect with us.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group flex items-start gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#7DD3FC]/50 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-[#7DD3FC]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="w-6 h-6 text-[#7DD3FC]" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                        <p className="text-white/70 text-sm">{info.content}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Connect on Social Media</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className={`flex items-center gap-4 bg-gradient-to-r ${social.color} p-4 rounded-xl text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <social.icon className="w-6 h-6" />
                      <span>Follow us on {social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Quick Response</h3>
                <p className="text-white/70 mb-6">
                  Need immediate assistance? We're available on WhatsApp 24/7 for quick responses to
                  your trekking queries.
                </p>
                <motion.a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full font-semibold shadow-lg hover:shadow-[#25D366]/50 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Our <span className="text-[#7DD3FC]">Location</span>
            </h2>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211801.0992105449!2d74.6496109!3d34.0836708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1856e98a5bb63%3A0xd26d52e72f946c02!2sSrinagar%2C%20Jammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
