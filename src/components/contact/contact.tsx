import { SectionHeading } from "@/components/utilities/section-heading";
import { ContactCard } from "@/components/contact/contact-card";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
  FaBlog,
} from "react-icons/fa6";
import type { PortfolioData } from "@/data/types";

type ContactProps = {
  data: PortfolioData;
};

export function Contact({ data }: ContactProps) {
  const { profile } = data;
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-24"
    >
      <SectionHeading
        index="07"
        title="Get in touch"
        subtitle="Have a project in mind, an opportunity to discuss, or just want to say hi? Reach out through any channel below."
      />
      <p className="mt-12 max-w-xl font-display text-2xl font-semibold leading-snug sm:text-3xl">
        Got an idea? Let&apos;s make something{" "}
        <span className="text-gradient animate-gradient-x">great</span>{" "}
        together.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {profile.githubUrl && (
          <ContactCard
            href={profile.githubUrl}
            label="GitHub"
            subtitle="Code &amp; open source"
            icon={<FaGithub className="h-6 w-6" />}
          />
        )}
        {profile.linkedin && (
          <ContactCard
            href={profile.linkedin}
            label="LinkedIn"
            subtitle="Connect professionally"
            icon={<FaLinkedin className="h-6 w-6" />}
          />
        )}
        {profile.twitter && (
          <ContactCard
            href={profile.twitter}
            label="X (Twitter)"
            subtitle="Follow along"
            icon={<FaXTwitter className="h-5 w-5" />}
          />
        )}
        {profile.blog && (
          <ContactCard
            href={profile.blog}
            label="Blog"
            subtitle="Writing & updates"
            icon={<FaBlog className="h-5 w-5" />}
          />
        )}
        {profile.youtube && (
          <ContactCard
            href={profile.youtube}
            label="YouTube"
            subtitle="Watch my content"
            icon={<FaYoutube className="h-6 w-6" />}
          />
        )}
        <ContactCard
          label={profile.location}
          subtitle={
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="block text-xs text-muted-foreground transition-colors hover:text-accent"
            >
              {profile.phone}
            </a>
          }
          icon={<span className="text-lg leading-none">📍</span>}
        />
      </div>
    </section>
  );
}
