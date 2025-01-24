// src/servicesData.js

//import { GiTooth, GiLipstick, GiSurgicalScissors } from "react-icons/gi";


export const servicesData = [
    {
      title: "General Dentistry",
      description: "Routine dental care to maintain healthy teeth and gums.",
      services: [
        {
          title: "Dental Checkups",
          path: '/general/chekups'
        },
        {
          title: "Teeth Cleaning",
          path: '/general/cleaning'
        },
        {
          title: "Fluoride Treatments",
          path: '/general/flouride'
        },
        {
          title: "Oral Cancer Screening",
          path: '/general/screening'
        },
        {
          title: "Sealants",
          path: '/general/sealants'
        },
      ],
    },
    {
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with aesthetic dental procedures.",
      services: [
        {
          title: "Teeth Whitening",
          path: '/cosmetic/whitening'
        },
        {
          title: "Veneers",
          path: '/cosmetic/veneers'
        },
        {
          title: "Dental Bonding",
          path: '/cosmetic/bonding'
        },
        {
          title: "Smile Makeovers",
          path: '/cosmetic/makeovers'
        },
        {
          title: "Cosmetic Crowns",
          path: '/cosmetic/crowns'
        },
      ],
    },
    {
      title: "Surgical Dentistry",
      description: "Specialized dental surgeries for complex cases.",
      services: [
        {
          title: "Wisdom Teeth Removal",
          path: '/surgical/removal'
        },
        {
          title: "Dental Implants",
          path: '/surgical/implants'
        },
        {
          title: "Bone Grafting",
          path: '/surgical/grafting'
        },
        {
          title: "Apicoectomy",
          path: '/surgical/apicoectomy'
        },
        {
          title: "Jaw Surgery",
          path: '/surgical/jaw'
        },
      ],
    },
  ];