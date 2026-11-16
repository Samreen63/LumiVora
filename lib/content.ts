export const site = {
  name: "LumiVora",
  tagline: "From idea to launched MVP, fast.",
  description:
    "We design and build SaaS products and MVPs for startups and businesses worldwide.",
  email: "hello@lumivora.com", // replace with your real email
  bookingUrl: "#contact", // replace with Calendly/booking link
  socials: {
    twitter: "https://twitter.com/", // replace
    linkedin: "https://linkedin.com/company/", // replace
    github: "https://github.com/", // replace
  },
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  badge: "Now booking new projects",
  headline: ["Build your SaaS", "idea into reality"],
  subheading:
    "LumiVora partners with founders and businesses to design, build, and launch high-quality MVPs and scalable web products - fast, beautifully, and reliably.",
  primaryCta: { label: "Get a Free Consultation", href: "#contact" },
  secondaryCta: { label: "View Our Work", href: "#work" },
  trust: "Trusted by founders worldwide",
  stats: [
    { value: 50, suffix: "+", label: "Projects delivered" },
    { value: 30, suffix: "+", label: "Happy clients" },
    { value: 12, suffix: "+", label: "Countries served" },
  ],
};

export const services = [
  { title: "SaaS Development", desc: "Scalable, secure SaaS platforms built with modern architectures and best practices.", icon: "Layers" },
  { title: "MVP Development", desc: "Launch fast with a focused MVP that validates your idea and delights early users.", icon: "Rocket" },
  { title: "Web App Development", desc: "High-performance web applications tailored to your product and business goals.", icon: "Globe" },
  { title: "UI/UX Design", desc: "Clean, intuitive interfaces and product design that convert and retain users.", icon: "Palette" },
  { title: "API & Backend Development", desc: "Robust APIs, databases, and integrations that power reliable products.", icon: "Server" },
  { title: "Maintenance & Support", desc: "Ongoing improvements, monitoring, and support to keep your product thriving.", icon: "Wrench" },
];

export const process = [
  { step: "01", title: "Discovery", desc: "We align on goals, users, scope, and success metrics to define the right MVP." },
  { step: "02", title: "Design", desc: "Wireframes and polished UI/UX that make your product intuitive and on-brand." },
  { step: "03", title: "Build", desc: "Agile development with regular demos, clean code, and scalable foundations." },
  { step: "04", title: "Launch & Support", desc: "Deploy, monitor, and iterate with ongoing support after launch." },
];

export const projects = [
  { title: "FinFlow Analytics", desc: "A SaaS dashboard helping startups track revenue, churn, and growth metrics in real time.", tags: ["Next.js", "Supabase", "Tailwind"], image: "/images/project-1.svg" },
  { title: "LaunchPad CRM", desc: "Lightweight CRM MVP for managing leads, pipelines, and customer conversations.", tags: ["React", "Node.js", "Postgres"], image: "/images/project-2.svg" },
  { title: "Medora Booking", desc: "Scheduling and booking web app with payments and automated reminders.", tags: ["Next.js", "Stripe", "Vercel"], image: "/images/project-3.svg" },
];

export const techStack = ["Next.js", "React", "TypeScript", "Node.js", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel", "Figma", "Stripe"];

export const pricing = [
  { name: "Starter MVP", price: "Contact us", desc: "Perfect for validating a new idea quickly.", features: ["Core feature set", "UI/UX design", "Responsive web app", "2-4 week delivery", "Launch support"], featured: false },
  { name: "Growth", price: "Contact us", desc: "For startups ready to scale their product.", features: ["Expanded features", "Custom design system", "API integrations", "Performance optimization", "Priority support"], featured: true },
  { name: "Custom SaaS", price: "Contact us", desc: "Tailored solutions for complex products.", features: ["Full SaaS architecture", "Advanced integrations", "Scalable infrastructure", "Dedicated collaboration", "Ongoing partnership"], featured: false },
];

export const testimonials = [
  { name: "Alex Morgan", role: "Founder, FinFlow", quote: "LumiVora turned our rough idea into a polished MVP in weeks. The quality and speed were outstanding." },
  { name: "Priya Shah", role: "CEO, LaunchPad", quote: "Clear communication, beautiful design, and solid engineering. They felt like an extension of our team." },
  { name: "Daniel Kim", role: "Product Lead, Medora", quote: "From discovery to launch, everything was smooth. Our users love the experience they delivered." },
];

export const faqs = [
  { q: "How long does it take to build an MVP?", a: "Most MVPs take 2-6 weeks depending on scope and complexity. After discovery, we provide a clear timeline." },
  { q: "How much does a project cost?", a: "Cost depends on scope, features, and timelines. We offer flexible packages - contact us for a tailored quote." },
  { q: "Do I own the code?", a: "Yes. You receive full ownership of the source code, assets, and IP upon project completion and payment." },
  { q: "Do you provide support after launch?", a: "Absolutely. We offer maintenance and support plans to fix issues, ship improvements, and help you scale." },
  { q: "What are your payment terms?", a: "Typically we work with a milestone-based structure (e.g., upfront deposit and payments per milestone). We'll align on terms before starting." },
  { q: "How do we communicate during the project?", a: "We use regular check-ins, demos, and async updates via your preferred tools (Slack, email, or calls) to keep everything transparent." },
];

export const cta = {
  title: "Ready to build your product?",
  subtitle: "Let's turn your idea into a launch-ready MVP your users will love.",
  button: "Start Your Project",
};
