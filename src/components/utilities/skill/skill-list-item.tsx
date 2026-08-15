import type { Skill } from "@/data/all-skills";

type SkillListItemProps = {
  skill: Skill;
};

/** A single skill entry (name + description) in a skills list. */
export function SkillListItem({ skill }: SkillListItemProps) {
  return (
    <li className="border-b border-dashed border-zinc-200 pb-4 last:border-0 last:pb-0 dark:border-zinc-800">
      <p className="text-sm font-semibold">{skill.name}</p>
      <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {skill.description}
      </p>
    </li>
  );
}
