import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineLanguage } from "react-icons/md";

const contacts = [
  { href: "https://wa.me/96171365282", label: "WhatsApp", value: "+961 71 365 282", Icon: FaWhatsapp },
  { href: "mailto:support@vision-rise.co", label: "Email", value: "support@vision-rise.co", Icon: MdOutlineEmail },
  { href: "https://www.instagram.com/vision.rise.co/", label: "Instagram", value: "@vision.rise.co", Icon: FaInstagram },
  { href: "https://vision-rise.co", label: "Website", value: "vision-rise.co", Icon: MdOutlineLanguage },
];

const facts = ["Founded Sep 2026", "Setup, training, support"];

const VisionRiseSection = () => {
  return (
    <section id="visionrise" className="w-full scroll-mt-20 py-3 sm:py-10">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1b3d] via-[#111827] to-[#121212]">
        <div className="pointer-events-none absolute -top-24 -left-16 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-48 w-48 rounded-full bg-orange-400/10 blur-3xl" />

        <div className="relative grid gap-4 p-4 sm:p-7 md:grid-cols-5 md:gap-8">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3">
              <Image
                src="/images/brand/visionrise-mark.webp"
                alt="VisionRise logo"
                width={360}
                height={224}
                className="h-9 w-auto sm:h-12"
              />
              <div>
                <h2 className="text-xl font-bold leading-none text-white sm:text-3xl">
                  Vision<span className="text-blue-400">Rise</span>
                </h2>
                <p className="mt-1 text-xs tracking-wide text-blue-200">From vision to rise</p>
              </div>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-[#ADB7BE]">
              The software company I founded in September 2026. We build ready-to-use software for small businesses and
              set it up for them. Our first product, Appointly, is live in production.
            </p>

            <ul className="mt-3 flex flex-wrap gap-2">
              {facts.map((fact) => (
                <li key={fact} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-blue-100">
                  {fact}
                </li>
              ))}
            </ul>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:flex sm:gap-3">
              <Link
                href="https://vision-rise.co"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 px-4 text-sm font-medium text-white transition hover:opacity-90"
              >
                Visit website
              </Link>
              <Link
                href="/projects/appointly"
                className="flex h-10 items-center justify-center rounded-full border border-white/40 px-4 text-sm text-white transition hover:bg-white/10"
              >
                See Appointly
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <Link
              href="/projects/appointly"
              className="group relative block h-20 overflow-hidden rounded-xl border border-white/10 bg-[#0f1117] sm:h-32"
            >
              <Image
                src="/images/projects/appointly/cover.webp"
                alt="Appointly preview"
                fill
                sizes="(min-width: 768px) 30vw, 100vw"
                className="object-cover object-right transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-blue-200">First product</p>
                  <p className="text-base font-semibold leading-tight text-white">Appointly</p>
                </div>
                <span className="rounded-full bg-blue-500/80 px-2 py-0.5 text-xs font-semibold text-white">Live</span>
              </div>
            </Link>

            <ul className="grid grid-cols-2 gap-2">
              {contacts.map(({ href, label, value, Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 transition hover:border-blue-400/40 hover:bg-white/10"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-blue-300" />
                    <span className="min-w-0">
                      <span className="block text-xs text-white sm:uppercase sm:tracking-wide sm:text-[#8a949c]">{label}</span>
                      <span className="hidden break-all text-xs text-white sm:block">{value}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionRiseSection;
