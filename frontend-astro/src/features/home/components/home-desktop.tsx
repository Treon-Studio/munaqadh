import { useState, useEffect, useCallback } from 'react';
import PageLayout from '@/shared/ui/layouts/page-layout';
import FooterSection from '@/shared/ui/layouts/footer';
import TestimonialCarousel from './testimonial-carousel';
import { ButtonDark, ButtonLight } from './home-button';
import { pricingTiers, whyChooseUsReasons, companyInfo } from '@/constants/data';


function HeaderSubcontent() {
    return <div className="flex flex-col md:flex-row items-start justify-between gap-[24px] w-full text-[rgb(242,242,242)]" data-name="Header subcontent">
        <div className="flex-1 max-w-[623px]">
            <h2 className="text-[32px] font-medium font-['Geist:Medium'] tracking-[-1.6px] leading-[1.09]">{companyInfo.tagline}</h2>
        </div>
        <div className="flex-1 max-w-[370px]">
            <h3 className="text-[18px] font-normal font-['Geist:Regular'] tracking-[-0.36px] leading-[1.35]">{`We've been serving the ${companyInfo.location} area with expert legal counsel since ${companyInfo.founded}.`}</h3>
        </div>
    </div>;
}

function HeaderContent() {
    return <div className="flex flex-col gap-[78px] items-start justify-end w-full max-w-[1180px]" data-name="Header content">
        <h1 className="text-[120px] font-normal font-['Geist:Regular'] text-[rgb(242,242,242)] tracking-[-3.6px] leading-[0.95] whitespace-nowrap font-[Libre_Baskerville]">{companyInfo.name}</h1>
        <HeaderSubcontent />
    </div>;
}

function HeaderSection() {
    return <header 
        className="bg-center bg-cover h-[800px] relative w-full"
        data-name="Header section"
        id="node-1_428"
        aria-label="Two women sitting at a modern table talking with a city view behind them."
        style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://is3.cloudhost.id/raizora/wayne-law/header-desktop.webp')`
        }}
    >
        <div className="flex flex-col justify-end h-full">
            <div className="w-full max-w-[1280px] mx-auto">
                <div className="flex flex-col gap-[86px] items-start justify-end h-[800px] py-[70px] px-[50px]">
                    <HeaderContent />
                </div>
            </div>
        </div>
    </header>;
}

function WelcomeBodyParagraphs() {
    return <div className="flex flex-col md:flex-row gap-[48px] w-full max-w-[942px]" data-name="Welcome body paragraphs">
        <div className="flex-1">
            <p className="text-[18px] font-normal font-['Geist:Regular'] text-black tracking-[-0.36px] leading-[1.35]">{`${companyInfo.name} has been a pillar of the ${companyInfo.location} legal community, providing expert legal counsel across a wide spectrum of practice areas. We are more than just attorneys, we are trusted advisors, dedicated advocates, and strategic partners committed to achieving the best possible outcomes for our clients.`}</p>
        </div>
        <div className="flex-1">
            <p className="text-[18px] font-normal font-['Geist:Regular'] text-black tracking-[-0.36px] leading-[1.35]">We combine decades of experience with a deep understanding of the complexities of Indonesian law. Our team of seasoned trial attorneys boasts a proven track record of success in courtrooms throughout {companyInfo.location} and beyond. We pride ourselves on our comprehensive expertise, covering nearly every field of law, ensuring that whatever your legal challenge, we have the knowledge and experience to guide you.</p>
        </div>
    </div>;
}

function WelcomeBodyCopy() {
    return <div className="flex flex-col gap-[50px] items-start justify-start w-full" data-name="Welcome body copy">
        <WelcomeBodyParagraphs />
        <ButtonDark />
    </div>;
}

function WelcomeContent() {
    return <div className="flex flex-col gap-[60px] items-center justify-center max-w-[1180px] w-full" data-name="Welcome content">
        <div className="w-full text-center">
            <h2 className="text-[32px] font-medium font-['Geist:Medium'] text-black tracking-[-1.6px] leading-[1.09] font-[Libre_Baskerville]">{`Welcome to ${companyInfo.name}`}</h2>
        </div>
        <WelcomeBodyCopy />
    </div>;
}

function WelcomeSection() {
    return <div className="bg-[rgb(247,_244,_235)] relative w-full" data-name="Welcome section">
        <div className="w-full max-w-[1280px] mx-auto">
            <div className="flex flex-col items-center justify-center py-[135px] px-[50px] w-full">
                <WelcomeContent />
            </div>
        </div>
    </div>;
}

function ImageBreakerSection() {
    return <div 
        className="[aspect-ratio:1280_/_625] bg-center bg-cover bg-no-repeat relative shrink-0 w-full"
        data-name="Image breaker section"
        id="node-1_443"
        aria-label="Photo of rows of books in a library with marble busts."
        style={{
            backgroundImage: `url('https://is3.cloudhost.id/raizora/wayne-law/home-section-1.webp')`
        }}
    >
        <div className="[border-radius:inherit] relative size-full">
            <div className="[aspect-ratio:1280_/_625] block relative size-full"/>
        </div>
    </div>;
}

function OfferingSubhead() {
    return <div className="flex items-center justify-start w-full mb-[32px]" data-name="Offering subhead">
        <h2 className="text-[32px] font-medium font-['Geist:Medium'] text-[rgb(247,244,235)] tracking-[-1.6px] leading-[1.09] whitespace-nowrap font-[Libre_Baskerville]">What We Offer</h2>
    </div>;
}

function OfferingListItems() {
    const services = [
        "Business formation", "Contract drafting", "Mergers and Acquisitions", 
        "Property Protection", "Employment Law", "Corporate Governance", 
        "Shareholder Disputes", "+More"
    ];

    return <div className="flex flex-col items-start justify-start capitalize" data-name="Offering list items">
        {services.map((service, index) => (
            <p key={index} className={`text-[76px] font-normal font-['Geist:Regular'] tracking-[-4.56px] leading-[0.95] whitespace-nowrap ${
                service === '+More' ? 'text-[rgba(255,240,196,0.5)]' : 'text-[rgb(247,244,235)]'
            }`}>
                {service}
            </p>
        ))}
    </div>;
}

function OfferingList() {
    return <div className="flex flex-col gap-[64px] w-full items-start justify-start" data-name="Offering list">
        <OfferingListItems />
        <ButtonLight />
    </div>;
}

function OfferingContent() {
    return <div className="flex flex-col items-start justify-start w-full max-w-[1180px]" data-name="Offering content">
        <OfferingSubhead />
        <OfferingList />
    </div>;
}

function OfferingSection() {
    return <div className="bg-[rgb(13,_31,_8)] min-h-[917px] relative w-full" data-name="Offering section">
        <div className="w-full max-w-[1280px] mx-auto">
            <div className="flex flex-col items-center justify-center py-[93px] px-[50px] min-h-[917px]">
                <OfferingContent />
            </div>
        </div>
    </div>;
}

function OurClientsIntro() {
    return <div className="flex flex-col gap-[32px] items-center justify-start text-center w-full" data-name="Our clients intro">
        <h2 className="text-[32px] font-medium font-['Geist:Medium'] text-black tracking-[-1.6px] leading-[1.09] font-[Libre_Baskerville]">Hear From Our Clients</h2>
        <div className="max-w-[480px]">
            <p className="text-[18px] font-normal font-['Geist:Regular'] text-black tracking-[-0.36px] leading-[1.35]">{`We believe that our clients' experiences speak volumes about the quality of our legal services. Here's what some of them have to say:`}</p>
        </div>
    </div>;
}

function OurClientsOutro() {
    return <div className="flex items-center justify-center w-full" data-name="Our clients outro">
        <div className="max-w-[480px] text-center">
            <p className="text-[18px] font-normal font-['Geist:Regular'] text-black tracking-[-0.36px] leading-[1.35]">{` Let us help you navigate your legal journey with confidence and peace of mind. Contact ${companyInfo.name} today.`}</p>
        </div>
    </div>;
}

function OurClientsContent() {
    return <div className="flex flex-col gap-[56px] items-center justify-start max-w-[942px] w-full" data-name="Our clients content">
        <OurClientsIntro />
        <TestimonialCarousel />
        <OurClientsOutro />
    </div>;
}

function PricingCard({ title, price, period, features, buttonText, isPopular = false }) {
    return <div className={`flex flex-col gap-[32px] p-[40px] rounded-[4px] border-2 transition-all duration-200 ease-out ${isPopular ? 'border-[rgb(49,17,15)] bg-[rgb(247,244,235)]' : 'border-[rgba(0,0,0,0.1)] bg-white hover:border-[rgba(49,17,15,0.3)]'}`} data-name="Pricing card">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center justify-between">
                <h3 className="text-[24px] font-medium font-['Geist:Medium'] text-black tracking-[-0.72px] leading-[1.1] font-[Libre_Baskerville]">{title}</h3>
                {isPopular && <div className="bg-[rgb(49,17,15)] text-white px-[12px] py-[4px] rounded-[2px] text-[12px] font-medium font-['Geist:Medium'] tracking-[-0.24px]">Most Popular</div>}
            </div>
            <div className="flex items-baseline gap-[8px]">
                <span className="text-[48px] font-normal font-['Geist:Regular'] text-black tracking-[-2.4px] leading-[0.9]">{price}</span>
                <span className="text-[16px] font-normal font-['Geist:Regular'] text-[rgba(0,0,0,0.6)] tracking-[-0.32px] leading-[1.2]">{period}</span>
            </div>
        </div>
        <div className="flex flex-col gap-[16px]">
            {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-[12px]">
                    <div className="w-[16px] h-[16px] mt-[2px] flex items-center justify-center">
                        <div className="w-[6px] h-[6px] bg-[rgb(49,17,15)] rounded-full"></div>
                    </div>
                    <p className="text-[16px] font-normal font-['Geist:Regular'] text-black tracking-[-0.32px] leading-[1.4]">{feature}</p>
                </div>
            ))}
        </div>
        <div className={`border flex flex-row gap-[10px] items-center justify-center px-[32px] py-[20px] rounded-[2px] cursor-pointer transition-all duration-200 ease-out ${isPopular ? 'bg-[rgb(49,17,15)] border-[rgb(49,17,15)] hover:bg-transparent hover:text-[rgb(49,17,15)] active:bg-[rgb(39,7,5)]' : 'bg-white border-[rgb(49,17,15)] text-[rgb(49,17,15)] hover:bg-[rgb(49,17,15)] hover:text-white active:bg-[rgb(39,7,5)] active:text-white'}`}>
            <div className={`font-['Geist:Medium'] font-medium text-center tracking-[-0.32px] text-[16px] leading-[1.2] transition-colors duration-200 ${isPopular ? 'text-white hover:text-[rgb(49,17,15)]' : 'text-[rgb(49,17,15)] hover:text-white'}`}>
                <p>{buttonText}</p>
            </div>
        </div>
    </div>;
}

function PricingGrid() {
    return <div className="grid grid-cols-3 gap-[32px] w-full max-w-[1180px]" data-name="Pricing grid">
        {pricingTiers.map((tier, index) => (
            <PricingCard key={index} {...tier} />
        ))}
    </div>;
}

function PricingContent() {
    return <div className="flex flex-col gap-[64px] items-center justify-center w-full max-w-[1180px]" data-name="Pricing content">
        <div className="flex flex-col gap-[24px] items-center text-center">
            <h2 className="text-[40px] font-medium font-['Geist:Medium'] text-black tracking-[-2px] leading-[1.1] font-[Libre_Baskerville]">Legal Services Pricing</h2>
            <p className="text-[18px] font-normal font-['Geist:Regular'] text-[rgba(0,0,0,0.7)] tracking-[-0.36px] leading-[1.4] max-w-[600px]">Transparent pricing for quality legal services. Choose the option that best fits your needs.</p>
        </div>
        <PricingGrid />
    </div>;
}

function PricingSection() {
    return <div className="bg-[rgb(247,244,235)] relative w-full" data-name="Pricing section">
        <div className="w-full max-w-[1280px] mx-auto">
            <div className="flex flex-col items-center justify-center py-[120px] px-[50px]">
                <PricingContent />
            </div>
        </div>
    </div>;
}

function WhyChooseUsCard({ number, title, description }) {
    return <div className="flex flex-col gap-[24px] p-[40px] bg-white rounded-[4px] border border-[rgba(255,255,255,0.1)] transition-all duration-200 ease-out hover:border-[rgba(255,255,255,0.2)]" data-name="Why choose us card">
        <div className="flex items-center gap-[16px]">
            <div className="w-[48px] h-[48px] bg-[rgb(49,17,15)] rounded-[4px] flex items-center justify-center">
                <span className="text-[24px] font-medium font-['Geist:Medium'] text-white tracking-[-0.72px] leading-[1.0]">{number}</span>
            </div>
            <h3 className="text-[24px] font-medium font-['Geist:Medium'] text-black tracking-[-0.72px] leading-[1.1] font-[Libre_Baskerville]">{title}</h3>
        </div>
        <p className="text-[16px] font-normal font-['Geist:Regular'] text-[rgba(0,0,0,0.7)] tracking-[-0.32px] leading-[1.4]">{description}</p>
    </div>;
}

function WhyChooseUsGrid() {
    return <div className="grid grid-cols-2 gap-[32px] w-full max-w-[1180px]" data-name="Why choose us grid">
        {whyChooseUsReasons.map((reason, index) => (
            <WhyChooseUsCard key={index} {...reason} />
        ))}
    </div>;
}

function WhyChooseUsContent() {
    return <div className="flex flex-col gap-[64px] items-center justify-center w-full max-w-[1180px]" data-name="Why choose us content">
        <div className="flex flex-col gap-[24px] items-center text-center">
            <h2 className="text-[40px] font-medium font-['Geist:Medium'] text-white tracking-[-2px] leading-[1.1] font-[Libre_Baskerville]">Why Choose {companyInfo.name}</h2>
            <p className="text-[18px] font-normal font-['Geist:Regular'] text-[rgba(255,255,255,0.8)] tracking-[-0.36px] leading-[1.4] max-w-[600px]">Experience the difference that decades of legal expertise and unwavering commitment to our clients makes.</p>
        </div>
        <WhyChooseUsGrid />
    </div>;
}

function WhyChooseUsSection() {
    return <div className="bg-[rgb(13,_31,_8)] relative w-full" data-name="Why choose us section">
        <div className="w-full max-w-[1280px] mx-auto">
            <div className="flex flex-col items-center justify-center py-[120px] px-[50px]">
                <WhyChooseUsContent />
            </div>
        </div>
    </div>;
}

function OurClientsSection() {
    return <div className="bg-white relative w-full" data-name="Our clients section">
        <div className="w-full max-w-[1280px] mx-auto">
            <div className="flex flex-col gap-[74px] items-center justify-start py-[116px] px-[50px]">
                <OurClientsContent />
                <ButtonDark />
            </div>
        </div>
    </div>;
}

function ImageDividerSection2() {
    return <div 
        className="[aspect-ratio:1280_/_625] [background-size:auto,_cover] bg-[position:0%_0%,_50%_50%] relative shrink-0 w-full"
        data-name="Image divider section 2"
        id="node-1_468"
        aria-label="Photo of a study hall with wooden tables and chairs."
        style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), url('https://is3.cloudhost.id/raizora/wayne-law/home-section-2.webp')`
        }}
    >
        <div className="[border-radius:inherit] relative size-full">
            <div className="[aspect-ratio:1280_/_625] block relative size-full"/>
        </div>
    </div>;
}

function Main() {
    return <main className="flex flex-col w-full" data-name="Main" tabIndex="-1">
        <WelcomeSection />
        <ImageBreakerSection />
        <OfferingSection />
        <OurClientsSection />
        <PricingSection />
        <ImageDividerSection2 />
        <WhyChooseUsSection />
    </main>;
}

export default function Desktop() {
    return (
        <PageLayout hasTopPadding={false}>
            <div className="bg-white flex flex-col w-full min-h-screen" data-name="Desktop">
                <HeaderSection />
                <Main />
                <FooterSection />
            </div>
        </PageLayout>
    );
}