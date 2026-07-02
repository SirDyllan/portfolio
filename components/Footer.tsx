import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs font-semibold text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a href={`mailto:${profile.email}`} className="hover:text-goldDeep">
            {profile.email}
          </a>
          <a href={`tel:${profile.phoneHref}`} className="hover:text-goldDeep">
            {profile.phone}
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-goldDeep">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-goldDeep">
            LinkedIn
          </a>
          <a href="#top" className="text-ink hover:text-goldDeep">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
