import Image from "next/image"
import Link from "next/link";

const HeroSection = () => {
    const socialIcon = [
        {
            img: "/images/icon/insta.svg",
            href: "https://twitter.com",
            icon: "Instagram"
        },
        {
            img: "/images/icon/facebook-icon.svg",
            href: "https://www.facebook.com/prashant.pandey.101972",
            icon: "Facebook"
        },
        {
            img: "/images/icon/github.svg",
            href: "https://dribble.com",
            icon: "Github"
        },
         {
            img: "/images/icon/linkden.svg",
            href: "https://dribble.com",
            icon: "LinkedIn"
        },
    ];
    return (
        <section>
            <div className="container">
                <div className="">
                    <div className="w-full">
                        <Image src={"/images/Welcome to.png"} alt="banner-img" width={1080} height={267} className="w-full h-full object-cover" />
                    </div>
                    <div className="border-x border-primary/10">
                        <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
                            <div className="absolute top-0 transform -translate-y-1/2">
                                <Image src={"/images/hero-sec/myProfile.png"} alt="user-img" width={175} height={175} className="object-cover  rounded-full" />
                            
                            </div>
                            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                                <h1>Prashant Pandey</h1>
                                <h5 className="text-violet font-normal">Senior Website Developer</h5>
                                <div className="flex items-center gap-2">
                                    <Image src={"/images/icon/map-icon.svg"} alt="map-icon" width={20} height={20} />
                                    <p className="text-primary">Butwal, Nepal</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div className="flex items-center gap-2">
                                    {socialIcon?.map((value, index) => {
                                        return (
                                            <Link href={value?.href} key={index} className="w-fit p-2.5 sm:p-3.5 hover:bg-primary/5 border border-primary/10 rounded-full">
                                                <Image src={value?.img} alt={value?.icon} width={18} height={18} />
                                            </Link>
                                        )
                                    })}
                                </div>
                                <Link
                                    href="/contact"
                                    className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)]"
                                >
                                    <span className="flex items-center gap-3 bg-primary hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] py-2.5 px-5 rounded-full">
                                        <Image
                                            src="/images/icon/spark-icon.svg"
                                            alt="spark-icon"
                                            width={14}
                                            height={14}
                                        />
                                        <span className="text-sm sm:text-base font-semibold text-white">Get in touch</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

