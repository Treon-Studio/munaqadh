import PageLayout from '@/shared/ui/layouts/page-layout';
import FooterSection from '@/shared/ui/layouts/footer';

function HeaderContent() {
    return <div className="flex flex-col gap-[32px] items-start justify-start w-full" data-name="Header content">
        <div className="w-full">
            <h1 className="text-[48px] font-normal font-['Geist:Regular'] text-white tracking-[-2.4px] leading-[0.95] font-[Libre_Baskerville]">Let us help you</h1>
        </div>
    </div>;
}

function HeaderSection() {
    return <header 
        className="bg-center bg-cover h-[500px] relative w-full"
        data-name="Header section"
        aria-label="Photo of two women and a man talking in the corner of a room with modern furniture."
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

function NextStep1() {
    return <div className="flex flex-col gap-[24px] px-0 py-[32px] relative w-full border-t border-white border-opacity-50" data-name="Next step 1">
        <div className="flex items-center gap-[16px]">
            <div className="text-[48px] font-extralight font-['Geist:ExtraLight'] text-white tracking-[-2.4px] leading-[1.0]">
                <p>1.</p>
            </div>
            <div className="flex-1">
                <h3 className="text-[18px] font-medium font-['Geist:Medium'] text-white tracking-[-0.36px] leading-[1.35]">Free consultation</h3>
            </div>
        </div>
        <div className="w-full">
            <p className="text-[16px] font-normal font-['Geist:Regular'] text-white tracking-[-0.32px] leading-[1.4]">Schedule a complimentary consultation to discuss your legal needs. During this session, our experienced attorneys will assess your situation, provide initial guidance, and outline potential strategies.</p>
        </div>
    </div>;
}

function NextStep2() {
    return <div className="flex flex-col gap-[24px] px-0 py-[32px] relative w-full border-t border-white border-opacity-50" data-name="Next step 2">
        <div className="flex items-center gap-[16px]">
            <div className="text-[48px] font-extralight font-['Geist:ExtraLight'] text-white tracking-[-2.4px] leading-[1.0]">
                <p>2.</p>
            </div>
            <div className="flex-1">
                <h3 className="text-[18px] font-medium font-['Geist:Medium'] text-white tracking-[-0.36px] leading-[1.35]">Personalized Case Evaluation</h3>
            </div>
        </div>
        <div className="w-full">
            <p className="text-[16px] font-normal font-['Geist:Regular'] text-white tracking-[-0.32px] leading-[1.4]">If you choose to move forward, we conduct a detailed review of your case. This includes gathering key documents, outlining your legal options, and developing a tailored plan designed to achieve the best possible outcome.</p>
        </div>
    </div>;
}

function NextStep3() {
    return <div className="flex flex-col gap-[24px] px-0 py-[32px] relative w-full border-t border-white border-opacity-50" data-name="Next step 3">
        <div className="flex items-center gap-[16px]">
            <div className="text-[48px] font-extralight font-['Geist:ExtraLight'] text-white tracking-[-2.4px] leading-[1.0]">
                <p>3.</p>
            </div>
            <div className="flex-1">
                <h3 className="text-[18px] font-medium font-['Geist:Medium'] text-white tracking-[-0.36px] leading-[1.35]">Formal Engagement & Representation</h3>
            </div>
        </div>
        <div className="w-full">
            <p className="text-[16px] font-normal font-['Geist:Regular'] text-white tracking-[-0.32px] leading-[1.4]">Once you decide to proceed, we finalize the paperwork and begin representing you. Our team will keep you informed at every stage, ensuring you feel confident and supported throughout the process.</p>
        </div>
    </div>;
}

function ServicesList() {
    return <div className="flex flex-col gap-[8px] items-start justify-start w-full" data-name="Services list">
        <NextStep1 />
        <NextStep2 />
        <NextStep3 />
    </div>;
}

function OurServicesContent() {
    return <div className="flex flex-col gap-[32px] items-start justify-start w-full border-b border-white border-opacity-50 pb-[32px]" data-name="Our services content">
        <div className="w-full">
            <h2 className="text-[24px] font-normal font-['Geist:Regular'] text-white tracking-[-1.2px] leading-[1.1] mb-0">Ready to Take the Next Step?</h2>
            <h2 className="text-[24px] font-normal font-['Geist:Regular'] text-white tracking-[-1.2px] leading-[1.1]">Let's Discuss</h2>
        </div>
        <ServicesList />
    </div>;
}

function ButtonLight() {
    return <div className="bg-white flex flex-row gap-[10px] items-center justify-center px-[24px] py-[18px] rounded-[500px] cursor-pointer transition-all duration-200 ease-out hover:bg-gray-100 active:bg-gray-200 w-full" data-name="Button Light">
        <div className="text-[16px] font-normal font-['Geist:Regular'] text-black text-center tracking-[-0.32px] leading-[1.2]">
            <p>Schedule a Consult</p>
        </div>
    </div>;
}

function NextStepsCta() {
    return <div className="flex flex-col gap-[32px] items-center justify-center w-full" data-name="Next steps cta">
        <div className="w-full text-center">
            <h2 className="text-[24px] font-normal font-['Geist:Regular'] text-white tracking-[-1.2px] leading-[1.1]">Discover how we can help</h2>
        </div>
        <ButtonLight />
    </div>;
}

function NextStepsSection() {
    return <main className="bg-[rgb(31,8,8)] relative w-full" data-name="Next steps section" tabIndex="-1">
        <div className="[border-radius:inherit] flex flex-col items-center justify-center relative size-full">
            <div className="w-full">
                <div className="flex flex-col gap-[80px] items-center justify-center pb-[80px] pt-[60px] px-[20px] w-full">
                    <OurServicesContent />
                    <NextStepsCta />
                </div>
            </div>
        </div>
    </main>;
}

export default function ContactMobile() {
    return (
        <PageLayout hasTopPadding={false}>
            <div className="bg-white flex flex-col items-center justify-start relative size-full" data-name="ContactMobile">
                <HeaderSection />
                <NextStepsSection />
                <FooterSection size="mobile" />
            </div>
        </PageLayout>
    );
}