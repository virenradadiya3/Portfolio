import { forwardRef, useState } from 'react'
import { Tabs, Tab } from '@mui/material'
import { ProjectCard } from './ProjectCard'
import { projectCards } from '../../data/projects'

export const AllProjects = forwardRef(({ projectName }, ref) => {
  const [value, setValue] = useState(0)
  const categories = ['mobile', 'web', 'backend']

  return (
    <div className=" space-y-20 py-20">
      <Tabs
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        aria-label="disabled tabs example"
        centered
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: 'var(--text-theme-primary)',
            height: 3,
          },
        }}
      >
        <Tab label="All" style={{ color: 'var(--text-primary)' }} />
        <Tab label="Mobile" style={{ color: 'var(--text-primary)' }} />
        <Tab label="Web" style={{ color: 'var(--text-primary)' }} />
        <Tab label="Backend" style={{ color: 'var(--text-primary)' }} />
      </Tabs>
      {projectCards.map((card) => {
        if (value !== 0) {
          return (
            card.category === categories[value - 1] && (
              <ProjectCard
                projectName={projectName}
                ref={ref}
                key={card.id}
                id={card.id}
                image={card.image}
                title={card.title}
                titleDesc={card.titleDescription}
                descPoints={card.descriptionPoints}
                technologies={card.technologies}
                align={card.align}
              />
            )
          )
        } else {
          return (
            <ProjectCard
              projectName={projectName}
              ref={ref}
              key={card.id}
              id={card.id}
              image={card.image}
              title={card.title}
              titleDesc={card.titleDescription}
              descPoints={card.descriptionPoints}
              technologies={card.technologies}
              align={card.align}
            />
          )
        }
      })}
    </div>
  )
})
