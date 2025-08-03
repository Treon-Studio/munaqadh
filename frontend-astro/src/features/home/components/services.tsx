import svgPaths from '../imports/svg-fkkxm0phq5'
import imgHeaderSection from "figma:asset/060624fa3f2b279db3c7717070c8f465d23fa5f2.png";
import imgImageDividerSection from "figma:asset/fbe1652da73df95f418a0618a20b116af0e3fbfc.png";
import CenterUnderline from './CenterUnderline';
import PageLayout from './layouts/PageLayout';
import FooterSection from './shared/Footer';
import { companyInfo } from '../constants/data';

function HeaderContent() {
    return <div className="flex flex-col gap-[28px] items-start justify-start w-full max-w-[734px]" data-name="Header content">
        <div className="w-full">
            <h1 className="text-[32px] font-medium font-['Geist:Medium'] text-white tracking-[-1.6px] leading-[1.09] font-[Libre_Baskerville]">{`At ${companyInfo.name}, we are committed to exceptional service and successful outcomes with:`}</h1>
        </div>
    </div>;
}

function HeaderSection() {
    return <header 
        className="bg-center bg-cover h-[750px] relative w-full"
        data-name="Header section"
        aria-label="Close-up photo of a bookshelf with old books."
        style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url('${imgHeaderSection}')`
        }}
    >
        <div className="[border-radius:inherit] flex flex-col justify-end relative size-full">
            <div className="flex flex-col gap-[10px] h-[750px] items-start justify-end pb-[70px] pt-[50px] px-[50px] w-full">
                <HeaderContent />
            </div>
        </div>
    </header>;
}

function Stat1() {
    return <section aria-label={`Statistic 1 about ${companyInfo.name}`} className="flex flex-col gap-[56px] items-start justify-start w-[213px]" data-name="Stat 1">
        <div className="w-full">
            <p className="text-[120px] font-normal font-['Geist:Regular'] text-[rgb(49,17,15)] tracking-[-3.6px] leading-[0.95]">30+</p>
        </div>
        <div className="w-full">
            <p className="text-[24px] font-normal font-['Geist:Regular'] text-[rgb(49,17,15)] tracking-[-1.2px] leading-[1.09]">years of experience</p>
        </div>
    </section>;
}

function Stat2() {
    return <section aria-label={`Statistic 2 about ${companyInfo.name}`} className="flex flex-col gap-[56px] items-start justify-start w-[237px]" data-name="Stat 2">
        <div className="w-full">
            <p className="text-[120px] font-normal font-['Geist:Regular'] text-[rgb(49,17,15)] tracking-[-3.6px] leading-[0.95]">98%</p>
        </div>
        <div className="w-full h-[30.4094px]">
            <p className="text-[24px] font-normal font-['Geist:Regular'] text-[rgb(49,17,15)] tracking-[-1.2px] leading-[1.09]">success rate in court</p>
        </div>
    </section>;
}

function Stat3() {
    return <section aria-label={`Statistic 3 about ${companyInfo.name}`} className="flex flex-col gap-[56px] items-start justify-start w-[254px]" data-name="Stat 3">
        <div className="w-full">
            <p className="text-[120px] font-normal font-['Geist:Regular'] text-[rgb(49,17,15)] tracking-[-3.6px] leading-[0.95]">120+</p>
        </div>
        <div className="w-full h-[30.4094px]">
            <p className="text-[24px] font-normal font-['Geist:Regular'] text-[rgb(49,17,15)] tracking-[-1.2px] leading-[1.09]">attorneys at hand</p>
        </div>
    </section>;
}

function StatsContent() {
    return <div className="flex flex-row items-start justify-between max-w-[1180px] w-full" data-name="Stats content">
        <Stat1 />
        <Stat2 />
        <Stat3 />
    </div>;
}

function StatsSection() {
    return <section aria-label={`Statistics about ${companyInfo.name}`} className="bg-[rgb(247,_244,_235)] relative w-full" data-name="Stats section">
        <div className="[border-radius:inherit] flex flex-col items-center relative size-full">
            <div className="w-full max-w-[1280px] mx-auto">
                <div className="flex flex-col gap-[10px] items-center justify-start px-[160px] py-[96px] w-full">
                    <StatsContent />
                </div>
            </div>
        </div>
    </section>;
}

function Service1() {
    return <section aria-label="Specific areas of business and corporate law that we help with" className="flex flex-row items-start justify-between px-0 py-[20px] relative w-full border-t border-white border-opacity-50" data-name="Service 1">
        <div className="font-medium text-[18px] text-white tracking-[-0.36px] whitespace-nowrap">
            <p className="leading-[1.35]">Business and Corporate Law</p>
        </div>
        <div className="text-[18px] font-normal font-['Geist:Regular'] text-white tracking-[-0.36px] leading-[1.35] w-[420px]">
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
    return <section aria-label="Specific areas of litigation and dispute resolution that we help with" className="flex flex-row items-start justify-between px-0 py-[20px] relative w-full border-t border-white border-opacity-50" data-name="Service 2">
        <div className="font-medium text-[18px] text-white tracking-[-0.36px] whitespace-nowrap">
            <p className="leading-[1.35]">Litigation and Dispute Resolution</p>
        </div>
        <div className="text-[18px] font-normal font-['Geist:Regular'] text-white tracking-[-0.36px] leading-[1.35] w-[420px]">
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
    return <section aria-label="Specific areas of family law that we help with" className="flex flex-row items-start justify-between px-0 py-[20px] relative w-full border-t border-white border-opacity-50" data-name="Service 3">
        <div className="font-medium text-[18px] text-white tracking-[-0.36px] whitespace-nowrap">
            <p className="leading-[1.35]">Family Law</p>
        </div>
        <div className="text-[18px] font-normal font-['Geist:Regular'] text-white tracking-[-0.36px] leading-[1.35] w-[420px]">
            <p className="mb-0">Divorce and separation</p>
            <p className="mb-0">Child custody and support</p>
            <p className="mb-0">Prenuptial and postnuptial agreements</p>
            <p className="mb-0">Adoption and surrogacy</p>
            <p>Domestic violence protection</p>
        </div>
    </section>;
}

function Service4() {
    return <section aria-label="Specific areas of criminal defense that we help with" className="flex flex-row items-start justify-between px-0 py-[20px] relative w-full border-t border-white border-opacity-50" data-name="Service 4">
        <div className="font-medium text-[18px] text-white tracking-[-0.36px] whitespace-nowrap">
            <p className="leading-[1.35]">Criminal Defense</p>
        </div>
        <div className="text-[18px] font-normal font-['Geist:Regular'] text-white tracking-[-0.36px] leading-[1.35] w-[420px]">
            <p className="mb-0">DUI and traffic offenses</p>
            <p className="mb-0">White-collar crime defense</p>
            <p className="mb-0">Drug charges</p>
            <p className="mb-0">Assault and battery cases</p>
            <p>Expungements and record sealing</p>
        </div>
    </section>;
}

function Service5() {
    return <section aria-label="Specific areas of real estate law that we help with" className="flex flex-row items-start justify-between px-0 py-[20px] relative w-full border-t border-white border-opacity-50" data-name="Service 5">
        <div className="font-medium text-[18px] text-white tracking-[-0.36px] whitespace-nowrap">
            <p className="leading-[1.35]">Real Estate Law</p>
        </div>
        <div className="text-[18px] font-normal font-['Geist:Regular'] text-white tracking-[-0.36px] leading-[1.35] w-[420px]">
            <p className="mb-0">Property transactions (buying, selling, leasing)</p>
            <p className="mb-0">Landlord-tenant disputes</p>
            <p className="mb-0">Zoning and land use</p>
            <p className="mb-0">Construction law</p>
            <p>Real estate development</p>
        </div>
    </section>;
}

function Service6() {
    return <section aria-label="Specific areas of immigration law that we help with" className="flex flex-row items-start justify-between px-0 py-[20px] relative w-full border-t border-white border-opacity-50" data-name="Service 6">
        <div className="font-medium text-[18px] text-white tracking-[-0.36px] whitespace-nowrap">
            <p className="leading-[1.35]">Immigration Law</p>
        </div>
        <div className="text-[18px] font-normal font-['Geist:Regular'] text-white tracking-[-0.36px] leading-[1.35] w-[420px]">
            <p className="mb-0">Visa applications</p>
            <p className="mb-0">Green cards and citizenship</p>
            <p className="mb-0">Deportation defense</p>
            <p>Employment-based immigration</p>
        </div>
    </section>;
}

function ServicesList() {
    return <div className="flex flex-col gap-[20px] items-start justify-start w-full" data-name="Services list">
        <Service1 />
        <Service2 />
        <Service3 />
        <Service4 />
        <Service5 />
        <Service6 />
    </div>;
}

function OurServicesContent() {
    return <div className="flex flex-col gap-[170px] items-start justify-start max-w-[1180px] w-full pb-[20px]" data-name="Our services content">
        <div className="border-b border-white border-opacity-50 w-full pb-[20px]">
            <h2 className="text-[32px] font-normal font-['Geist:Regular'] text-white tracking-[-1.6px] leading-[1.09] w-[548px]">Navigating Complex Legal Landscapes? We Can Help.</h2>
        </div>
        <ServicesList />
    </div>;
}

function OurServicesSection() {
    return <div className="bg-[rgb(13,_31,_8)] relative w-full" data-name="Our services section">
        <div className="[border-radius:inherit] flex flex-row items-center justify-center relative size-full">
            <div className="w-full max-w-[1280px] mx-auto">
                <div className="flex flex-row gap-[10px] items-center justify-center px-[150px] py-[114px] w-full">
                    <OurServicesContent />
                </div>
            </div>
        </div>
    </div>;
}

function ImageDividerSection() {
    return <div 
        className="bg-center bg-cover bg-no-repeat h-[625px] relative w-full"
        data-name="Image divider section"
        aria-label="Photo of a study hall area with desks and people studying."
        style={{
            backgroundImage: `url('${imgImageDividerSection}')`
        }}
    >
        <div className="[border-radius:inherit] relative size-full">
            <div className="block h-[625px] relative w-full"/>
        </div>
    </div>;
}

function Main() {
    return <main className="flex flex-col items-start justify-start w-full" data-name="Main" tabIndex="-1">
        <StatsSection />
        <OurServicesSection />
        <ImageDividerSection />
    </main>;
}

export default function Services() {
    return (
        <PageLayout hasTopPadding={false}>
            <div className="bg-[rgb(255,_255,_255)] flex flex-col items-center justify-start relative size-full" data-name="Services">
                <HeaderSection />
                <Main />
                <FooterSection />
            </div>
        </PageLayout>
    );
}