import { forwardRef } from 'react'

export const ProjectCard = forwardRef(
  ({ projectName, id, image, title, titleDesc, descPoints, technologies, align }, ref) => {
    return (
      <div
        ref={id === projectName ? ref : null}
        className={` flex flex-col ${
          align === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } lg:justify-between lg:items-center p-5 rounded-md border-[1px] border-text-primary`}
      >
        <div className=" w-full lg:w-[42%] xl:w-[48%] flex justify-center">
          <img src={image} className=" w-full sm:max-lg:w-[75%] rounded-md" />
        </div>
        <div className=" w-full lg:w-[54%] xl:w-[48%] space-y-7 py-10 lg:py-3">
          <div className=" text-primary font-semibold text-xl sm:text-2xl xl:text-3xl flex space-x-2">
            <h2>{title}</h2>
            <h2 className=" text-gray-primary font-normal">—</h2>
            <h2 className=" text-gray-primary font-normal">{titleDesc}</h2>
          </div>
          <div className=" space-y-2">
            {descPoints.map((point) => (
              <p key={point.id} className=" text-primary text-sm">
                {`• ${point.description}`}
              </p>
            ))}
          </div>
          <div>
            <h3 className=" text-primary font-semibold text-lg">Tools & Technologies : </h3>
            <div className=" flex flex-wrap">
              {technologies.map((technology) => (
                <img
                  key={technology.id}
                  src={technology.logo}
                  className=" w-12 h-12 flex justify-center items-center mx-2 mt-3 rounded-sm size-10"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
)
