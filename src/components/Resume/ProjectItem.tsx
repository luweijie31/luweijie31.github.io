import { TechBadge } from './TechBadge'
import { GitHubIcon, ExternalLinkIcon } from '@/components/icons'

interface ProjectItemProps {
  title: string
  description: string
  highlights?: string[]
  techs: string[]
  url?: string
  github?: string
}

export function ProjectItem({ title, description, highlights, techs, url, github }: ProjectItemProps) {
  return (
    <div className="py-3 px-3 -mx-3 rounded-lg hover:bg-resume-primary/5 transition-colors">
      <div className="flex items-center gap-2 mb-1">
        <h3 className="text-sm font-semibold text-resume-text">{title}</h3>
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${title}`}>
            <ExternalLinkIcon className="w-3.5 h-3.5 text-resume-primary" />
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`${title} on GitHub`}>
            <GitHubIcon className="w-3.5 h-3.5 text-resume-primary" />
          </a>
        )}
      </div>
      <p className="text-xs text-resume-text-secondary mb-2">{description}</p>
      {highlights && highlights.length > 0 && (
        <ul className="mb-3 space-y-1 text-xs text-resume-text-secondary list-disc pl-4">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-1.5">
        {techs.map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
      </div>
    </div>
  )
}
