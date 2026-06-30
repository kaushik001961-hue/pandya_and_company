import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactInfo() {
  const items = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 9426948661",
    },
    {
      icon: Mail,
      title: "Email",
      value: "kppandya0011@gmail.com",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "S16- 30, RADHE CITY CENTER, BAPASITARAM CHOWK,TALAJA, DISTRICT - BHAVNAGAR, GUJARAT,PINCODE: 364140, INDIA.",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 9426948661",
    },
  ];

  return (
    <section className="py-20 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-slate-900 rounded-3xl p-8 border border-white/10"
              >
                <Icon className="text-blue-400 w-10 h-10" />

                <h3 className="text-white text-xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-slate-300 mt-4">
                  {item.value}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}