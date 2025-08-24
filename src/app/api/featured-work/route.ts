import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "Crimson Consultancy",
        description: "Developed a modern and user-friendly website for a Crimson Consultancy with Better UI And Great SEO.",
        roles: ["Project Leader", "Frontend Developer"],
        image: "/images/feature-work/1.png",
        url: "https://crimson-consultancy.com/"
    },
    {
        title: "Gyanjyoti Educational Sites",
        description: "E-Learning platform With Interactive Courses and User-Friendly Interface. Helping Students Achieve Their Academic Goals.",
        roles: ["Website Designer"],
        image: "/images/feature-work/2.png",
        url: "https://gyanjyotiedu.com"
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};