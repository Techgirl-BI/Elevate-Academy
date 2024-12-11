import React from 'react';
import { FaLaptopCode } from "react-icons/fa";
import { TfiPieChart } from "react-icons/tfi";
import { LuTarget } from "react-icons/lu";
import { FcClock } from "react-icons/fc";
import "../styles/features.css";

const Features = () => {
    const features = [
        {
            icon: TfiPieChart,
            course: "Financial Literacy",
            description: "Master personal finance, investing, and money management skills"
        },
        {
            icon: LuTarget,
            course: "Personal Development",
            description: "Enhance soft skills, mindset, and personal growth strategies"
        },
        {
            icon: FcClock,
            course: "Life Skills",
            description: "Practical skills for career, relationships, and everyday success"
        }
    ];

    return (
        <section className="features">
            <h1 className="what-we-offer">What We Offer</h1>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="features_tiles">
                        <feature.icon className="icon" />
                        <h2 className="course">{feature.course}</h2>
                        <p className="description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;