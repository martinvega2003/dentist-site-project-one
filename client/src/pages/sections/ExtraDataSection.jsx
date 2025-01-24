import React from 'react';
import { FaCertificate, FaGraduationCap, FaShieldAlt } from "react-icons/fa";
import { DataCard } from '../../components/DataCard';


export const ExtraDataSection = () => {
  const certificates = [
    {
      title: "ADA Certified Excellence",
      text: "Recognized for meeting the highest standards in dental care and ethics.",
      icon: FaCertificate
    },
    {
      title: "CERP Accredited Provider",
      text: "Certified for advanced training and ongoing professional development.",
      icon: FaGraduationCap
    },
    {
      title: "ISO 9001 Certified Facility",
      text: "Accredited for maintaining exceptional quality management systems.",
      icon: FaShieldAlt
    },
  ]
  return (
    <div className='bg-white w-full py-20 px-12 flex flex-wrap justify-evenly gap-3 items-center text-white'>
      {
        certificates.map(certificate => (
          <DataCard
            title={certificate.title}
            text={certificate.text}
            icon={certificate.icon}
          />
        ))
      }
    </div>
  );
};
