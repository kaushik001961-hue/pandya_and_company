export default function WhyChooseAbout() {

  const items = [
    "Experienced Professionals",
    "Fast Processing",
    "Transparent Service",
    "Personalized Advice",
    "Trusted Banking Network",
    "Complete CA Solutions",
  ];

  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl text-white font-bold text-center">
          Why Choose Pandya & Company
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-12">

          {items.map((item) => (
            <div
              key={item}
              className="bg-slate-900 rounded-2xl p-6 text-white"
            >
              ✓ {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}