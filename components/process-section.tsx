"use client";

import Image from "next/image";

const PROCESS_STEPS = [
  {
    id: 1,
    title: "Desain & Perencanaan",
    description:
      "Kami merancang setiap detail dengan cermat untuk memastikan desain yang memukau dan fungsional sesuai kebutuhan Anda.",
    image: "/desain-perencanaan.jpg",
  },
  {
    id: 2,
    title: "Pemilihan Kayu",
    description:
      "Kami memilih kayu terbaik dari hutan yang dikelola secara berkelanjutan untuk kualitas dan ketahanan maksimal.",
    image: "/pemilihan-kayu.jpg",
  },
  {
    id: 3,
    title: "Proses Konstruksi",
    description:
      "Pengrajin berpengalaman kami membangun rumah dengan teknik tradisional dan teknologi modern untuk hasil sempurna.",
    image: "/proses-konstruksi.jpg",
  },
  {
    id: 4,
    title: "Finishing & Detail",
    description:
      "Kami menyelesaikan setiap detail dengan perhatian penuh untuk memastikan rumah Anda siap dan sempurna.",
    image: "/finishing-detail.jpg",
  },
  {
    id: 5,
    title: "Serah Terima",
    description:
      "Rumah Anda siap dihuni dengan sertifikat kualitas dan garansi komprehensif untuk ketenangan pikiran Anda.",
    image: "/serah-terima.jpg",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Proses Pembuatan
          </h2>
          <p className="text-foreground/70 text-lg">
            Lihat bagaimana kami membuat rumah impian Anda
          </p>
        </div>

        <div className="space-y-16">
          {PROCESS_STEPS.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={step.id}
                className="flex flex-col lg:flex-row gap-8 items-center"
              >
                {isEven ? (
                  <>
                    {/* Image on left for even indices */}
                    <div className="w-full lg:w-1/2 animate-fadeInLeft">
                      <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={step.image || "/placeholder.svg"}
                          alt={step.title}
                          fill
                          className="object-cover hover-scale"
                        />
                      </div>
                    </div>
                    {/* Text on right */}
                    <div className="w-full lg:w-1/2 animate-fadeInRight">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary text-card flex items-center justify-center text-xl font-bold">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <h3 className="text-3xl font-bold text-primary">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-foreground/70 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Text on left for odd indices */}
                    <div className="w-full lg:w-1/2 animate-fadeInLeft">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-secondary text-card flex items-center justify-center text-xl font-bold">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <h3 className="text-3xl font-bold text-primary">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-foreground/70 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    {/* Image on right */}
                    <div className="w-full lg:w-1/2 animate-fadeInRight">
                      <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={step.image || "/placeholder.svg"}
                          alt={step.title}
                          fill
                          className="object-cover hover-scale"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
