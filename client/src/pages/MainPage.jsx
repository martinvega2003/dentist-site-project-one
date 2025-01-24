import React from 'react'
import HeroSection from './sections/HeroSection'
import ServicesSection from './sections/ServicesSection'
import TestimonialsSection from './sections/TestimonialsSection'
import BenefitsSection from './sections/BenefitsSection'
import LeadMagnetSection from './sections/LeadMagnetSection'
import ContactSection from './sections/ContactSection'
import BlogSection from './sections/BlogSection'
import FAQSection from './sections/FAQSection'
import CarouselSection from './sections/CarouselSection'
import { ImagesSection } from './sections/ImagesSection'
import { ExtraDataSection } from './sections/ExtraDataSection'

export const MainPage = ({ setIsOptinVisible }) => {
  return (
    <>
        <HeroSection />
        <ExtraDataSection />
        <ServicesSection setIsVisible={setIsOptinVisible} />
        <ImagesSection />
        <CarouselSection />
        <BenefitsSection />
        <LeadMagnetSection setIsVisible={setIsOptinVisible} />
        <ContactSection />
        <BlogSection />
        <FAQSection />
    </>
  )
}
