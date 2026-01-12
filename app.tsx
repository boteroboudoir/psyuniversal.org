import React, { useState } from "react";

export default function UPS_MainMenuIntro() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services'>('home');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');

        html, body {
          margin: 0;
          padding: 0;
        }

        * {
          font-family: 'Nanum Myeongjo', Georgia, 'Times New Roman', serif;
        }
      `}</style>

      <div className="min-h-screen bg-[#FBFAFD] text-slate-800 p-6 relative">
        <header className="w-screen py-6 px-6 bg-[#9D8DEB] shadow-sm flex items-center justify-center relative left-1/2 right-1/2 -mx-[50vw]">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-center">
            Universal Psychological Services
          </h1>

          <div className="absolute right-6 top-6 select-none">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-base font-semibold px-4 py-2 rounded-md bg-transparent transition"
            >
              Menu ▾
            </button>

            <div
              className={`absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 origin-top ${
                menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <button onClick={() => { setCurrentPage('home'); setMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-sm hover:bg-slate-100 font-semibold">Home</button>
              <button onClick={() => { setCurrentPage('services'); setMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-sm hover:bg-slate-100 font-semibold">Services</button>
              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-slate-100 font-semibold">Meet Our Staff</button>
              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-slate-100 font-semibold">FAQ</button>
              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-slate-100 font-semibold">About Us</button>
              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-slate-100 font-semibold">Contact Us</button>
            </div>
          </div>
        </header>

        {currentPage === 'home' && (
          <>
            <section className="w-full mt-10 text-center bg-[#9DC7F4] py-10 px-6 rounded-2xl shadow-sm">
              <div className="max-w-3xl mx-auto p-6">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide">
                  Where You Matter.
                </h2>

                <p className="mt-3 text-lg font-semibold tracking-wide">
                  Private – Professional – Personal
                </p>

                <p className="mt-4 text-base font-medium tracking-wide text-slate-700">
                  Welcome to Universal Psychological Services, where each client matters. Here, we value and provide unique therapeutic experiences for all.
                </p>
              </div>
            </section>

            <section className="w-full mt-16 mb-10 text-center bg-[#E8F2FF] py-14 px-6 rounded-2xl shadow-sm">
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Book an Appointment Now!
              </h2>

              <p className="mt-3 text-lg font-semibold">
                Make a booking with our online form:
              </p>

              <form
                action="mailto:naharahake@gmail.com"
                method="POST"
                encType="text/plain"
                className="max-w-2xl mx-auto mt-8 space-y-4 text-left"
              >
                <input type="text" name="First Name" placeholder="First Name" className="w-full p-3 rounded-lg border border-slate-300" required />
                <input type="text" name="Last Name" placeholder="Last Name" className="w-full p-3 rounded-lg border border-slate-300" required />
                <input type="email" name="Email" placeholder="Email" className="w-full p-3 rounded-lg border border-slate-300" required />
                <input type="tel" name="Phone Number" placeholder="Phone Number" className="w-full p-3 rounded-lg border border-slate-300" required />
                <textarea name="Message" placeholder="Optional Message" className="w-full p-3 rounded-lg border border-slate-300 h-28" />
                <button type="submit" className="w-full bg-[#9D8DEB] hover:bg-[#8A7AD9] text-white font-bold py-3 rounded-xl transition">
                  Get in Touch
                </button>
              </form>
            </section>
          </>
        )}

        {currentPage === 'services' && (
          <section className="w-full mt-14 px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
              Our Services
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="rounded-2xl p-8 bg-[#FADADD]">
                <h3 className="text-xl font-extrabold mb-2">Drug and Alcohol Abuse</h3>
                <p className="font-semibold">At Universal Psychological Services LLC, we offer outpatient treatment services to those suffering from the disease of addiction. We strive to empower our clients as they learn to manage their struggles.</p>
              </div>

              <div className="rounded-2xl p-8 bg-[#E6F4F1]">
                <h3 className="text-xl font-extrabold mb-2">Parent–School Consultation</h3>
                <p className="font-semibold">Empirical evidence shows that family engagement in education matters for student success. Family engagement improves school readiness, student achievement, and social skills. We offer parent–teacher consultation services to bolster student success through communication.</p>
              </div>

              <div className="rounded-2xl p-8 bg-[#FFF1C1]">
                <h3 className="text-xl font-extrabold mb-2">Executive Function Coaching</h3>
                <p className="font-semibold">We provide therapeutic support for children, adolescents, and adults to enhance executive functioning—a key skill set essential to optimal performance across life domains.</p>
              </div>

              <div className="rounded-2xl p-8 bg-[#E9E4FF]">
                <h3 className="text-xl font-extrabold mb-2">Psychological Evaluations</h3>
                <p className="font-semibold">Grounded in psychological theory and family systems, our assessments focus on understanding individual functioning within relational contexts.</p>
              </div>

              <div className="rounded-2xl p-8 bg-[#EAF7D9]">
                <h3 className="text-xl font-extrabold mb-2">Neuropsychological Evaluations</h3>
                <p className="font-semibold">We collaborate closely with clients to understand behavioral, cognitive, and emotional patterns through comprehensive neuropsychological evaluation.</p>
              </div>

              <div className="rounded-2xl p-8 bg-[#FFE6F2]">
                <h3 className="text-xl font-extrabold mb-2">Forensic Evaluations for Family Court Custody Cases</h3>
                <p className="font-semibold">Our evaluations consider life transitions, chronic illness, identity, and belief systems as they relate to custody and family court matters.</p>
              </div>

              <div className="rounded-2xl p-8 bg-[#E3F0FF]">
                <h3 className="text-xl font-extrabold mb-2">Play Therapy</h3>
                <p className="font-semibold">Play therapy helps explore emotional development and early experiences, particularly supporting children and adolescents.</p>
              </div>

              <div className="rounded-2xl p-8 bg-[#FFF6E5]">
                <h3 className="text-xl font-extrabold mb-2">Biofeedback</h3>
                <p className="font-semibold">Our specialists provide biofeedback services and are happy to offer second opinions to support informed care.</p>
              </div>

              <div className="rounded-2xl p-8 bg-[#EDEDED]">
                <h3 className="text-xl font-extrabold mb-2">Cognitive Rehabilitation</h3>
                <p className="font-semibold">Cognitive rehabilitation views healthcare as a comprehensive psychological process focused on understanding and recovery.</p>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
