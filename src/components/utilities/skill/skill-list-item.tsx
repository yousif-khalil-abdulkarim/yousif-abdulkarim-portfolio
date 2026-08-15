import type { Skill } from "@/data/all-skills";

type SkillListItemProps = {
  skill: Skill;
};

/** A single skill entry (name + description) in a skills list. */
export function SkillListItem({ skill }: SkillListItemProps) {
  return (
    <li className="border-b border-dashed border-border pb-4 last:border-0 last:pb-0">
      <p className="text-sm font-semibold">{skill.name}</p>
      <p className="mt-1 text-sm leading-6 text-body-foreground">
        {skill.description}
      </p>
    </li>
  );
}
