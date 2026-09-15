export function CtaSection (){

  return (
    <section className="relative py-24 px-4 overflow-hidden">

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('d:\workspace\HikzenLabs\images\kolahoi_home_pic.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-[#071018]/80 backdrop-blur-sm" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Ready For Your
            <span className="text-[#7DD3FC]">
              {" "}Next Adventure?
            </span>
          </h2>

          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            Join hundreds of adventurers discovering Kashmir’s untouched beauty.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

            <a
              href="https://wa.me/9797843568"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold"
            >
              WhatsApp Us
            </a>

            <a
              href="https://www.instagram.com/climbexadventures/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#E1306C] to-[#C13584] text-white font-semibold"
            >
              Follow Instagram
            </a>
          </div>
        </div>
      </section>
  )
}