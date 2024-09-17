import React from "react";
import LogoImg from "/hireme.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import faq from "../data/faq.json";
import companies from "../data/companies.json";
import Autoplay from "embla-carousel-autoplay";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dreame Job{" "}
          <span className="flex items-center gap-2 sm:gap-6">
            and get
            <img
              className="h-12 sm:h-24 lg:h-32 mt-6"
              src={LogoImg}
              alt="Logo of website"
            />{" "}
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className="flex items-center justify-center gap-6">
        {/* buttons */}
        <Link to="/jobs">
          <Button variant="blue" size="xl">
            Find New Jobs
          </Button>
        </Link>
        <Link to="/post-jobs">
          <Button variant="destructive" size="xl">
            Post New Jobs
          </Button>
        </Link>
      </div>
      {/* carousel */}
      <Carousel
        className="w-full py-10"
        plugins={[
          Autoplay({
            delay: 1500,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="flex gpa-5 sm:gap-10 items-center">
          {companies.map(({ name, id, path }) => {
            return (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                <img
                  src={path}
                  alt={name}
                  className="h-9 sm:h-14 object-contain"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* banner */}
      <img src="public/banner.png" alt="banner" className="w-full" />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Search and apply for jobs, track applications, and more</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Post jobs, manage applications, and find the best candidates</p>
          </CardContent>
        </Card>
      </section>

      <Accordion type="single" collapsible>
        {faq.map(({ question, answer }, index) => {
            return (
              <AccordionItem key={index} value={`item-${index+1}`}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
            )
        })}
      </Accordion>
    </main>
  );
};

export default LandingPage;
