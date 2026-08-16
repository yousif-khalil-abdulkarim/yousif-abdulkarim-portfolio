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
  Profile,
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
    color: "#111111",
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#c9c9c9",
    paddingBottom: 12,
    marginBottom: 6,
  },
  name: {
    fontSize: 26,
    fontWeight: 700,
    fontFamily: "Times-Roman",
    letterSpacing: 0.5,
  },
  role: {
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#0284c7",
    marginTop: 4,
  },
  tagline: {
    fontSize: 9.5,
    color: "#444444",
    marginTop: 4,
  },
  contact: {
    fontSize: 9,
    color: "#333333",
    marginTop: 6,
  },
  socials: {
    fontSize: 8,
    color: "#666666",
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 1.5,
    borderBottomWidth: 1,
    borderBottomColor: "#c9c9c9",
    paddingBottom: 4,
    marginTop: 14,
    marginBottom: 8,
  },
  item: { marginBottom: 14 },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  itemTitle: { fontSize: 11, fontWeight: 700 },
  itemSubtitle: { fontSize: 10, color: "#333333", marginTop: 1 },
  roleTitle: { fontSize: 10, color: "#0284c7", marginTop: 1 },
  itemMeta: { fontSize: 9, color: "#444444" },
  body: {
    fontSize: 9.5,
    lineHeight: 1.5,
    color: "#333333",
    marginTop: 3,
    marginBottom: 6,
  },
  bullet: { flexDirection: "row", marginTop: 2 },
  bulletDot: { width: 10, fontSize: 9 },
  bulletText: { flex: 1, fontSize: 9.5, lineHeight: 1.5, color: "#333333" },
  keywordRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 4 },
  keyword: {
    fontSize: 8.5,
    backgroundColor: "#f0f0f0",
    color: "#333333",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    marginRight: 4,
    marginBottom: 2,
  },
  skillRow: { flexDirection: "row", marginBottom: 3 },
  skillCategory: { width: 130, fontSize: 9.5, fontWeight: 700 },
  skillItems: { flex: 1, fontSize: 9.5, color: "#333333" },
  proofRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 6 },
  proofBadge: {
    fontSize: 9,
    fontWeight: 700,
    color: "#0284c7",
    backgroundColor: "#e0f2fe",
    paddingHorizontal: 6,
    paddingVertical: 2.5,
    borderRadius: 3,
    marginRight: 4,
    marginBottom: 3,
  },
});

/**
 * Shared resume filter applied consistently to every section: an item is only
 * included when it is shown on the site (`include`) AND it is explicitly
 * marked for the resume (`includeInResume`). Used for Experience, Project,
 * Certificate, TechnicalWriting, and Language items.
 */
type IncludableItem = {
  include: boolean;
  includeInResume: boolean;
};

function isIncluded(item: IncludableItem): boolean {
  return item.include && item.includeInResume;
}

/**
 * Skills live on the shared `Skill` type, which has `includeInResume` but no
 * site-visibility flag, so they are filtered on `includeInResume` alone.
 */
function skillIsIncluded(skill: Skill): boolean {
  return skill.includeInResume;
}

/**
 * Limits used when generating the resume. Each value comes from the resume's
 * own `resumeSettings.sectionLimits`, falling back to the site's
 * `uiSettings.sectionLimits` whenever a resume-specific limit is `null`.
 */
type ResumeLimits = {
  experience: number;
  projects: number;
  skills: number;
  certificates: number;
  technicalWritings: number;
  proofLimit: number;
  pointsLimit: number;
};

function resolveSectionLimits(data: PortfolioData): ResumeLimits {
  const resume = data.resumeSettings.sectionLimits;
  const site = data.uiSettings.sectionLimits;
  return {
    experience: resume.experience ?? site.experience,
    projects: resume.projects ?? site.projects,
    skills: resume.skills ?? site.skills,
    certificates: resume.certificates ?? site.certificates,
    technicalWritings: resume.technicalWritings ?? site.technicalWritings,
    proofLimit: resume.proofLimit ?? site.proofLimit,
    pointsLimit: resume.pointsLimit ?? site.pointsLimit,
  };
}

type BulletListProps = {
  items: string[];
};

function BulletList({ items }: BulletListProps) {
  return (
    <>
      {items.map((item) => (
        <View key={item} style={styles.bullet} wrap={false}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </>
  );
}

type KeywordsProps = {
  items: string[];
};

function Keywords({ items }: KeywordsProps) {
  return (
    <View style={styles.keywordRow} wrap={false}>
      {items.map((item) => (
        <Text key={item} style={styles.keyword}>
          {item}
        </Text>
      ))}
    </View>
  );
}

type ProofLineProps = {
  items: string[];
};

function ProofLine({ items }: ProofLineProps) {
  if (items.length === 0) return null;
  return (
    <View style={styles.proofRow} wrap={false}>
      {items.map((item) => (
        <Text key={item} style={styles.proofBadge}>
          {item}
        </Text>
      ))}
    </View>
  );
}

type SkillsSectionProps = {
  skills: Record<string, Skill[]>;
};

function SkillsSection({ skills }: SkillsSectionProps) {
  const categories = Object.entries(skills).filter(
    ([, items]) => items.length > 0,
  );
  if (categories.length === 0) return null;
  return (
    <View wrap={false}>
      <Text style={styles.sectionTitle}>SKILLS</Text>
      {categories.map(([category, items]) => (
        <View key={category} style={styles.skillRow}>
          <Text style={styles.skillCategory}>{category}</Text>
          <Text style={styles.skillItems}>
            {items.map((skill) => skill.name).join(", ")}
          </Text>
        </View>
      ))}
    </View>
  );
}

type LanguagesSectionProps = {
  languages: Language[];
};

function LanguagesSection({ languages }: LanguagesSectionProps) {
  if (languages.length === 0) return null;
  return (
    <View wrap={false}>
      <Text style={styles.sectionTitle}>LANGUAGES</Text>
      {languages.map((lang) => (
        <View key={lang.name} style={styles.skillRow}>
          <Text style={styles.skillCategory}>{lang.name}</Text>
          <Text style={styles.skillItems}>{lang.level}</Text>
        </View>
      ))}
    </View>
  );
}

type TechnicalWritingItemProps = {
  writing: TechnicalWriting;
};

function TechnicalWritingItem({ writing }: TechnicalWritingItemProps) {
  return (
    <View style={styles.item} wrap={false}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemTitle}>{writing.title}</Text>
      </View>
      <Text style={styles.body}>{writing.description}</Text>
      {writing.url && <Text style={styles.socials}>{writing.url}</Text>}
    </View>
  );
}

type TechnicalWritingsSectionProps = {
  writings: TechnicalWriting[];
};

function TechnicalWritingsSection({
  writings,
}: TechnicalWritingsSectionProps) {
  if (writings.length === 0) return null;
  const [first, ...rest] = writings;
  return (
    <>
      {/* Section title + first item stay together as one unbreakable block. */}
      <View wrap={false}>
        <Text style={styles.sectionTitle}>TECHNICAL WRITINGS</Text>
        {first && <TechnicalWritingItem writing={first} />}
      </View>
      {rest.map((writing) => (
        <TechnicalWritingItem key={writing.title} writing={writing} />
      ))}
    </>
  );
}

type ExperienceItemProps = {
  job: Experience;
  pointsLimit: number;
  proofLimit: number;
};

function ExperienceItem({
  job,
  pointsLimit,
  proofLimit,
}: ExperienceItemProps) {
  return (
    <View style={styles.item}>
      <View wrap={false}>
        <View style={styles.itemHeader}>
          <Text style={styles.itemTitle}>{job.company}</Text>
          <Text style={styles.itemMeta}>{job.period}</Text>
        </View>
        <Text style={styles.roleTitle}>{job.role}</Text>
        {job.summary && <Text style={styles.body}>{job.summary}</Text>}
      </View>
      {job.points.length > 0 && (
        <BulletList items={job.points.slice(0, pointsLimit)} />
      )}
      <ProofLine items={job.proof.slice(0, proofLimit)} />
      {job.stack.length > 0 && (
        <Keywords items={job.stack.map((skill) => skill.name)} />
      )}
    </View>
  );
}

type ExperienceSectionProps = {
  jobs: Experience[];
  pointsLimit: number;
  proofLimit: number;
};

function ExperienceSection({
  jobs,
  pointsLimit,
  proofLimit,
}: ExperienceSectionProps) {
  if (jobs.length === 0) return null;
  const [first, ...rest] = jobs;
  return (
    <>
      {/* Section title + first item stay together as one unbreakable block. */}
      <View wrap={false}>
        <Text style={styles.sectionTitle}>EXPERIENCE</Text>
        {first && (
          <ExperienceItem
            job={first}
            pointsLimit={pointsLimit}
            proofLimit={proofLimit}
          />
        )}
      </View>
      {rest.map((job) => (
        <ExperienceItem
          key={`${job.role}-${job.company}`}
          job={job}
          pointsLimit={pointsLimit}
          proofLimit={proofLimit}
        />
      ))}
    </>
  );
}

type ProjectItemProps = {
  project: Project;
  proofLimit: number;
};

function ProjectItem({
  project,
  proofLimit,
}: ProjectItemProps) {
  return (
    <View style={styles.item}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemTitle}>{project.title}</Text>
        <Text style={styles.itemMeta}>{project.year}</Text>
      </View>
      <Text style={styles.body}>{project.description}</Text>
      {project.highlights.length > 0 && (
        <BulletList items={project.highlights} />
      )}
      <ProofLine items={project.proof.slice(0, proofLimit)} />
      {project.tech.length > 0 && (
        <Keywords items={project.tech.map((skill) => skill.name)} />
      )}
    </View>
  );
}

type ProjectsSectionProps = {
  projects: Project[];
  proofLimit: number;
};

function ProjectsSection({
  projects,
  proofLimit,
}: ProjectsSectionProps) {
  if (projects.length === 0) return null;
  const [first, ...rest] = projects;
  return (
    <>
      {/* Section title + first item stay together as one unbreakable block. */}
      <View wrap={false}>
        <Text style={styles.sectionTitle}>PROJECTS</Text>
        {first && <ProjectItem project={first} proofLimit={proofLimit} />}
      </View>
      {rest.map((project) => (
        <ProjectItem
          key={project.title}
          project={project}
          proofLimit={proofLimit}
        />
      ))}
    </>
  );
}

type CertificateItemProps = {
  cert: Certificate;
};

function CertificateItem({ cert }: CertificateItemProps) {
  return (
    <View style={styles.item}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemTitle}>{cert.title}</Text>
        <Text style={styles.itemMeta}>{cert.year}</Text>
      </View>
      <Text style={styles.itemSubtitle}>{cert.issuer}</Text>
    </View>
  );
}

type CertificatesSectionProps = {
  certs: Certificate[];
};

function CertificatesSection({ certs }: CertificatesSectionProps) {
  if (certs.length === 0) return null;
  const [first, ...rest] = certs;
  return (
    <>
      {/* Section title + first item stay together as one unbreakable block. */}
      <View wrap={false}>
        <Text style={styles.sectionTitle}>CERTIFICATES</Text>
        {first && <CertificateItem cert={first} />}
      </View>
      {rest.map((cert) => (
        <CertificateItem key={`${cert.title}-${cert.issuer}`} cert={cert} />
      ))}
    </>
  );
}

type ResumeHeaderProps = {
  profile: Profile;
  contact: string;
  socials: string;
};

function ResumeHeader({
  profile,
  contact,
  socials,
}: ResumeHeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.name}>
        {profile.firstName} {profile.lastName}
      </Text>
      <Text style={styles.role}>{profile.role}</Text>
      {profile.tagline && (
        <Text style={styles.tagline}>{bioToPlainText(profile.tagline)}</Text>
      )}
      {contact && <Text style={styles.contact}>{contact}</Text>}
      {socials && <Text style={styles.socials}>{socials}</Text>}
    </View>
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
type ResumeDocumentProps = {
  data: PortfolioData;
};

export function ResumeDocument({ data }: ResumeDocumentProps) {
  const { profile } = data;

  // Resolve the resume's section limits, falling back to the site's limits
  // whenever a resume-specific limit is null.
  const limits = resolveSectionLimits(data);

  // Apply the shared resume filter consistently across every supported section,
  // then cap each section to its resolved limit.
  const visibleExperience = data.experience
    .filter(isIncluded)
    .slice(0, limits.experience);
  const visibleProjects = data.projects
    .filter(isIncluded)
    .slice(0, limits.projects);
  const visibleCertificates = data.certificates
    .filter(isIncluded)
    .slice(0, limits.certificates);
  const visibleWritings = data.technicalWritings
    .filter(isIncluded)
    .slice(0, limits.technicalWritings);
  const visibleLanguages = data.languages.filter(isIncluded);
  const visibleSkills: Record<string, Skill[]> = Object.fromEntries(
    Object.entries(data.skills)
      .map(([category, items]) => [
        category,
        items.filter(skillIsIncluded).slice(0, limits.skills),
      ])
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
        return (
          <ExperienceSection
            key="experience"
            jobs={visibleExperience}
            pointsLimit={limits.pointsLimit}
            proofLimit={limits.proofLimit}
          />
        );
      case "projects":
        return (
          <ProjectsSection
            key="projects"
            projects={visibleProjects}
            proofLimit={limits.proofLimit}
          />
        );
      case "certificates":
        return (
          <CertificatesSection key="certificates" certs={visibleCertificates} />
        );
      case "writings":
        return (
          <TechnicalWritingsSection key="writings" writings={visibleWritings} />
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
        <ResumeHeader profile={profile} contact={contact} socials={socials} />
        <LanguagesSection languages={visibleLanguages} />

        {/* Fixed preamble — mirrors the site's About area (Languages, then Skills) */}
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
