import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import CompanionCard from '@/components/companionCard'
import CompanionsList from '@/components/CampionsList'
import { recentSessions } from '@/constants'

const page = () => {
  return (
    <main>
   <h1 className='text-2xl '>Popular Companions</h1>
   <section className='home-section'>
  <CompanionCard 
  id="123"   
  name="Neura the Brainy Explorer"
  topic="science"
  subject="Science"
  duration={45}
  color="#ffda6e"
  />
  <CompanionCard 
  id="156"   
  name="Countsy the Number Wizard"
  topic="Deprative & Integrals"
  subject="Maths" 
  duration={45}
  color="#e5d0ff"
  />
    <CompanionCard 
  id="789"   
  name="Verbal the Vocabulary Builder"
  topic="Language"
  subject="English Literature"
  duration={45}
  color="#BDE7FF"
  />
   </section>
 <section className="home-section">
            <CompanionsList
                title="Recently completed sessions"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full"
            />
            <CTA />
        </section>
    </main>
  )
}

export default page
