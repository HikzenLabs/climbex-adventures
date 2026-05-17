import { useState } from "react";

import emailjs from "@emailjs/browser";

export function CustomizeAdventureSection() {

  const [formData, setFormData] = useState({
    destination: "",
    adventureType: "",
    groupType: "",
    whatsapp: "",
    message: "",
  });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          destination:
            formData.destination,

          adventureType:
            formData.adventureType,

          groupType:
            formData.groupType,

          whatsapp:
            formData.whatsapp,

          message:
            formData.message,
        },

        "YOUR_PUBLIC_KEY"
      );

      alert(
        "Adventure request sent successfully!"
      );

      setFormData({
        destination: "",
        adventureType: "",
        groupType: "",
        whatsapp: "",
        message: "",
      });

    } catch (error) {

      console.error(error);

      alert(
        "Failed to send request."
      );
    }

    setLoading(false);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#7DD3FC]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#FB923C]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 lg:p-12 min-h-[700px] flex flex-col justify-between">

            {/* IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400"

              alt="Adventure"

              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-[#071018]/20 to-[#071018]" />

            <div className="relative z-10">

              <p className="text-[#7DD3FC] uppercase tracking-[4px] text-sm mb-4">

                Climbex Adventures
              </p>

              <h2 className="text-4xl md:text-6xl font-black leading-tight">

                Customize Your{" "}

                <span className="text-[#7DD3FC]">
                  Adventure
                </span>
              </h2>

              <p className="text-white/70 mt-6 text-lg leading-relaxed max-w-lg">

                Tell us your preferences and we’ll craft a journey tailored exactly for you.
              </p>
            </div>

            {/* FEATURES */}
            <div className="relative z-10 space-y-5 mt-12">

              <div className="flex gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-[#7DD3FC] text-xl">

                  🏔
                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    Tailor-made Itineraries
                  </h4>

                  <p className="text-white/60 text-sm mt-1">

                    Crafted around your interests and comfort.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-[#7DD3FC] text-xl">

                  🧭
                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    Local Expertise
                  </h4>

                  <p className="text-white/60 text-sm mt-1">

                    Guided by locals who know hidden gems.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-[#7DD3FC] text-xl">

                  🛡
                </div>

                <div>

                  <h4 className="font-semibold text-lg">
                    Safe & Hassle-Free
                  </h4>

                  <p className="text-white/60 text-sm mt-1">

                    Safety and comfort are always our priority.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form
            onSubmit={sendEmail}

            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-6 sm:p-10"
          >

            <h3 className="text-3xl font-black mb-10">

              Plan Your{" "}

              <span className="text-[#7DD3FC]">
                Perfect Adventure
              </span>
            </h3>

            <div className="grid sm:grid-cols-2 gap-5">

              {/* DESTINATION */}
              <div>

                <label className="block text-sm text-white/50 mb-3">

                  Destination
                </label>

                <input
                  type="text"
                  name="destination"
                  placeholder="Where do you want to go?"

                  value={formData.destination}

                  onChange={handleChange}

                  required

                  className="w-full bg-[#071018] text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#7DD3FC] appearance-none"
                />
              </div>

              {/* TYPE */}
              <div>

                <label className="block text-sm text-white/50 mb-3">

                  Trek / Travel / Expedition
                </label>

                <select
                  name="adventureType"

                  value={formData.adventureType}

                  onChange={handleChange}

                  required

                  className="w-full bg-[#071018] text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#7DD3FC] appearance-none"
                >

                  <option value="">
                    Select Type
                  </option>

                  <option value="Trek">
                    Trek
                  </option>

                  <option value="Travel">
                    Travel
                  </option>

                  <option value="Expedition">
                    Expedition
                  </option>
                </select>
              </div>

              {/* GROUP */}
              <div>

                <label className="block text-sm text-white/50 mb-3">

                  Group Type
                </label>

                <select
                  name="groupType"

                  value={formData.groupType}

                  onChange={handleChange}

                  required

                  className="w-full bg-[#071018] text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#7DD3FC] appearance-none"
                >

                  <option value="">
                    Select Group
                  </option>

                  <option value="Solo">
                    Solo
                  </option>

                  <option value="Couple">
                    Couple
                  </option>

                  <option value="Friends">
                    Friends
                  </option>

                  <option value="Group">
                    Group
                  </option>
                </select>
              </div>

              {/* WHATSAPP */}
              <div>

                <label className="block text-sm text-white/50 mb-3">

                  WhatsApp Number
                </label>

                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="Your Number"

                  value={formData.whatsapp}

                  onChange={handleChange}

                  required

                  className="w-full bg-[#071018] text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#7DD3FC] appearance-none"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="mt-5">

              <label className="block text-sm text-white/50 mb-3">

                Tell us what is on your mind
              </label>

              <textarea
                rows={5}
                name="message"

                placeholder="Describe your dream adventure..."

                value={formData.message}

                onChange={handleChange}

                required

                className="w-full bg-[#071018] text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-[#7DD3FC] appearance-none"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"

              disabled={loading}

              className="block w-full mt-8 text-center bg-gradient-to-r from-[#38BDF8] to-[#22D3EE] py-5 rounded-2xl font-semibold text-lg hover:scale-[1.01] transition-all duration-300 shadow-lg shadow-cyan-500/20 disabled:opacity-50"
            >

              {loading
                ? "Sending..."
                : "Plan My Adventure →"}
            </button>

            {/* FOOTER */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/50 text-sm">

              <span>✔ No Booking Fees</span>

              <span>✔ Best Price Guarantee</span>

              <span>✔ 24/7 Support</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}