import Image from "next/image";

const CV_URL = "/Ali-Elchab-CV.pdf";

const buttonClass =
  "flex h-11 items-center justify-center rounded-full border border-white px-3 text-sm text-white hover:bg-slate-800 md:h-auto md:w-36 md:py-2.5";

const chipClass = "rounded-full border border-blue-400/40 px-2.5 py-1";

const HeroSection = () => {
  return (
    <section id="top" className="flex w-full items-center py-6 sm:min-h-[calc(100svh-4rem)] sm:py-0">
      <div className="grid w-full items-center gap-4 md:grid-cols-12 md:gap-6">
        <div className="flex flex-col gap-5 md:col-span-7 md:gap-5">
          <div className="flex items-center gap-4 md:block">
            <Image
              src="/images/alichab.jpg"
              alt="Ali Elchab"
              width={160}
              height={160}
              priority
              className="h-20 w-20 shrink-0 rounded-full object-cover object-top ring-2 ring-white/10 md:hidden"
            />
            <h1 className="text-2xl font-extrabold leading-snug text-white sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">Ali Elchab</span>
              <br />
              Flutter Mobile Engineer
            </h1>
          </div>

          <p className="text-xs uppercase tracking-[0.12em] text-blue-200">
            Canadian citizen · Open to remote roles
          </p>

          <p className="max-w-xl text-sm leading-7 text-[#ADB7BE] md:text-base md:leading-relaxed">
            I build and ship Flutter apps for warehouses, POS and SaaS, with Laravel backends, to the App Store and
            Google Play.
          </p>

          <div className="flex flex-wrap gap-2.5 text-xs text-blue-100">
            <span className={chipClass}>2.5+ years Flutter</span>
            <a href="#visionrise" className={`${chipClass} hover:bg-slate-800`}>
              Founder, VisionRise
            </a>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-1 md:flex md:gap-3 md:pt-0">
            <a
              href="#contact"
              className="flex h-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-300 via-blue-500 to-blue-500 px-3 text-sm text-white hover:opacity-90 md:h-auto md:w-36 md:py-2.5"
            >
              Contact
            </a>
            <a href={CV_URL} target="_blank" rel="noopener noreferrer" className={buttonClass}>
              View CV
            </a>
            <a href="#projects" className={buttonClass}>
              Projects
            </a>
          </div>
        </div>

        <div className="hidden justify-end md:col-span-5 md:flex">
          <Image
            src="/images/alichab.jpg"
            alt="Ali Elchab"
            width={500}
            height={500}
            priority
            className="h-auto w-64 object-cover lg:w-72"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
