import svgPaths from '../imports/svg-2f9n2pkmq1';
import imgHeaderSection from "figma:asset/6214ca8bc0a8c870a67c8469f213760e7acc34ff.png";
import PageLayout from './layouts/PageLayout';
import FooterSection from './shared/Footer';
import { ButtonDark } from './shared/Buttons';
import { companyInfo } from '../constants/data';

function HeaderContent() {
    return <div className="flex flex-col gap-[52px] items-start justify-start w-full" data-name="Header content">
        <div className="w-full">
            <h1 className="text-[120px] font-normal font-['Geist:Regular'] text-white tracking-[-3.6px] leading-[0.95] whitespace-pre-wrap font-[Libre_Baskerville]">Let us help you</h1>
        </div>
    </div>;
}

function HeaderSection() {
    return <header 
        className="bg-center bg-cover h-[750px] relative w-full"
        data-name="Header section"
        aria-label="Photo of two women and a man talking in the corner of a room with modern furniture."
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

function NextStep1Content() {
    return <div className="flex flex-col gap-[56px] h-full items-start justify-center text-white" data-name="Next step 1 content">
        <div className="w-[481px]">
            <h3 className="text-[24px] font-medium font-['Geist:Medium'] tracking-[-0.36px] leading-[1.35] font-[Libre_Baskerville]">Free consultation</h3>
        </div>
        <div className="w-full min-w-full">
            <p className="text-[18px] font-normal font-['Geist:Regular'] tracking-[-0.36px] leading-[1.35]">Schedule a complimentary consultation to discuss your legal needs. During this session, our experienced attorneys will assess your situation, provide initial guidance, and outline potential strategies.</p>
        </div>
    </div>;
}

function NextStep1() {
    return <div className="flex flex-row items-center justify-between px-0 py-[50px] relative w-full border-t border-white border-opacity-50" data-name="Next step 1">
        <div className="text-[300px] font-extralight font-['Geist:ExtraLight'] text-white tracking-[-15px] leading-[1.09] whitespace-nowrap">
            <p>1.</p>
        </div>
        <div className="flex flex-row items-center self-stretch">
            <NextStep1Content />
        </div>
    </div>;
}

function NextStep2Content() {
    return <div className="flex flex-col gap-[56px] items-start justify-start text-white" data-name="Next step 2 content">
        <div className="w-[481px]">
            <h3 className="text-[24px] font-medium font-['Geist:Medium'] tracking-[-0.36px] leading-[1.35] font-[Libre_Baskerville]">Personalized Case Evaluation</h3>
        </div>
        <div className="w-full min-w-full">
            <p className="text-[18px] font-normal font-['Geist:Regular'] tracking-[-0.36px] leading-[1.35]">If you choose to move forward, we conduct a detailed review of your case. This includes gathering key documents, outlining your legal options, and developing a tailored plan designed to achieve the best possible outcome.</p>
        </div>
    </div>;
}

function NextStep2() {
    return <div className="flex flex-row items-center justify-between px-0 py-[50px] relative w-full border-t border-white border-opacity-50" data-name="Next step 2">
        <div className="text-[300px] font-extralight font-['Geist:ExtraLight'] text-white tracking-[-15px] leading-[1.09] whitespace-nowrap">
            <p>2.</p>
        </div>
        <NextStep2Content />
    </div>;
}

function NextStep3Content() {
    return <div className="flex flex-col gap-[56px] h-full items-start justify-center text-white" data-name="Next step 3 content">
        <div className="w-[481px]">
            <h3 className="text-[24px] font-medium font-['Geist:Medium'] tracking-[-0.36px] leading-[1.35]">Formal Engagement & Representation</h3>
        </div>
        <div className="w-full min-w-full">
            <p className="text-[18px] font-normal font-['Geist:Regular'] tracking-[-0.36px] leading-[1.35]">Once you decide to proceed, we finalize the paperwork and begin representing you. Our team will keep you informed at every stage, ensuring you feel confident and supported throughout the process.</p>
        </div>
    </div>;
}

function NextStep3() {
    return <div className="flex flex-row items-center justify-between px-0 py-[50px] relative w-full border-t border-white border-opacity-50" data-name="Next step 3">
        <div className="text-[300px] font-extralight font-['Geist:ExtraLight'] text-white tracking-[-15px] leading-[1.09] whitespace-nowrap">
            <p>3.</p>
        </div>
        <div className="flex flex-row items-center self-stretch">
            <NextStep3Content />
        </div>
    </div>;
}

function ServicesList() {
    return <div className="flex flex-col gap-[20px] items-start justify-start w-full" data-name="Services list">
        <NextStep1 />
        <NextStep2 />
        <NextStep3 />
    </div>;
}

function OurServicesContent() {
    return <div className="flex flex-col gap-[36px] items-start justify-start max-w-[1180px] w-full border-b border-white border-opacity-50 pb-[36px]" data-name="Our services content">
        <div className="w-[548px]">
            <h2 className="text-[32px] font-normal font-['Geist:Regular'] text-white tracking-[-1.6px] leading-[1.09] whitespace-pre-wrap mb-0">Ready to Take the Next Step?</h2>
            <h2 className="text-[32px] font-normal font-['Geist:Regular'] text-white tracking-[-1.6px] leading-[1.09]">Let's Discuss</h2>
        </div>
        <ServicesList />
    </div>;
}

function ButtonLight() {
    return <div className="bg-white flex flex-row gap-[10px] items-center justify-center px-[24px] py-[18px] rounded-[500px] cursor-pointer transition-all duration-200 ease-out hover:bg-gray-100 active:bg-gray-200" data-name="Button Light">
        <div className="text-[18px] font-normal font-['Geist:Regular'] text-black text-center tracking-[-0.36px] leading-[1.2]">
            <p>Schedule a Consult</p>
        </div>
    </div>;
}

function NextStepsCta() {
    return <div className="flex flex-row gap-[100px] items-center justify-start w-full" data-name="Next steps cta">
        <div className="w-[398px]">
            <h2 className="text-[32px] font-normal font-['Geist:Regular'] text-white tracking-[-1.6px] leading-[1.09] font-[Libre_Baskerville]">Discover how we can help</h2>
        </div>
        <ButtonLight />
    </div>;
}

function NextStepsSection() {
    return <main className="bg-[rgb(31,8,8)] relative w-full" data-name="Next steps section" tabIndex="-1">
        <div className="[border-radius:inherit] flex flex-col items-center justify-center relative size-full">
            <div className="w-full max-w-[1280px] mx-auto">
                <div className="flex flex-col gap-[220px] items-center justify-center pb-[220px] pt-[114px] px-[150px] w-full">
                    <OurServicesContent />
                    <NextStepsCta />
                </div>
            </div>
        </div>
    </main>;
}

export default function Contact() {
    return (
        <PageLayout hasTopPadding={false}>
            <div className="bg-white flex flex-col items-center justify-start relative size-full" data-name="Contact">
                <HeaderSection />
                <NextStepsSection />
                <FooterSection />
            </div>
        </PageLayout>
    );
}