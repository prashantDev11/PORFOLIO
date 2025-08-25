"use client";

import Image from "next/image";
import { useState } from "react";

// ✅ Define type for your skills
type Skill = {
  img: string;
  label: string; // 👈 replaced "icon" with "label"
};

// ✅ Skills array
const skills: Skill[] = [
  { img: "/images/Skill/Html.png", label: "HTML" },
  { img: "/images/Skill/Css.png", label: "CSS" },
  { img: "/images/Skill/JavaScript.png", label: "JavaScript" },
  { img: "/images/Skill/React.png", label: "React" },
  { img: "/images/Skill/Next.png", label: "Next.js" },
  { img: "/images/Skill/Talwind.png", label: "Tailwind" },
  { img: "/images/Skill/MySql.png", label: "My SQL" },
  { img: "/images/Skill/Mongo.png", label: "MongoDB" },
  { img: "/images/Skill/C.png", label: "C Programming" },
  { img: "/images/Skill/C+.png", label: "C+ Programming" },
  { img: "/images/Skill/PHP.png", label: "PHP" },
  { img: "/images/Skill/Bootstrap.png", label: "Bootstrap" },
];

const Language = () => {
  // ✅ Ensure state has correct type
  const [selected, setSelected] = useState<Skill>(skills[0]);

  return (
    <section>
      <div className="container">
        <div className="h-4 border border-primary/10"></div>
        <div className="border-x border-primary/10">
          <div className="flex flex-col max-w-5xl mx-auto py-10 px-4 sm:px-7">
            <div className="flex flex-col xs:flex-row gap-5 items-center justify-between mb-6">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                Language And Framework
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Grid of skills */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 place-items-center bg-white/60 rounded-2xl p-6 shadow-md">
                {skills.map((value, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-xl border border-primary/10 shadow-sm hover:shadow-md cursor-pointer transition 
                      ${selected.label === value.label ? "bg-primary/10 ring-2 ring-primary/40" : "bg-white"}`}
                    onClick={() => setSelected(value)}
                  >
                    <Image
                      src={value.img}
                      alt={value.label}
                      width={70}
                      height={70}
                      className="rounded-md"
                    />
                  </div>
                ))}
              </div>

              {/* Preview section */}
              <div className="flex justify-center">
                <div className="p-10 bg-white rounded-2xl shadow-lg flex flex-col items-center">
                  <Image
                    src={selected.img}
                    alt={selected.label}
                    width={120}
                    height={120}
                    className="rounded-xl"
                  />
                  {/* 👇 replaced icon with label */}
                  <p className="mt-4 text-lg font-semibold text-gray-800">
                    {selected.label}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Language;
