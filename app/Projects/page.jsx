import ProjectCard from "../components/ProjectCard";

const projectsData = [
  {
    id: 3,
    imgUrl: "/images/projects/wms.jpg",
    title: "CiviSol — Warehouse Management System",
    description:
      "Warehouse management system for inventory control and stock operations. Handles multi-warehouse flows, barcode scanning, live stock syncing, purchases, and sales across multiple user roles — connected to a Laravel REST backend.",
    gitUrl: "",
    playStoreUrl: "",
    appStoreUrl: "",
    badge: "Client Project",
  },
  {
    id: 4,
    imgUrl: "/images/projects/excellence.jpg",
    title: "Excellence Quality — CRM Platform",
    description:
      "CRM and lead management platform with client portal, activity tracking, service management, and multi-role access. Built end to end in Flutter with a Laravel backend.",
    gitUrl: "",
    playStoreUrl: "",
    appStoreUrl: "",
    badge: "Client Project",
  },
  {
    id: 2,
    imgUrl: "/images/projects/freshzone.jpg",
    title: "FreshZone",
    description:
      "eCommerce mobile app for a supermarket chain. Full shopping experience — category browsing, product search, cart, promo handling, and checkout flow. Built with clean architecture and a Laravel backend.",
    gitUrl: "",
    playStoreUrl: "",
    appStoreUrl: "",
    badge: "Client Project",
  },
  {
    id: 10,
    imgUrl: "/images/projects/daralrafidain.jpg",
    title: "Dar Alrafidain — E-book Platform",
    description:
      "Arabic e-book platform live on App Store and Play Store. Features in-app purchases, online payments, offline reading with encrypted downloads, posts and announcements, and a rich digital library with a smooth reading experience.",
    gitUrl: "",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.brainsolutions.daralrafidain2",
    appStoreUrl: "https://apps.apple.com/us/app/dar-al-rafidayn-%D8%AF%D8%A7%D8%B1-%D8%A7%D9%84%D8%B1%D8%A7%D9%81%D8%AF%D9%8A%D9%86/id6479602448",
  },
  {
    id: 11,
    imgUrl: "/images/projects/sweetdeals.jpg",
    title: "Sweet Deals — eCommerce App",
    description:
      "eCommerce mobile app for a sweets and chocolates shop in Lebanon. Supports bulk buying, product browsing across categories including chocolates, candies, and drinks, with a smooth checkout experience.",
    gitUrl: "",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.brainsolutions.sweetdeals&pli=1",
    appStoreUrl: "https://apps.apple.com/us/app/sweet-deals-lebanon/id6578441396",
  },
  {
    id: 8,
    imgUrl: "/images/projects/servio.jpg",
    title: "Servio — Service Provider Marketplace",
    description:
      "Multi-role marketplace connecting service providers with customers. Providers subscribe monthly to list their services across categorized directories. Features provider profiles, media uploads, deep linking, and category-based discovery — built in Flutter with a Laravel backend.",
    gitUrl: "https://github.com/Ali-Elchab/servio",
    playStoreUrl: "",
    appStoreUrl: "",
  },
  {
    id: 1,
    imgUrl: "/images/projects/flutter-skeleton.jpg",
    title: "Flutter Starter Skeleton",
    description:
      "A production-ready Flutter starter kit designed for scalable apps. Includes clean architecture, Cubit state management, GoRouter navigation, reusable auth flow, API handler, theming, localization, and environment config. Cut new project setup time by 60%.",
    gitUrl: "https://github.com/Ali-Elchab/flutter_skeleton",
    playStoreUrl: "",
    appStoreUrl: "",
  },
  {
    id: 9,
    imgUrl: "/images/projects/ecom-personal.jpg",
    title: "Personal eCommerce App",
    description:
      "Full-featured eCommerce mobile app built independently — upgraded UI and flows from a client project. Includes auth, category browsing, product search, cart, promo handling, and checkout. Built with Flutter clean architecture and a Laravel backend.",
    gitUrl: "",
    playStoreUrl: "",
    appStoreUrl: "",
  },
];

const ProjectSection = () => {
  return (
    <section className="py-12 sm:py-16 w-full">
      <h2 className="text-4xl font-bold text-white mb-8 sm:mb-12 text-center w-full">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl mx-auto items-stretch">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            gitUrl={project.gitUrl}
            playStoreUrl={project.playStoreUrl}
            appStoreUrl={project.appStoreUrl}
            badge={project.badge}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
