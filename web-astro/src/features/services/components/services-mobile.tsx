import PageLayout from '@/shared/ui/layouts/page-layout';
import FooterSection from '@/shared/ui/layouts/footer';
import { companyInfo } from '@/constants/data';

function HeaderContent() {
    return <div className="flex flex-col gap-[20px] items-start justify-start w-full" data-name="Header content">
        <div className="w-full">
            <h1 className="text-[28px] font-medium font-['Geist:Medium'] text-white tracking-[-1.4px] leading-[1.1] font-[Libre_Baskerville]">{`At ${companyInfo.name}, we are committed to exceptional service and successful outcomes with:`}</h1>
        </div>
    </div>;
}

function HeaderSection() {
    return <header 
        className="bg-center bg-cover h-[500px] relative w-full"
        data-name="Header section"
        aria-label="Close-up photo of a bookshelf with old books."
        style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://is3.cloudhost.id/raizora/wayne-law/contact-header.webp')`
        }}
    >
        <div className="[border-radius:inherit] flex flex-col justify-end relative size-full">
            <div className="flex flex-col gap-[10px] h-[500px] items-start justify-end pb-[40px] pt-[30px] px-[20px] w-full">
                <HeaderContent />
            </div>
        </div>
    </header>;
}

function Stat1() {
    return <section aria-label={`Statistic 1 about ${companyInfo.name}`} className="flex flex-col gap-[24px] items-center justify-start text-center w-full" data-name="Stat 1">
        <div className="w-full">
            <p className="text-[64px] font-normal font-['Geist:Regular'] text-[rgb(49,17,15)] tracking-[-3.2px] leading-[0.95]">30+</p>
        </div>
        <div className="w-full">
            <p className="text-[16px] font-normal font-['Geist:Regular'] text-[rgb(49,17,15)] tracking-[-0.32px] leading-[1.2]">years of experience</p>
        </div>
    </section>;
}

function Stat2() {
    return <section aria-label={`Statistic 2 about ${companyInfo.name}`} className="flex flex-col gap-[24px] items-center justify-start text-center w-full" data-name="Stat 2">
        <div className="w-full">
            <p className="text-[64px] font-normal font-['Geist:Regular'] text-[rgb(49,17,15)] tracking-[-3.2px] leading-[0.95]">98%</p>
        </div>
        <div className="w-full">
            <p className="text-[16px] font-normal font-['Geist:Regular'] text-[rgb(49,17,15)] tracking-[-0.32px] leading-[1.2]">success rate in court</p>
        </div>
    </section>;
}

function Stat3() {
    return <section aria-label={`Statistic 3 about ${companyInfo.name}`} className="flex flex-col gap-[24px] items-center justify-start text-center w-full" data-name="Stat 3">
        <div className="w-full">
            <p className="text-[64px] font-normal font-['Geist:Regular'] text-[rgb(49,17,15)] tracking-[-3.2px] leading-[0.95]">120+</p>
        </div>
        <div className="w-full">
            <p className="text-[16px] font-normal font-['Geist:Regular'] text-[rgb(49,17,15)] tracking-[-0.32px] leading-[1.2]">attorneys at hand</p>
        </div>
    </section>;
}

function StatsContent() {
    return <div className="flex flex-col gap-[40px] items-center justify-center w-full" data-name="Stats content">
        <Stat1 />
        <Stat2 />
        <Stat3 />
    </div>;
}

function StatsSection() {
    return <section aria-label={`Statistics about ${companyInfo.name}`} className="bg-[rgb(247,_244,_235)] relative w-full" data-name="Stats section">
        <div className="[border-radius:inherit] flex flex-col items-center relative size-full">
            <div className="w-full">
                <div className="flex flex-col gap-[10px] items-center justify-start px-[20px] py-[60px] w-full">
                    <StatsContent />
                </div>
            </div>
        </div>
    </section>;
}

function Service1() {
    return <section aria-label="Specific areas of business and corporate law that we help with" className="flex flex-col gap-[16px] px-0 py-[24px] relative w-full border-t border-white border-opacity-50" data-name="Service 1">
        <div className="font-medium text-[16px] text-white tracking-[-0.32px]">
            <p className="leading-[1.4]">Business and Corporate Law</p>
        </div>
        <div className="text-[14px] font-normal font-['Geist:Regular'] text-white tracking-[-0.28px] leading-[1.4] w-full">
            <p className="mb-0">Business formation (LLCs, corporations, partnerships)</p>
            <p className="mb-0">Contract drafting and review</p>
            <p className="mb-0">Mergers and acquisitions</p>
            <p className="mb-0">Intellectual property protection</p>
            <p className="mb-0">Employment law and workplace policies</p>
            <p className="mb-0">Corporate governance</p>
            <p>Shareholder and partnership disputes</p>
        </div>
    </section>;
}

function Service2() {
    return <section aria-label="Specific areas of litigation and dispute resolution that we help with" className="flex flex-col gap-[16px] px-0 py-[24px] relative w-full border-t border-white border-opacity-50" data-name="Service 2">
        <div className="font-medium text-[16px] text-white tracking-[-0.32px]">
            <p className="leading-[1.4]">Litigation and Dispute Resolution</p>
        </div>
        <div className="text-[14px] font-normal font-['Geist:Regular'] text-white tracking-[-0.28px] leading-[1.4] w-full">
            <p className="mb-0">Civil litigation</p>
            <p className="mb-0">Commercial litigation</p>
            <p className="mb-0">Arbitration and mediation</p>
            <p className="mb-0">Class action lawsuits</p>
            <p className="mb-0">Personal injury claims</p>
            <p>Product liability cases</p>
        </div>
    </section>;
}

function Service3() {
    return <section aria-label="Specific areas of family law that we help with" className="flex flex-col gap-[16px] px-0 py-[24px] relative w-full border-t border-white border-opacity-50" data-name="Service 3">
        <div className="font-medium text-[16px] text-white tracking-[-0.32px]">
            <p className="leading-[1.4]">Family Law</p>
        </div>
        <div className="text-[14px] font-normal font-['Geist:Regular'] text-white tracking-[-0.28px] leading-[1.4] w-full">
            <p className="mb-0">Divorce and separation</p>
            <p className="mb-0">Child custody and support</p>
            <p className="mb-0">Prenuptial and postnuptial agreements</p>
            <p className="mb-0">Adoption and surrogacy</p>
            <p>Domestic violence protection</p>
        </div>
    </section>;
}

function Service4() {
    return <section aria-label="Specific areas of criminal defense that we help with" className="flex flex-col gap-[16px] px-0 py-[24px] relative w-full border-t border-white border-opacity-50" data-name="Service 4">
        <div className="font-medium text-[16px] text-white tracking-[-0.32px]">
            <p className="leading-[1.4]">Criminal Defense</p>
        </div>
        <div className="text-[14px] font-normal font-['Geist:Regular'] text-white tracking-[-0.28px] leading-[1.4] w-full">
            <p className="mb-0">DUI and traffic offenses</p>
            <p className="mb-0">White-collar crime defense</p>
            <p className="mb-0">Drug charges</p>
            <p className="mb-0">Assault and battery cases</p>
            <p>Expungements and record sealing</p>
        </div>
    </section>;
}

function Service5() {
    return <section aria-label="Specific areas of real estate law that we help with" className="flex flex-col gap-[16px] px-0 py-[24px] relative w-full border-t border-white border-opacity-50" data-name="Service 5">
        <div className="font-medium text-[16px] text-white tracking-[-0.32px]">
            <p className="leading-[1.4]">Real Estate Law</p>
        </div>
        <div className="text-[14px] font-normal font-['Geist:Regular'] text-white tracking-[-0.28px] leading-[1.4] w-full">
            <p className="mb-0">Property transactions (buying, selling, leasing)</p>
            <p className="mb-0">Landlord-tenant disputes</p>
            <p className="mb-0">Zoning and land use</p>
            <p className="mb-0">Construction law</p>
            <p>Real estate development</p>
        </div>
    </section>;
}

function Service6() {
    return <section aria-label="Specific areas of immigration law that we help with" className="flex flex-col gap-[16px] px-0 py-[24px] relative w-full border-t border-white border-opacity-50" data-name="Service 6">
        <div className="font-medium text-[16px] text-white tracking-[-0.32px]">
            <p className="leading-[1.4]">Immigration Law</p>
        </div>
        <div className="text-[14px] font-normal font-['Geist:Regular'] text-white tracking-[-0.28px] leading-[1.4] w-full">
            <p className="mb-0">Visa applications</p>
            <p className="mb-0">Green cards and citizenship</p>
            <p className="mb-0">Deportation defense</p>
            <p>Employment-based immigration</p>
        </div>
    </section>;
}

function ServicesList() {
    return <div className="flex flex-col gap-[8px] items-start justify-start w-full" data-name="Services list">
        <Service1 />
        <Service2 />
        <Service3 />
        <Service4 />
        <Service5 />
        <Service6 />
    </div>;
}

function OurServicesContent() {
    return <div className="flex flex-col gap-[40px] items-start justify-start w-full pb-[20px]" data-name="Our services content">
        <div className="border-b border-white border-opacity-50 w-full pb-[20px]">
            <h2 className="text-[24px] font-normal font-['Geist:Regular'] text-white tracking-[-1.2px] leading-[1.1]">Navigating Complex Legal Landscapes? We Can Help.</h2>
        </div>
        <ServicesList />
    </div>;
}

function OurServicesSection() {
    return <div className="bg-[rgb(13,_31,_8)] relative w-full" data-name="Our services section">
        <div className="[border-radius:inherit] flex flex-row items-center justify-center relative size-full">
            <div className="w-full">
                <div className="flex flex-row gap-[10px] items-center justify-center px-[20px] py-[60px] w-full">
                    <OurServicesContent />
                </div>
            </div>
        </div>
    </div>;
}

function ImageDividerSection() {
    return <div 
        className="bg-center bg-cover bg-no-repeat aspect-[4/3] relative w-full"
        data-name="Image divider section"
        aria-label="Photo of a study hall area with desks and people studying."
        style={{
            backgroundImage: `url('https://is3.cloudhost.id/raizora/wayne-law/service-section.jpg')`
        }}
    >
        <div className="[border-radius:inherit] relative size-full">
            <div className="block aspect-[4/3] relative w-full"/>
        </div>
    </div>;
}

function Main() {
    return <main className="flex flex-col items-start justify-start w-full" data-name="Main">
        <StatsSection />
        <OurServicesSection />
        <ImageDividerSection />
    </main>;
}

export default function ServicesMobile() {
    return (
        <PageLayout hasTopPadding={false}>
            <div className="bg-[rgb(255,_255,_255)] flex flex-col items-center justify-start relative size-full" data-name="ServicesMobile">
                <HeaderSection />
                <Main />
                <FooterSection size="mobile" />
            </div>
        </PageLayout>
    );
}