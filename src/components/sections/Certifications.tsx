"use client";

import { FocusCards } from "@/components/ui/Focus-cards";
import WaveLine from "../ui/WaveLine";

import stanford from "../../../public/certifications/stanford.png";
import aws_cloud from "../../../public/certifications/aws_clod.png";
import aws_genai from "../../../public/certifications/aws_genai.png";
import palo_alto from "../../../public/certifications/palo_alto.png";

const Certifications = () => {
  const cards = [
    {
      title: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
      desc: "Stanford Online",
      src: stanford,
      link: "https://coursera.org/share/78b40646266fd1b6802e4e81986d91f6"
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations - Training Badge",
      desc: "AWS Training and Certification",
      src: aws_cloud,
      link: "https://www.credly.com/badges/c2e0d03f-c361-457b-8caf-c3020ecd4ef9/linked_in_profile"
    },
    {
      title: "AWS Academy Graduate - Generative AI Foundations - Training Badge",
      desc: "AWS Training and Certification",
      src: aws_genai,
      link: "https://www.credly.com/badges/9bad01fb-6be0-459d-963a-220197c73c4c/linked_in_profile"
    },
    {
      title: "Cybersecurity Foundation",
      desc: "Palo Alto Networks",
      src: palo_alto,
      link: "https://drive.google.com/file/d/1gRj8rkzVSz0V5PEkH2-RGyM5QI08LO2z/view"
    },
  ];

  return (
    <section
      id="certifications"
      className="w-full min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      <div
        className="
          max-w-7xl mx-auto 
          px-8 sm:px-12 lg:px-20
          flex flex-col justify-center
          min-h-screen
          pt-12
          pb-16
        "
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 md:mb-12 text-center">
          Certifications
          <div className="w-3/4 sm:w-full max-w-[400px] mt-2 mx-auto">
            <WaveLine />
          </div>
        </h2>

        <FocusCards cards={cards} />
      </div>
    </section>
  );
};

export default Certifications;
