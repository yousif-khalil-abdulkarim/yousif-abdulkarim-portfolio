import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  renderToBuffer,
} from "@react-pdf/renderer";
import type { PortfolioData } from "@/data/types";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#18181b",
  },
  header: {
    borderBottomWidth: 2,
    borderBottomColor: "#d946ef",
    paddingBottom: 12,
    marginBottom: 16,
  },
  name: { fontSize: 24, fontWeight: 700, letterSpacing: 0.5 },
  role: { fontSize: 12, color: "#a21caf", marginTop: 2 },
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
  itemSubtitle: { fontSize: 9.5, color: "#a21caf", marginTop: 1 },
  itemMeta: { fontSize: 9, color: "#52525b" },
  body: { fontSize: 9.5, lineHeight: 1.5, color: "#3f3f46", marginTop: 4 },
  bullet: { flexDirection: "row", marginTop: 2 },
  bulletDot: { width: 10, fontSize: 9, color: "#d946ef" },
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

/**
 * A4 PDF resume template. Renders the given portfolio directly into a PDF
 * document, excluding any items flagged with `hide: true`.
 */
export function ResumeDocument({ data }: { data: PortfolioData }) {
  const { profile, experience, projects, certificates, skills } = data;

  const visibleExperience = experience.filter((job) => !job.hide);
  const visibleProjects = projects.filter((project) => !project.hide);
  const visibleCertificates = certificates.filter((cert) => !cert.hide);

  const contact = [profile.email, profile.phone, profile.location]
    .filter(Boolean)
    .join("  ·  ");
  const socials = [
    profile.github,
    profile.linkedin,
    profile.twitter,
    profile.youtube,
  ]
    .filter(Boolean)
    .join("  ·  ");

  return (
    <Document
      title={`${profile.name} - Resume`}
      author={profile.name}
      subject="Resume"
    >
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.role}>{profile.role}</Text>
          {contact ? <Text style={styles.contact}>{contact}</Text> : null}
          {socials ? <Text style={styles.socials}>{socials}</Text> : null}
        </View>

        {/* Profile summary */}
        {profile.tagline ? (
          <>
            <Text style={styles.sectionTitle}>PROFILE</Text>
            <Text style={styles.body}>{profile.tagline}</Text>
          </>
        ) : null}

        {/* Experience */}
        {visibleExperience.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>EXPERIENCE</Text>
            {visibleExperience.map((job) => (
              <View key={`${job.role}-${job.company}`} style={styles.item}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{job.role}</Text>
                  <Text style={styles.itemMeta}>{job.period}</Text>
                </View>
                <Text style={styles.itemSubtitle}>{job.company}</Text>
                {job.summary ? (
                  <Text style={styles.body}>{job.summary}</Text>
                ) : null}
                {job.points.length > 0 ? <BulletList items={job.points} /> : null}
              </View>
            ))}
          </>
        )}

        {/* Projects */}
        {visibleProjects.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>PROJECTS</Text>
            {visibleProjects.map((project) => (
              <View key={project.title} style={styles.item}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{project.title}</Text>
                  <Text style={styles.itemMeta}>{project.year}</Text>
                </View>
                <Text style={styles.body}>{project.description}</Text>
                {project.highlights && project.highlights.length > 0 ? (
                  <BulletList items={project.highlights} />
                ) : null}
                {project.tech.length > 0 ? (
                  <Keywords items={project.tech.map((skill) => skill.name)} />
                ) : null}
              </View>
            ))}
          </>
        )}

        {/* Skills */}
        {Object.keys(skills).length > 0 && (
          <>
            <Text style={styles.sectionTitle}>SKILLS</Text>
            {Object.entries(skills)
              .filter(([, items]) => items.length > 0)
              .map(([category, items]) => (
                <View key={category} style={styles.skillRow}>
                  <Text style={styles.skillCategory}>{category}</Text>
                  <Text style={styles.skillItems}>
                    {items.map((skill) => skill.name).join(", ")}
                  </Text>
                </View>
              ))}
          </>
        )}

        {/* Certificates */}
        {visibleCertificates.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>CERTIFICATES</Text>
            {visibleCertificates.map((cert) => (
              <View key={`${cert.title}-${cert.issuer}`} style={styles.item}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{cert.title}</Text>
                  <Text style={styles.itemMeta}>{cert.year}</Text>
                </View>
                <Text style={styles.itemSubtitle}>{cert.issuer}</Text>
              </View>
            ))}
          </>
        )}
      </Page>
    </Document>
  );
}

/**
 * Renders the resume PDF for the given portfolio data and returns it as a
 * Node.js Buffer (ready to stream or save as a .pdf file).
 */
export async function renderResumePdf(data: PortfolioData): Promise<Buffer> {
  return renderToBuffer(<ResumeDocument data={data} />);
}

/**
 * Builds the resume file name for a portfolio,
 * e.g. "Yousif_Abdulkarim_resume_main.pdf".
 */
export function resumeFileName(data: PortfolioData, key: string): string {
  const firstName = data.profile.firstName;
  const lastName = data.profile.name
    .split(" ")
    .filter((part) => part !== firstName)
    .join("_");
  return `${firstName}_${lastName}_resume_${key}.pdf`.toLowerCase();
}
