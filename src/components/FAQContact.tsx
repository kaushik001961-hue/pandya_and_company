export default function FAQContact() {

  const faqs = [
    "How quickly will you respond?",
    "Do you provide free consultation?",
    "Which banks do you work with?",
  ];

  return (
    <section className="py-20 bg-slate-950">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl text-white text-center font-bold">
          Quick Questions
        </h2>

        <div className="mt-12 space-y-5">

          {faqs.map((faq) => (
            <div
              key={faq}
              className="bg-slate-900 rounded-2xl p-6 text-white"
            >
              {faq}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}