// app/page.tsx
import React from "react";
import HeroModule from "@/components/heroModule";

export default function Home() {
  return (
     <React.Fragment>
      <HeroModule
        header="Marketing websites made easy"
        body="Combining the power of Storybook and Contentful unlocks a seamless and efficient workflow, empowering developers and content creators to effortlessly collaborate and deliver captivating user experiences with pixel-perfect precision and dynamic content integration."
        image={{
          title: "Bench overlooking mountains",
          url: "/heroImage.jpg",
        }}
      />
      <HeroModule
        header="Transform your workflow"
        body="This tutorial is more than just a guide—it's a journey that will leave an indelible mark on your team's memory, almost as unforgettable as a Storybook™. Your team will be bursting with satisfaction, so content that you might even call them Contentful™. Get ready to embark on an exhilarating adventure of web creation!"
        button={{
          text: "Open tutorial",
          href: "https://medium.com/@alyssakirstine",
        }}
      />
    </React.Fragment>
  );
}