import { userDetails } from '../../data/user'

export const AboutContent = () => {
  return (
    <section className="space-y-8 py-10">
      <div className=" lg:w-[80%] lg:py-5 space-y-8">
        <h1 className=" text-primary font-bold text-3xl sm:text-2xl lg:text-4xl">
          Hi &#128075;, I'm {userDetails.name}
        </h1>
        <p className=" text-primary text-sm">{userDetails.about}</p>
        <div className=" space-y-2">
          <h2 className=" text-primary text-2xl sm:text-xl lg:text-3xl font-semibold">Expertise:</h2>
          {userDetails.expertise.map((point, index) => (
            <p key={index} className=" text-primary text-sm py-2">
              {point}
            </p>
          ))}
        </div>
        <div className=" space-y-2">
          <h2 className=" text-primary text-2xl sm:text-xl lg:text-3xl font-semibold">Let's Connect:</h2>
          {userDetails.connect.map((point, index) => (
            <p key={index} className=" text-primary text-sm py-2">
              {point}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
