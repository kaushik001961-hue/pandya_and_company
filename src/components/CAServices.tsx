export default function CAServices() {
  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl text-white font-bold">
          CA & Taxation Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="bg-slate-900 rounded-3xl p-8">
            <h3 className="text-2xl text-white font-bold">
              Income Tax
            </h3>

            <p className="text-slate-300 mt-4">
              ITR Filing, Tax Planning and Compliance.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8">
            <h3 className="text-2xl text-white font-bold">
              GST Services
            </h3>

            <p className="text-slate-300 mt-4">
              GST Registration and Monthly Return Filing.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}