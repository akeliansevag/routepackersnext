import Image from 'next/image'
import HeroBox from '../components/Hero'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import WhyChooseUs from '@/components/WhyChooseUs'
import StatesList from '@/components/StatesList'
import CountryMap from '@/components/CountryMap'

export default function Home() {
  return (
    <main className='flex justify-center items-center'>
      <section className={`lg:w-[1200px] w-full flex flex-col justify-center items-center gap-y-20`}>
        <HeroBox highYellow={'DISCOVER'} highWhite={'WITH OUR'} downYellow={'LOGISTICS'} downWhite={'INTEGRATED'} />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <StatesList />
        <CountryMap />
      </section>
    </main>
  )
}