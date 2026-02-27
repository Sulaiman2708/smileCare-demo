import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Stethoscope, 
  Smile, 
  Drill, 
  Crown, 
  Baby, 
  Phone, 
  MapPin, 
  Mail,
  CheckCircle2,
  CalendarCheck
} from "lucide-react";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      {/* HERO SECTION */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0 opacity-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-primary font-medium text-sm mb-6">
                <Sparkles className="w-4 h-4" /> New Patients Welcome
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-slate-900">
                Confident Smiles <span className="text-primary block">Start Here.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Experience painless, advanced dental care in a relaxing environment. 
                Our expert team is dedicated to giving you the smile you deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full h-14 px-8 text-lg shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                  Book Appointment
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg border-2" onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
                  View Services
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-8">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                       {/* Stock user avatars for social proof */}
                       <img 
                        src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=100&h=100&fit=crop`} 
                        alt="Patient" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400">★★★★★</div>
                  <p className="text-sm font-medium text-slate-600">5000+ Happy Patients</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform translate-x-10 translate-y-10"></div>
              {/* Dental clinic hero image: smiling woman at dentist */}
              <img 
                src="https://img.freepik.com/free-photo/male-professional-dentist-with-gloves-mask-discuss-what-treatment-will-look-like-patient-s-teeth_158595-7630.jpg?semt=ais_hybrid&w=740&q=80" 
                alt="Happy patient smiling" 
                className="relative rounded-3xl shadow-2xl object-cover h-[600px] w-full"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <CalendarCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Easy Booking</p>
                    <p className="text-xs text-slate-500">24/7 Online Support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ABOUT SECTION */}
      <section id="about" className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              {/* Dentist Portrait */}
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-primary/20 rounded-3xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Dr. Raj Mehta" 
                  className="rounded-2xl shadow-lg w-full h-[500px] object-cover relative z-10"
                />
              </div>
            </motion.div>
            <motion.div {...fadeIn}>
              <h2 className="text-primary font-semibold tracking-wide uppercase mb-3 text-sm">About The Doctor</h2>
              <h3 className="text-4xl font-bold mb-6 text-slate-900">Meet Dr. Raj Mehta</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                With over 12 years of experience and a passion for crafting beautiful smiles, Dr. Mehta (BDS, MDS) is one of the leading dental specialists in the region. 
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                His approach combines state-of-the-art technology with a gentle, patient-first philosophy. Whether it's a routine checkup or a complex smile makeover, you are in expert hands.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">12+ Years</h4>
                    <p className="text-sm text-slate-500">Experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">5000+</h4>
                    <p className="text-sm text-slate-500">Happy Patients</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">Certified</h4>
                    <p className="text-sm text-slate-500">Dental Specialist</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">Advanced</h4>
                    <p className="text-sm text-slate-500">Technology</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* SERVICES SECTION */}
      <section id="services" className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wide uppercase mb-3 text-sm">Our Services</h2>
            <h3 className="text-4xl font-bold mb-4 text-slate-900">Comprehensive Dental Care</h3>
            <p className="text-slate-600 text-lg">
              We offer a full range of dental treatments to ensure your smile stays healthy and beautiful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Teeth Whitening" 
              description="Restore the natural brightness of your teeth with our advanced laser whitening treatments."
              icon={Sparkles}
              delay={0.1}
            />
            <ServiceCard 
              title="Root Canal" 
              description="Painless root canal treatments using the latest rotary endodontic technology."
              icon={Drill}
              delay={0.2}
            />
            <ServiceCard 
              title="Dental Implants" 
              description="Permanent solutions for missing teeth that look, feel, and function like natural teeth."
              icon={Crown}
              delay={0.3}
            />
            <ServiceCard 
              title="Braces & Aligners" 
              description="Straighten your teeth with invisible aligners or traditional ceramic braces."
              icon={Smile}
              delay={0.4}
            />
            <ServiceCard 
              title="Smile Makeover" 
              description="Complete aesthetic transformation of your smile using veneers and cosmetic bonding."
              icon={Stethoscope}
              delay={0.5}
            />
            <ServiceCard 
              title="Kids Dentistry" 
              description="Specialized pediatric care ensuring your child's dental visit is fun and fear-free."
              icon={Baby}
              delay={0.6}
            />
          </div>
        </div>
      </section>
      {/* GALLERY / BEFORE AFTER SECTION */}
      <section id="gallery" className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wide uppercase mb-3 text-sm">Real Results</h2>
            <h3 className="text-4xl font-bold mb-4 text-slate-900">Before & After Gallery</h3>
            <p className="text-slate-600 text-lg">
              See the transformative power of our treatments on real patients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Gallery Image 1 - Teeth whitening result */}
            <motion.div 
              {...fadeIn}
              className="group relative overflow-hidden rounded-2xl shadow-lg aspect-video"
            >
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop"
                alt="Bright smile after whitening" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <p className="text-white font-medium text-lg">Teeth Whitening</p>
              </div>
            </motion.div>
            
            {/* Gallery Image 2 - Perfect alignment */}
            <motion.div 
              {...fadeIn}
              className="group relative overflow-hidden rounded-2xl shadow-lg aspect-video"
            >
              <img 
                src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=800&auto=format&fit=crop"
                alt="Perfectly aligned teeth" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <p className="text-white font-medium text-lg">Invisalign Treatment</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section id="testimonials" className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wide uppercase mb-3 text-sm">Testimonials</h2>
            <h3 className="text-4xl font-bold mb-4 text-slate-900">What Our Patients Say</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Sarah Jenkins"
              role="Teacher"
              content="I was terrified of dentists until I met Dr. Mehta. The entire procedure was painless and the results are amazing!"
            />
            <TestimonialCard 
              name="Michael Chen"
              role="Software Engineer"
              content="State of the art facility and extremely professional staff. Got my root canal done here and recovered in no time."
            />
            <TestimonialCard 
              name="Priya Sharma"
              role="Architect"
              content="Best dental clinic in the city. The invisalign treatment changed my smile completely. Highly recommended!"
            />
          </div>
        </div>
      </section>
      {/* CONTACT SECTION */}
      <section id="contact" className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <h2 className="text-primary font-semibold tracking-wide uppercase mb-3 text-sm">Get In Touch</h2>
              <h3 className="text-4xl font-bold mb-6 text-slate-900">Book Your Visit Today</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Ready to transform your smile? Fill out the form or contact us directly. We are open Monday to Saturday, 9:00 AM to 7:00 PM.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phone</h4>
                    <p className="text-slate-600">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <p className="text-slate-600">contact@smilecare.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Location</h4>
                    <p className="text-slate-600">123 Health Park, Medical District, City - 400001</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Chat on WhatsApp
              </a>
            </motion.div>

            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
            >
              <ContactForm />
            </motion.div>
          </div>
          
          {/* Map placeholder */}
          <div className="mt-16 rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-[300px] w-full bg-slate-100 flex items-center justify-center text-slate-400">
             <div className="text-center">
               <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
               <p>Google Maps Embed would go here</p>
             </div>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
             <div className="bg-white/10 p-2 rounded-lg">
                <Smile className="w-6 h-6 text-white" />
             </div>
             <span className="text-2xl font-bold text-white">SmileCare</span>
          </div>
          <p className="mb-6 max-w-md mx-auto">Your smile is our priority. Visit us for the best dental care experience in the city.</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-sm opacity-50">
            © {new Date().getFullYear()} SmileCare Dental Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
