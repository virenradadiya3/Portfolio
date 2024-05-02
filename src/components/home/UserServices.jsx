import { ServiceCard } from './ServiceCard'
import { userDetails } from '../../data/user'
import { serviceCards } from '../../data/services'

export const UserServices = () => {
  return (
    <section className=" max-sm:pb-10 space-y-16">
      <h2 className=" text-primary sm:max-w-[40%] font-bold max-phone:text-xl max-md:text-2xl md:text-3xl">
        {userDetails.experience}+ Years of Working Experience
      </h2>
      <div className=" flex max-sm:flex-col sm:flex-row justify-between items-center max-sm:space-y-5">
        {serviceCards.map((card) => (
          <ServiceCard key={card.id} img={card.image} title={card.title} description={card.description} />
        ))}
      </div>
    </section>
  )
}
