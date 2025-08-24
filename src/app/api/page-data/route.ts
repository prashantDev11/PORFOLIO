import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: "/images/Skill/Nex.png",
        role: "Founder And BOD - Nexolinx",
        location: "Butwal, Nepal",
        startYear: "2024",
        endYear: "Present",
       
    },
    {
        icon: "/images/Skill/Tech.png",
        role: "CFO - Cornor-Tech",
        location: "Butwal, Nepal",
        startYear: "2023",
        endYear: "2024",
        
    },
    
]

const educationData = [
    {
        date: "2011 - 2022",
        title: "Primary Level General Stream",
        subtitle: "Bhabisya Nirman Secondary School"
    },
    {
        date: "2023 - 2025",
        title: "Secondary Level Computer Engieneering ",
        subtitle: "Kalika Manavgyan Higher Secondary School "
    },
    {
        date: "2025 - Current",
        title: "+ 2 Level Computer Engieneering ",
        subtitle: "Kalika Manavgyan Higher Secondary School "
    }
];


const projectOverview = {
    caseStudies: [
        { name: "Wellnest", url: "#" },
        { name: "ScoutHire", url: "#" },
    ],
    sideProjects: [
        { name: "Formless", url: "#" },
        { name: "Gridsnap", comingSoon: true },
        { name: "OrbitPay Mobile App", comingSoon: true },
        { name: "Siteflow Page Builder", comingSoon: true },
    ]
};


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};