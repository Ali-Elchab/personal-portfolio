import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const links = [
  { href: "mailto:alielchab01@gmail.com", label: "Email", value: "alielchab01@gmail.com", Icon: MdOutlineEmail },
  { href: "https://github.com/Ali-Elchab", label: "GitHub", value: "github.com/Ali-Elchab", Icon: FaGithub },
  { href: "https://www.linkedin.com/in/ali-elchab/", label: "LinkedIn", value: "linkedin.com/in/ali-elchab", Icon: FaLinkedin },
];

const ContactSection = () => {
  return (
    <section id="contact" className="w-full scroll-mt-20 py-5 pb-8 sm:py-12">
      <h2 className="text-center text-lg font-bold text-white sm:text-3xl">Get in touch</h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-sm leading-relaxed text-[#ADB7BE] md:text-base">
        Open to remote Flutter roles and freelance projects. Email me or message me on LinkedIn.
      </p>
      <ul className="mx-auto mt-4 grid max-w-md grid-cols-3 gap-2 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-3">
        {links.map(({ href, label, value, Icon }) => (
          <li key={href} className="min-w-0">
            <Link
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex h-full flex-col items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-2.5 text-xs text-white transition hover:bg-white/10 sm:flex-row sm:gap-2 sm:rounded-full sm:px-4 sm:text-sm"
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span className="sm:hidden">{label}</span>
              <span className="hidden sm:inline">{value}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactSection;
