"use client";
import { openMobileMenu } from "@/utlis/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);

  useEffect(() => {
    setPrevScrollPos(window.pageYOffset);
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      setScrollingUp(currentScrollPos <= 80 ? false : isScrollingUp);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <header
      className={`uc-header header-eight uc-navbar-sticky-wrap z-999 uc-dark uc-sticky  ${
        scrollingUp ? " uc-sticky-below uc-sticky-fixed headerFixed" : ""
      }`}
      data-uc-sticky="start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
      style={{}}
    >
      <nav
        className={`uc-navbar-container uc-navbar-float ft-tertiary z-1 uc-navbar-transparent`}
        data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
        style={{ transform: "translateY(0px)", opacity: 1 }}
      >
        <div className="uc-navbar-main" style={{ "--uc-nav-height": "80px" }}>
          <div className="container">
            <div
              className="uc-navbar min-h-64px lg:min-h-80px text-gray-900 dark:text-white px-1 lg:px-2 bg-white dark:bg-tertiary-600 bg-opacity-90 rounded-2 mt-2 shadow-xs"
              data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;"
            >
              <div className="uc-navbar-left">
                <div className="uc-logo ltr:ms-1 rtl:me-1">
                  <Link
                    className="panel text-none"
                    href={`/home-8`}
                    style={{ width: 140 }}
                  >
                    <Image
                      className="dark:d-none"
                      alt="Lexend"
                      src="/assets/images/common/logo-8-light.svg"
                      width={148}
                      height={39}
                    />
                    <Image
                      className="d-none dark:d-block"
                      alt="Lexend"
                      src="/assets/images/common/logo-8-dark.svg"
                      width={148}
                      height={39}
                    />
                  </Link>
                </div>
              </div>
              <div className="uc-navbar-center  ">
                <ul className="uc-navbar-nav fs-5 gap-3 lg:gap-4 d-none lg:d-flex">
                  <li>
                    <Link href={`/blog-sidebar`}>Insights</Link>
                  </li>
                  <li>
                    <Link href={`/page-pricing-2`}>Pricing</Link>
                  </li>
                  <li>
                    <Link href={`/page-about`}>About</Link>
                  </li>
                </ul>
              </div>
              <div className="uc-navbar-right">
                <Link
                  className="uc-link fs-5 text-dark dark:text-white"
                  href={`/sign-in`}
                >
                  Log in
                </Link>
                <Link
                  className="btn btn-md btn-tertiary dark:bg-white dark:text-dark border fs-5 lg:px-3 d-none lg:d-inline-flex shadow-xs"
                  href={`/sign-up`}
                >
                  Sign up
                </Link>
                <a
                  className="btn btn-md btn-tertiary w-48px h-48px d-inline-flex lg:d-none"
                  onClick={openMobileMenu}
                >
                  <i className="icon icon-2 unicon-menu" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
