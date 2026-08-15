import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  renderToBuffer,
} from "@react-pdf/renderer";
import type {
  PortfolioData,
  Experience,
  Project,
  Certificate,
  TechnicalWriting,
  Language,
} from "@/data/types";
import type { Skill } from "@/data/all-skills";
import { bioToPlainText } from "@/lib/bio";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#18181b",
  },
  header: {
    borderBottomWidth: 2,
    borderBottomColor: "#0ea5e9",
    paddingBottom: 12,
    marginBottom: 16,
  },
  name: { fontSize: 24, fontWeight: 700, letterSpacing: 0.5 },
  role: { fontSize: 12, color: "#0284c7", marginTop: 2 },
  tagline: { fontSize: 9.5, color: "#3f3f46", marginTop: 4 },
  contact: { fontSize: 9, color: "#52525b", marginTop: 6 },
  socials: { fontSize: 8, color: "#71717a", marginTop: 2 },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    borderBottomWidth: 1,
    borderBottomColor: "#e4e4e7",
    paddingBottom: 4,
    marginTop: 14,
    marginBottom: 8,
  },
  item: { marginBottom: 9 },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  itemTitle: { fontSize: 10.5, fontWeight: 700 },
  itemSubtitle: { fontSize: 9.5, color: "#0284c7", marginTop: 1 },
  itemMeta: { fontSize: 9, color: "#52525b" },
  body: { fontSize: 9.5, lineHeight: 1.5, color: "#3f3f46", marginTop: 4 },
  bullet: { flexDirection: "row", marginTop: 2 },
  bulletDot: { width: 10, fontSize: 9, color: "#0ea5e9" },
  bulletText: { flex: 1, fontSize: 9.5, lineHeight: 1.5, color: "#3f3f46" },
  keywordRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 4 },
  keyword: {
    fontSize: 8,
    backgroundColor: "#f4f4f5",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    marginRight: 4,
    marginBottom: 2,
  },
  skillRow: { flexDirection: "row", marginBottom: 3 },
  skillCategory: { width: 130, fontSize: 9.5, fontWeight: 700 },
  skillItems: { flex: 1, fontSize: 9.5, color: "#3f3f46" },
});

/**
 * Shared resume filter applied consistently to every section: an item is only
 * included when it is shown on the site (`include`) AND it is explicitly
 * marked for the resume (`includeInResume`). Used for Experience, Project,
 * Certificate, TechnicalWriting, and Language items.
 */
function isIncluded(item: {
  include: boolean;
  includeInResume: boolean;
}): boolean {
  return item.include && item.includeInResume;
}

/**
 * Skills live on the shared `Skill` type, which has `includeInResume` but no
 * site-visibility flag, so they are filtered on `includeInResume` alone.
 */
function skillIsIncluded(skill: Skill): boolean {
  return skill.includeInResume;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item) => (
        <View key={item} style={styles.bullet}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </>
  );
}

function Keywords({ items }: { items: string[] }) {
  return (
    <View style={styles.keywordRow}>
      {items.map((item) => (
        <Text key={item} style={styles.keyword}>
          {item}
        </Text>
      ))}
    </View>
  );
}

function SkillsSection({ skills }: { skills: Record<string, Skill[]> }) {
  const categories = Object.entries(skills).filter(
    ([, items]) => items.length > 0,
  );
  if (categories.length === 0) return null;
  return (
    <>
      <Text style={styles.sectionTitle}>SKILLS</Text>
      {categories.map(([category, items]) => (
        <View key={category} style={styles.skillRow}>
          <Text style={styles.skillCategory}>{category}</Text>
          <Text style={styles.skillItems}>
            {items.map((skill) => skill.name).join(", ")}
          </Text>
        </View>
      ))}
    </>
  );
}

function LanguagesSection({ languages }: { languages: Language[] }) {
  if (languages.length === 0) return null;
  return (
    <>
      <Text style={styles.sectionTitle}>LANGUAGES</Text>
      {languages.map((lang) => (
        <View key={lang.name} style={styles.skillRow}>
          <Text style={styles.skillCategory}>{lang.name}</Text>
          <Text style={styles.skillItems}>{lang.level}</Text>
        </View>
      ))}
    </>
  );
}

function TechnicalWritingsSection({
  writings,
}: {
  writings: TechnicalWriting[];
}) {
  if (writings.length === 0) return null;
  return (
    <>
      <Text style={styles.sectionTitle}>TECHNICAL WRITINGS</Text>
      {writings.map((writing) => (
        <View key={writing.title} style={styles.item}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemTitle}>{writing.title}</Text>
          </View>
          <Text style={styles.body}>{writing.description}</Text>
          {writing.url ? <Text style={styles.socials}>{writing.url}</Text> : null}
        </View>
      ))}
    </>
  );
}

function ExperienceSection({ jobs }: { jobs: Experience[] }) {
  if (jobs.length === 0) return null;
  return (
    <>
      <Text style={styles.sectionTitle}>EXPERIENCE</Text>
      {jobs.map((job) => (
        <View key={`${job.role}-${job.company}`} style={styles.item}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemTitle}>{job.role}</Text>
            <Text style={styles.itemMeta}>{job.period}</Text>
          </View>
          <Text style={styles.itemSubtitle}>{job.company}</Text>
          {job.summary ? <Text style={styles.body}>{job.summary}</Text> : null}
          {job.points.length > 0 ? <BulletList items={job.points} /> : null}
          {job.stack.length > 0 ? (
            <Keywords items={job.stack.map((skill) => skill.name)} />
          ) : null}
        </View>
      ))}
    </>
  );
}

function ProjectsSection({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;
  return (
    <>
      <Text style={styles.sectionTitle}>PROJECTS</Text>
      {projects.map((project) => (
        <View key={project.title} style={styles.item}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemTitle}>{project.title}</Text>
            <Text style={styles.itemMeta}>{project.year}</Text>
          </View>
          <Text style={styles.body}>{project.description}</Text>
          {project.highlights.length > 0 ? (
            <BulletList items={project.highlights} />
          ) : null}
          {project.tech.length > 0 ? (
            <Keywords items={project.tech.map((skill) => skill.name)} />
          ) : null}
        </View>
      ))}
    </>
  );
}

function CertificatesSection({ certs }: { certs: Certificate[] }) {
  if (certs.length === 0) return null;
  return (
    <>
      <Text style={styles.sectionTitle}>CERTIFICATES</Text>
      {certs.map((cert) => (
        <View key={`${cert.title}-${cert.issuer}`} style={styles.item}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemTitle}>{cert.title}</Text>
            <Text style={styles.itemMeta}>{cert.year}</Text>
          </View>
          <Text style={styles.itemSubtitle}>{cert.issuer}</Text>
        </View>
      ))}
    </>
  );
}

/**
 * A4 PDF resume template. The header (profile) is fixed at the top, followed
 * by the Languages and Skills preamble (mirroring the site's About area), then
 * the Experience / Projects / Certificates / Writings sections rendered in
 * exactly the order declared by `sectionOrder` — so reordering `sectionOrder`
 * reorders the PDF without any change to this generator.
 *
 * Every section uses the shared `isIncluded` filter: an item only appears when
 * it is not hidden AND it is explicitly marked `includeInResume`.
 */
export function ResumeDocument({ data }: { data: PortfolioData }) {
  const { profile } = data;

  // Apply the shared resume filter consistently across every supported section.
  const visibleExperience = data.experience.filter(isIncluded);
  const visibleProjects = data.projects.filter(isIncluded);
  const visibleCertificates = data.certificates.filter(isIncluded);
  const visibleWritings = data.technicalWritings.filter(isIncluded);
  const visibleLanguages = data.languages.filter(isIncluded);
  const visibleSkills: Record<string, Skill[]> = Object.fromEntries(
    Object.entries(data.skills)
      .map(([category, items]) => [category, items.filter(skillIsIncluded)])
      .filter(([, items]) => items.length > 0),
  );

  const contact = [profile.email, profile.phone, profile.location]
    .filter(Boolean)
    .join("  ·  ");
  const socials = [
    profile.githubUrl,
    profile.linkedin,
    profile.twitter,
    profile.youtube,
  ]
    .filter(Boolean)
    .join("  ·  ");

  // Render Experience / Projects / Certificates / Writings in the exact order
  // declared by `sectionOrder`.
  const orderedSections = data.sectionOrder.map((section) => {
    switch (section) {
      case "experience":
        return <ExperienceSection key="experience" jobs={visibleExperience} />;
      case "projects":
        return <ProjectsSection key="projects" projects={visibleProjects} />;
      case "certificates":
        return (
          <CertificatesSection
            key="certificates"
            certs={visibleCertificates}
          />
        );
      case "writings":
        return (
          <TechnicalWritingsSection
            key="writings"
            writings={visibleWritings}
          />
        );
    }
  });

  return (
    <Document
      title={`${profile.firstName} ${profile.lastName} - Resume`}
      author={`${profile.firstName} ${profile.lastName}`}
      subject="Resume"
    >
      <Page size="A4" style={styles.page}>
        {/* Header — mirrors the Hero section on the site */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {profile.firstName} {profile.lastName}
          </Text>
          <Text style={styles.role}>{profile.role}</Text>
          {profile.tagline ? (
            <Text style={styles.tagline}>
              {bioToPlainText(profile.tagline)}
            </Text>
          ) : null}
          {contact ? <Text style={styles.contact}>{contact}</Text> : null}
          {socials ? <Text style={styles.socials}>{socials}</Text> : null}
        </View>

        {/* Fixed preamble — mirrors the site's About area (Languages, then Skills) */}
        <LanguagesSection languages={visibleLanguages} />
        <SkillsSection skills={visibleSkills} />

        {/* Sections in the exact order declared by sectionOrder */}
        {orderedSections}
      </Page>
    </Document>
  );
}

/**
 * Renders the resume PDF for the given portfolio data and returns it as a
 * Node.js Buffer (ready to stream or save as a .pdf file).
 */
export async function renderResumePdf(
  data: PortfolioData,
): Promise<Uint8Array> {
  const buffer = await renderToBuffer(<ResumeDocument data={data} />);
  return new Uint8Array(buffer.buffer);
}

/**
 * Builds the resume file name for a portfolio,
 * e.g. "Yousif_Abdulkarim_resume_main.pdf".
 */
export function resumeFileName(data: PortfolioData, key: string): string {
  const firstName = data.profile.firstName;
  const lastName = data.profile.lastName;
  return `${firstName}_${lastName}_resume_${key}.pdf`.toLowerCase();
}
