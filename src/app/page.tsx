"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Calendar, ChefHat, Heart, Palmtree, Waves } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="LMAO Hotel Hawaii"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Paradise Awaits in Hawaii"
          description="Experience luxury and tranquility at LMAO Hotel, where tropical dreams become reality. Enjoy breathtaking ocean views, world-class amenities, and authentic Hawaiian hospitality."
          tag="Luxury Resort"
          tagIcon={Palmtree}
          buttons={[
            { text: "Book Your Stay", href: "contact" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          imageSrc="https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury Hawaiian resort with ocean view"
          imagePosition="right"
        />
      </div>
      
      <div id="about" data-section="about">
        <TextSplitAbout
          title="LMAO Hotel Hawaii"
          description={[
            "Nestled on the pristine shores of Hawaii, LMAO Hotel offers an unparalleled luxury experience where modern comfort meets traditional Hawaiian culture.",
            "Our commitment to excellence ensures every guest enjoys world-class service, stunning accommodations, and unforgettable memories in paradise."
          ]}
          buttons={[
            { text: "Learn More", href: "amenities" }
          ]}
        />
      </div>
      
      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Luxury Accommodations"
          description="Choose from our collection of beautifully appointed rooms and suites, each offering stunning views and premium amenities"
          tag="Rooms & Suites"
          products={[
            {
              id: "1",
              name: "Ocean View Room",
              price: "$350/night",
              imageSrc: "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ocean view room with balcony"
            },
            {
              id: "2",
              name: "Sunset Suite",
              price: "$550/night",
              imageSrc: "https://images.pexels.com/photos/6129991/pexels-photo-6129991.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury suite with sunset view"
            },
            {
              id: "3",
              name: "Beach Villa",
              price: "$850/night",
              imageSrc: "https://images.pexels.com/photos/1198838/pexels-photo-1198838.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Private beach villa"
            }
          ]}
        />
      </div>
      
      <div id="amenities" data-section="amenities">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Indulge in our exceptional facilities designed to enhance your Hawaiian getaway"
          tag="Hotel Features"
          features={[
            {
              title: "Infinity Pool",
              description: "Relax in our stunning infinity pool overlooking the Pacific Ocean, perfect for sunset cocktails and morning swims",
              icon: Waves,
              button: { text: "View Pool", href: "contact" }
            },
            {
              title: "Spa & Wellness",
              description: "Rejuvenate your body and mind with traditional Hawaiian treatments and modern wellness therapies",
              icon: Heart,
              button: { text: "Book Spa", href: "contact" }
            },
            {
              title: "Beach Activities",
              description: "Enjoy complimentary water sports, snorkeling gear, and guided beach activities right at our doorstep",
              icon: Waves,
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "Fine Dining",
              description: "Savor authentic Hawaiian cuisine and international dishes at our award-winning oceanfront restaurant",
              icon: ChefHat,
              button: { text: "View Menu", href: "contact" }
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Read about the unforgettable experiences our guests have had at LMAO Hotel Hawaii"
          tag="Guest Reviews"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Travel Blogger",
              company: "Wanderlust Adventures",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4458357/pexels-photo-4458357.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Happy guest Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Honeymooner",
              company: "Just Married",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6806748/pexels-photo-6806748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Couple Michael and Lisa Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Family Vacationer",
              company: "Rodriguez Family",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4609678/pexels-photo-4609678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez with family"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Business Executive",
              company: "Tech Solutions Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34428372/pexels-photo-34428372.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Business traveler David Kim"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          title="Ready to Experience Paradise?"
          description="Book your unforgettable stay at LMAO Hotel Hawaii. Our team is ready to help you plan the perfect tropical getaway."
          tagIcon={Calendar}
          inputPlaceholder="Enter your email"
          buttonText="Get Availability"
          termsText="By submitting, you agree to receive booking information and special offers from LMAO Hotel Hawaii."
          imageSrc="https://images.pexels.com/photos/4319881/pexels-photo-4319881.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Beautiful Hawaiian landscape"
          mediaPosition="right"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "contact" },
                { label: "Spa", href: "contact" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Concierge", href: "contact" },
                { label: "Wedding Events", href: "contact" },
                { label: "Business Center", href: "contact" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Location", href: "contact" },
                { label: "Reviews", href: "testimonials" },
                { label: "Careers", href: "contact" }
              ]
            }
          ]}
          logoText="LMAO Hotel Hawaii"
          copyrightText="© 2024 LMAO Hotel Hawaii. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}