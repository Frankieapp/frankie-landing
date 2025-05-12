export default function WhyFrankie() {
    const features = [
      {
        title: "Crystal-Clear Fees",
        desc: "No surprises. What you see is what you pay; up front, every time.",
        bg: "#FFF8F6",
        border: "#E94B4B",
      },
      {
        title: "No Credit Check",
        desc: "We base our trust on behavior, not your score. Because people > numbers.",
        bg: "#FFFFFF",
        border: "#F4E6DF",
      },
      {
        title: "Human-First",
        desc: "Frankie’s built for real people. With care, not tricks. And never any shame.",
        bg: "#FFFFFF",
        border: "#F4E6DF",
      },
    ];
  
    return (
      <section className="bg-[#FFF8F6] px-6 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-12 tracking-tight">Why Frankie</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {features.map((feature, i) => (
              <div
                key={i}
                className="rounded-3xl p-6 shadow-sm hover:shadow-md transition-all border-t-4"
                style={{
                  backgroundColor: feature.bg,
                  borderColor: feature.border,
                }}
              >
                <h3 className="text-xl font-bold mb-2 text-[#2B2B2B]">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#2B2B2B]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  