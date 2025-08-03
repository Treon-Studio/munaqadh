import imgHeaderSection from "figma:asset/25d082ad520df7a9a23130619f894277cebc9d70.png";
import imgImageBreakerSection from "figma:asset/7d11d9363b24d18bf891f3cb0eaa9eb909fbb467.png";
import imgImageDividerSection2 from "figma:asset/c187c8de4a3719b0bf6fce2d5297411e54a28f20.png";
import { ButtonDark, ButtonLight } from './shared/Buttons';
import TestimonialCarousel from './shared/TestimonialCarousel';
import FooterSection from './shared/Footer';
import PageLayout from './layouts/PageLayout';
import { pricingTiers, whyChooseUsReasons, companyInfo } from '../constants/data';

// Header Components
function HeaderSubcontent() {
    return <div className="flex flex-col items-start gap-[20px] w-full text-[rgb(242,242,242)]" data-name="Header subcontent">
        <div className="w-full">
            <h2 className="text-[24px] font-medium font-['Geist:Medium'] tracking-[-1.2px] leading-[1.1]">{companyInfo.tagline}</h2>
        </div>
        <div className="w-full">
            <h3 className="text-[16px] font-normal font-['Geist:Regular'] tracking-[-0.32px] leading-[1.4]">{`We've been serving the ${companyInfo.location} area with expert legal counsel since ${companyInfo.founded}.`}</h3>
        </div>
    </div>;
}

function HeaderContent() {
    return <div className="flex flex-col gap-[40px] items-start justify-end w-full" data-name="Header content">
        <h1 className="text-[48px] font-normal font-['Geist:Regular'] text-[rgb(242,242,242)] tracking-[-2.4px] leading-[0.95] font-[Libre_Baskerville]">{companyInfo.name}</h1>
        <HeaderSubcontent />
    </div>;
}

function HeaderSection() {
    return <header 
        className="bg-center bg-cover h-[600px] relative w-full"
        data-name="Header section"
        aria-label="Two women sitting at a modern table talking with a city view behind them."
        style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url('${imgHeaderSection}')`
        }}
    >
        <div className="flex flex-col justify-end h-full">
            <div className="w-full">
                <div className="flex flex-col gap-[40px] items-start justify-end h-[600px] py-[40px] px-[20px]">
                    <HeaderContent />
                </div>
            </div>
        </div>
    </header>;
}

// Welcome Section Components
function WelcomeBodyParagraphs() {
    return <div className="flex flex-col gap-[24px] w-full" data-name="Welcome body paragraphs">
        <div className="w-full">
            <p className="text-[16px] font-normal font-['Geist:Regular'] text-black tracking-[-0.32px] leading-[1.4]">{`${companyInfo.name} has been a pillar of the ${companyInfo.location} legal community, providing expert legal counsel across a wide spectrum of practice areas. We are more than just attorneys, we are trusted advisors, dedicated advocates, and strategic partners committed to achieving the best possible outcomes for our clients.`}</p>
        </div>
        <div className="w-full">
            <p className="text-[16px] font-normal font-['Geist:Regular'] text-black tracking-[-0.32px] leading-[1.4]">We combine decades of experience with a deep understanding of the complexities of Indonesian law. Our team of seasoned trial attorneys boasts a proven track record of success in courtrooms throughout {companyInfo.location} and beyond. We pride ourselves on our comprehensive expertise, covering nearly every field of law, ensuring that whatever your legal challenge, we have the knowledge and experience to guide you.</p>
        </div>
    </div>;
}

function WelcomeContent() {
    return <div className="flex flex-col gap-[40px] items-center justify-center w-full" data-name="Welcome content">
        <div className="w-full text-center">
            <h2 className="text-[28px] font-medium font-['Geist:Medium'] text-black tracking-[-1.4px] leading-[1.1] font-[Libre_Baskerville]">{`Welcome to ${companyInfo.name}`}</h2>
        </div>
        <div className="flex flex-col gap-[32px] items-start justify-start w-full" data-name="Welcome body copy">
            <WelcomeBodyParagraphs />
            <ButtonDark size="mobile" fullWidth />
        </div>
    </div>;
}

function WelcomeSection() {
    return <div className="bg-[rgb(247,_244,_235)] relative w-full" data-name="Welcome section">
        <div className="w-full">
            <div className="flex flex-col items-center justify-center py-[60px] px-[20px] w-full">
                <WelcomeContent />
            </div>
        </div>
    </div>;
}

// Image Section
function ImageBreakerSection() {
    return <div 
        className="aspect-[4/3] bg-center bg-cover bg-no-repeat relative shrink-0 w-full"
        data-name="Image breaker section"
        aria-label="Photo of rows of books in a library with marble busts."
        style={{
            backgroundImage: `url('${imgImageBreakerSection}')`
        }}
    >
        <div className="[border-radius:inherit] relative size-full">
            <div className="aspect-[4/3] block relative size-full"/>
        </div>
    </div>;
}

// Offering Section Components
function OfferingListItems() {
    const services = [
        "Business formation", "Contract drafting", "Mergers and Acquisitions", 
        "Property Protection", "Employment Law", "Corporate Governance", 
        "Shareholder Disputes", "+More"
    ];

    return <div className="flex flex-col items-start justify-start capitalize gap-[8px]" data-name="Offering list items">
        {services.map((service, index) => (
            <p key={index} className={`text-[32px] font-normal font-['Geist:Regular'] tracking-[-1.6px] leading-[1.0] ${
                service === '+More' ? 'text-[rgba(255,240,196,0.5)]' : 'text-[rgb(247,244,235)]'
            }`}>
                {service}
            </p>
        ))}
    </div>;
}

function OfferingSection() {
    return <div className="bg-[rgb(13,_31,_8)] relative w-full" data-name="Offering section">
        <div className="w-full">
            <div className="flex flex-col items-start justify-start py-[60px] px-[20px]">
                <div className="flex flex-col items-start justify-start w-full" data-name="Offering content">
                    <div className="flex items-center justify-start w-full mb-[32px]" data-name="Offering subhead">
                        <h2 className="text-[28px] font-medium font-['Geist:Medium'] text-[rgb(247,244,235)] tracking-[-1.4px] leading-[1.1] font-[Libre_Baskerville]">What We Offer</h2>
                    </div>
                    <div className="flex flex-col gap-[32px] items-start justify-start w-full" data-name="Offering list">
                        <OfferingListItems />
                        <ButtonLight size="mobile" fullWidth />
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

// Clients Section Components
function OurClientsIntro() {
    return <div className="flex flex-col gap-[24px] items-center justify-start text-center w-full" data-name="Our clients intro">
        <h2 className="text-[28px] font-medium font-['Geist:Medium'] text-black tracking-[-1.4px] leading-[1.1] font-[Libre_Baskerville]">Hear From Our Clients</h2>
        <div className="w-full">
            <p className="text-[16px] font-normal font-['Geist:Regular'] text-black tracking-[-0.32px] leading-[1.4]">{`We believe that our clients' experiences speak volumes about the quality of our legal services. Here's what some of them have to say:`}</p>
        </div>
    </div>;
}

function OurClientsOutro() {
    return <div className="flex items-center justify-center w-full" data-name="Our clients outro">
        <div className="w-full text-center">
            <p className="text-[16px] font-normal font-['Geist:Regular'] text-black tracking-[-0.32px] leading-[1.4]">{` Let us help you navigate your legal journey with confidence and peace of mind. Contact ${companyInfo.name} today.`}</p>
        </div>
    </div>;
}

function OurClientsSection() {
    return <div className="bg-white relative w-full" data-name="Our clients section">
        <div className="w-full">
            <div className="flex flex-col gap-[40px] items-center justify-start py-[60px] px-[20px]">
                <div className="flex flex-col gap-[40px] items-center justify-start w-full" data-name="Our clients content">
                    <OurClientsIntro />
                    <TestimonialCarousel size="mobile" />
                    <OurClientsOutro />
                </div>
                <ButtonDark size="mobile" fullWidth />
            </div>
        </div>
    </div>;
}

// Pricing Section Components
function PricingCard({ title, price, period, features, buttonText, isPopular = false }) {
    return <div className={`flex flex-col gap-[24px] p-[24px] rounded-[4px] border-2 transition-all duration-200 ease-out ${isPopular ? 'border-[rgb(49,17,15)] bg-[rgb(247,244,235)]' : 'border-[rgba(0,0,0,0.1)] bg-white hover:border-[rgba(49,17,15,0.3)]'}`} data-name="Pricing card">
        <div className="flex flex-col gap-[12px]">
            <div className="flex flex-col gap-[8px]">
                <div className="flex items-center justify-between">
                    <h3 className="text-[20px] font-medium font-['Geist:Medium'] text-black tracking-[-0.6px] leading-[1.1] font-[Libre_Baskerville]">{title}</h3>
                    {isPopular && <div className="bg-[rgb(49,17,15)] text-white px-[8px] py-[2px] rounded-[2px] text-[10px] font-medium font-['Geist:Medium'] tracking-[-0.2px]">Most Popular</div>}
                </div>
            </div>
            <div className="flex items-baseline gap-[6px]">
                <span className="text-[32px] font-normal font-['Geist:Regular'] text-black tracking-[-1.6px] leading-[0.9]">{price}</span>
                <span className="text-[14px] font-normal font-['Geist:Regular'] text-[rgba(0,0,0,0.6)] tracking-[-0.28px] leading-[1.2]">{period}</span>
            </div>
        </div>
        <div className="flex flex-col gap-[12px]">
            {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-[8px]">
                    <div className="w-[12px] h-[12px] mt-[2px] flex items-center justify-center">
                        <div className="w-[4px] h-[4px] bg-[rgb(49,17,15)] rounded-full"></div>
                    </div>
                    <p className="text-[14px] font-normal font-['Geist:Regular'] text-black tracking-[-0.28px] leading-[1.4]">{feature}</p>
                </div>
            ))}
        </div>
        <div className={`border flex flex-row gap-[10px] items-center justify-center px-[20px] py-[16px] rounded-[2px] cursor-pointer transition-all duration-200 ease-out ${isPopular ? 'bg-[rgb(49,17,15)] border-[rgb(49,17,15)] hover:bg-transparent hover:text-[rgb(49,17,15)] active:bg-[rgb(39,7,5)]' : 'bg-white border-[rgb(49,17,15)] text-[rgb(49,17,15)] hover:bg-[rgb(49,17,15)] hover:text-white active:bg-[rgb(39,7,5)] active:text-white'}`}>
            <div className={`font-['Geist:Medium'] font-medium text-center tracking-[-0.28px] text-[14px] leading-[1.2] transition-colors duration-200 ${isPopular ? 'text-white hover:text-[rgb(49,17,15)]' : 'text-[rgb(49,17,15)] hover:text-white'}`}>
                <p>{buttonText}</p>
            </div>
        </div>
    </div>;
}

function PricingSection() {
    return <div className="bg-[rgb(247,244,235)] relative w-full" data-name="Pricing section">
        <div className="w-full">
            <div className="flex flex-col items-center justify-center py-[60px] px-[20px]">
                <div className="flex flex-col gap-[40px] items-center justify-center w-full" data-name="Pricing content">
                    <div className="flex flex-col gap-[16px] items-center text-center">
                        <h2 className="text-[28px] font-medium font-['Geist:Medium'] text-black tracking-[-1.4px] leading-[1.1] font-[Libre_Baskerville]">Legal Services Pricing</h2>
                        <p className="text-[16px] font-normal font-['Geist:Regular'] text-[rgba(0,0,0,0.7)] tracking-[-0.32px] leading-[1.4]">Transparent pricing for quality legal services. Choose the option that best fits your needs.</p>
                    </div>
                    <div className="flex flex-col gap-[20px] w-full" data-name="Pricing grid">
                        {pricingTiers.map((tier, index) => (
                            <PricingCard key={index} {...tier} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

// Why Choose Us Section Components
function WhyChooseUsCard({ number, title, description }) {
    return <div className="flex flex-col gap-[16px] p-[24px] bg-white rounded-[4px] border border-[rgba(255,255,255,0.1)] transition-all duration-200 ease-out hover:border-[rgba(255,255,255,0.2)]" data-name="Why choose us card">
        <div className="flex items-center gap-[12px]">
            <div className="w-[32px] h-[32px] bg-[rgb(49,17,15)] rounded-[4px] flex items-center justify-center">
                <span className="text-[16px] font-medium font-['Geist:Medium'] text-white tracking-[-0.48px] leading-[1.0]">{number}</span>
            </div>
            <h3 className="text-[18px] font-medium font-['Geist:Medium'] text-black tracking-[-0.54px] leading-[1.1] font-[Libre_Baskerville]">{title}</h3>
        </div>
        <p className="text-[14px] font-normal font-['Geist:Regular'] text-[rgba(0,0,0,0.7)] tracking-[-0.28px] leading-[1.4]">{description}</p>
    </div>;
}

function WhyChooseUsSection() {
    return <div className="bg-[rgb(13,_31,_8)] relative w-full" data-name="Why choose us section">
        <div className="w-full">
            <div className="flex flex-col items-center justify-center py-[60px] px-[20px]">
                <div className="flex flex-col gap-[40px] items-center justify-center w-full" data-name="Why choose us content">
                    <div className="flex flex-col gap-[16px] items-center text-center">
                        <h2 className="text-[28px] font-medium font-['Geist:Medium'] text-white tracking-[-1.4px] leading-[1.1] font-[Libre_Baskerville]">Why Choose {companyInfo.name}</h2>
                        <p className="text-[16px] font-normal font-['Geist:Regular'] text-[rgba(255,255,255,0.8)] tracking-[-0.32px] leading-[1.4]">Experience the difference that decades of legal expertise and unwavering commitment to our clients makes.</p>
                    </div>
                    <div className="flex flex-col gap-[20px] w-full" data-name="Why choose us grid">
                        {whyChooseUsReasons.map((reason, index) => (
                            <WhyChooseUsCard key={index} {...reason} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

function ImageDividerSection2() {
    return <div 
        className="aspect-[4/3] [background-size:auto,_cover] bg-[position:0%_0%,_50%_50%] relative shrink-0 w-full"
        data-name="Image divider section 2"
        aria-label="Photo of a study hall with wooden tables and chairs."
        style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), url('${imgImageDividerSection2}')`
        }}
    >
        <div className="[border-radius:inherit] relative size-full">
            <div className="aspect-[4/3] block relative size-full"/>
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

export default function Mobile() {
    return (
        <PageLayout hasTopPadding={false}>
            <div className="bg-white flex flex-col w-full min-h-screen" data-name="Mobile">
                <HeaderSection />
                <Main />
                <FooterSection size="mobile" />
            </div>
        </PageLayout>
    );
}