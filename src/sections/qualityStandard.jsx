import React from 'react';
import '../styles/qualityStandard.css'
import { ShieldCheck, Heart, Truck } from 'lucide-react';

export default function QualityStandards() {
  const standards = [
    {
      icon: <ShieldCheck size={24} />,
      title: "100% Organic Dairy",
      description: "Sourced exclusively from local family farms with grass-fed cows."
    },
    {
      icon: <Heart size={24} />,
      title: "Active Probiotics",
      description: "Contains 5 live strains to support natural digestive wellness."
    },
    {
      icon: <Truck size={24} />,
      title: "Temperature Controlled",
      description: "Shipped in cold thermal packaging to ensure peak freshness."
    }
  ];

  return (
    <section className="section">
      <div className="standards-grid">
        {standards.map((item, idx) => (
          <div key={idx} className="standard-item">
            <div className="standard-icon">{item.icon}</div>
            <div>
              <h4 className="standard-title">{item.title}</h4>
              <p className="standard-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}