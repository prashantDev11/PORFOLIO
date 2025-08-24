"use client";
import Image from "next/image";
import { useState } from "react";

const Language = () => {
  const [selected, setSelected] = useState(null);

  const MyImage = [
    { img: "/images/Skill/Html.png", icon: "HTML" },
    { img: "/images/Skill/Css.png", icon: "CSS" },
    { img: "/images/Skill/JavaScript.png", icon: "JavaScript" },
    { img: "/images/Skill/React.png", icon: "React" },
    { img: "/images/Skill/Next.png", icon: "Next.js" },
    { img: "/images/Skill/Talwind.png", icon: "Tailwind" },
    { img: "/images/Skill/MySql.png", icon: "My Sql" },
    { img: "/images/Skill/Mongo.png", icon: "MongoDB" },
    { img: "/images/Skill/C.png", icon: "C Programming" },
    { img: "/images/Skill/C+.png", icon: "C+ Programming" },
    { img: "/images/Skill/PHP.png", icon: "PHP" },
    { img: "/images/Skill/Bootstrap.png", icon: "Bootstrap" },
  ];

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
           
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 place-items-center bg-white/60 rounded-2xl p-6 shadow-md">
                {MyImage.map((value, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-xl border border-primary/10 shadow-sm hover:shadow-md cursor-pointer transition 
                    ${selected?.icon === value.icon ? "bg-primary/10 ring-2 ring-primary/40" : "bg-white"}`}
                    onClick={() => setSelected(value)}
                  >
                    <Image
                      src={value.img}
                      alt={value.icon}
                      width={70}
                      height={70}
                      className="rounded-md"
                    />
                  </div>
                ))}
              </div>

              {/* Right Preview Box */}
              <div className="flex justify-center">
                <div className="p-10 bg-white rounded-2xl shadow-lg flex flex-col items-center">
                  {!selected ? (
                    <>
                      <img
                        src="/images/Skill/Nex.png"
                
                        alt="default"
                        className="w-30 h-40  "
                      />
                      <p className="mt-4 text-gray-500">Nexolinx [IT Company]</p>
                    </>
                  ) : (
                    <>
                      <Image
                        src={selected.img}
                        alt={selected.icon}
                        width={120}
                        height={120}
                        className="rounded-xl"
                      />
                      <p className="mt-4 text-lg font-semibold text-gray-800">
                        {selected.icon}
                      </p>
                      
                    </>
                  )}
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
