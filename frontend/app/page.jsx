import Footer from "@/shared/ui/layouts/Footer";
import Header from "@/shared/ui/layouts/Header";
import Cta from "@/features/home/components/Cta";
import Faq from "@/features/home/components/Faq";
import Features from "@/features/home/components/Features";
import Hero from "@/features/home/components/Hero";
import Howworks from "@/features/home/components/Howworks";
import Pricing from "@/features/home/components/Pricing";
import Support from "@/features/home/components/Support";
import Testimonials from "@/features/home/components/Testimonials";
import React from "react";
import Brands from "@/components/common/Brands";

export const metadata = {
  title:
    "Munaqadh - Donation Platform.",
  description:
    "Munaqadh - Donation Platform.",
};
export default function HomePage() {
  return (
    <>
      <div className=" page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg dom-ready bp-xl bp-xxl">
        <Header />
        <div id="wrapper" className="wrap">
          <Hero />
          <div
            id="companies_sponsores"
            className="companies-sponsores section panel overflow-hidden rounded-bottom-3 bg-secondary dark:bg-gray-700 dark:bg-opacity-50"
          >
            <div className="section-outer panel pb-4 sm:pb-8 xl:pb-9">
              <div className="container sm:max-w-lg xl:max-w-xl">
                <div className="section-inner panel">
                  <div
                    className="brands panel vstack gap-3 sm:gap-4 xl:gap-5 text-center"
                    data-anime="onview: -100; translateY: [-16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
                  >
                    <p className="fs-6 sm:fs-5 lg:fs-4 xl:fs-3 fw-medium">
                      14,000+ customers large and small rely on us for trust
                      transformation
                    </p>
                    <div className="block-panel panel">
                      <div className="element-brands text-black dark:text-white mask-x">
                        <Brands />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Features />
          <hr className="w-100 m-0 d-block lg:d-none" />
          <Cta />
          <Howworks />
          <Pricing />
          <Testimonials />
          <Faq />
          <Support />
        </div>
        <Footer />
      </div>
    </>
  );
}
