import { MapPin, Phone, Clock, Navigation, Sparkles } from "lucide-react";

export default function LocationContact() {
  const addressString = "174, GT Rd, near ICICI Bank, Shivpuri, Khatauli, Uttar Pradesh 251201";
  const encodedAddress = encodeURIComponent("Bake Studio By Nandi's, " + addressString);
  const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  const embedMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3488.583921820468!2d77.7423528!3d29.0728956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c649987ad0419%3A0x6b2b73ec48aa33bd!2sKhatauli%2C%20Uttar%20Pradesh%20251201!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin`;

  return (
    <section id="contact" className="py-20 bg-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EBE0] border border-[#D4AF37]/30 text-[#3D2314] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Find Us in Khatauli</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#2C180B] tracking-tight mb-4">
            Location &amp; Contact
          </h2>
          <p className="text-base sm:text-lg text-[#4A2E19]/80">
            Visit our warm bakery in Shivpuri, Khatauli or give us a call for immediate assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#FFFDF9] p-8 rounded-3xl border border-[#E5BA42]/30 shadow-bakery flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#2C180B] mb-6 border-b border-[#4A2E19]/10 pb-4">
                Bakery Details
              </h3>

              <div className="space-y-6 mb-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#2C180B] text-base mb-1">
                      Our Address
                    </h4>
                    <p className="text-sm text-[#4A2E19]/80 leading-relaxed">
                      {addressString}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#2C180B] text-base mb-1">
                      Phone Number
                    </h4>
                    <a
                      href="tel:06399303303"
                      className="text-base font-bold text-[#D4AF37] hover:underline"
                    >
                      063993 03303
                    </a>
                    <span className="block text-xs text-[#4A2E19]/70">
                      Tap to call directly
                    </span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#2C180B] text-base mb-1">
                      Business Hours
                    </h4>
                    <p className="text-sm font-semibold text-[#2C180B]">
                      Monday – Sunday: <span className="text-[#D4AF37]">Open till 10:00 PM</span>
                    </p>
                    <span className="text-xs text-[#4A2E19]/70">
                      Fresh batches baked every morning &amp; afternoon
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <a
                href={mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm text-[#2C180B] bg-gradient-to-r from-[#E5BA42] via-[#D4AF37] to-[#C59B27] hover:brightness-105 shadow-md transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
              </a>
              <a
                href="tel:06399303303"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-sm text-[#3D2314] border border-[#3D2314]/20 hover:bg-[#3D2314] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call 063993 03303</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7 bg-[#FFFDF9] rounded-3xl border border-[#E5BA42]/30 shadow-bakery overflow-hidden min-h-[380px] relative">
            <iframe
              title="Bake Studio By Nandi's Google Map Location"
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
