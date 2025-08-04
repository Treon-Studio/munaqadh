import CenterUnderline from '@/shared/ui/base/center-underline';
import { companyInfo } from '@/constants/data';
import svgPaths from '@/shared/ui/base/icons';

function Group1({ size = 'desktop' }: { size?: 'desktop' | 'mobile' }) {
    const dimensions = size === 'mobile' ? 'h-[28px] w-[38px]' : 'h-[37px] w-[50px]';
    
    return (
        <div className={`block ${dimensions} relative shrink-0`}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 38">
                <g id="Group 1">
                    <path d={svgPaths.p26321a80} fill="black" id="Subtract"/>
                </g>
            </svg>
        </div>
    );
}

function FooterHeader({ size = 'desktop' }: { size?: 'desktop' | 'mobile' }) {
    const titleSize = size === 'mobile' ? 'text-[24px] tracking-[-1.2px]' : 'text-[32px] tracking-[-1.6px]';
    
    if (size === 'mobile') {
        return (
            <div className="flex flex-col gap-[16px] items-start w-full" data-name="Footer header">
                <Group1 size={size} />
                <div className="flex items-center justify-start" data-name="Company name">
                    <h3 className={`${titleSize} font-medium font-['Geist:Medium'] text-black leading-[1.1] font-[Libre_Baskerville]`}>
                        {companyInfo.name}
                    </h3>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-row items-center justify-between w-full" data-name="Footer header">
            <Group1 size={size} />
            <div className="flex items-center justify-center" data-name="Company name">
                <h3 className={`${titleSize} font-medium font-['Geist:Medium'] text-black leading-[1.1] font-[Libre_Baskerville]`}>
                    {companyInfo.name}
                </h3>
            </div>
        </div>
    );
}

function FooterSubhead({ size = 'desktop' }: { size?: 'desktop' | 'mobile' }) {
    const textSize = size === 'mobile' ? 'text-[16px]' : 'text-[18px]';
    
    return (
        <div className="flex flex-row items-center justify-center w-full" data-name="Footer subhead">
            <div className={size === 'mobile' ? 'w-full' : 'flex-1'}>
                <p className={`${textSize} font-normal font-['Geist'] text-black leading-[1.35]`}>
                    {companyInfo.tagline}
                </p>
            </div>
        </div>
    );
}

function ContactColumn1() {
    return (
        <div className="flex flex-col gap-[2px] items-start font-['Geist'] font-normal text-black text-[14px]" data-name="Contact column 1">
            <CenterUnderline 
                as="a"
                href={`mailto:${companyInfo.email}`} 
                className="leading-[1.4] text-black transition-colors duration-200 ease-out hover:text-[rgb(49,17,15)]"
                transition={{ duration: 0.2, ease: "easeOut" }}
                underlineHeightRatio={0.08}
            >
                {companyInfo.email}
            </CenterUnderline>
            <p className="leading-[1.4]">{companyInfo.phone}</p>
        </div>
    );
}

function ContactColumn2() {
    return (
        <div className="flex flex-col gap-[2px] items-start font-['Geist'] font-normal text-black text-[14px] leading-[1.4]" data-name="Contact column 2">
            <p>{companyInfo.address.street}</p>
            <p>{companyInfo.address.building}</p>
            <p>{companyInfo.address.city}</p>
        </div>
    );
}

function ContactColumn4() {
    const socialLinks = [
        { name: "Instagram", url: "https://www.instagram.com/figma" },
        { name: "Facebook", url: "https://www.facebook.com/figmadesign" },
        { name: "LinkedIn", url: "http://linkedin.com/company/figma" },
        { name: "Bluesky", url: "https://bsky.app/profile/figma.com" }
    ];

    return (
        <div className="flex flex-col gap-[2px] items-start font-['Geist'] font-normal text-black text-[14px]" data-name="Contact column 4">
            {socialLinks.map((link) => (
                <CenterUnderline 
                    key={link.name}
                    as="a"
                    href={link.url} 
                    className="leading-[1.4] text-black transition-colors duration-200 ease-out hover:text-[rgb(49,17,15)]"
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    underlineHeightRatio={0.08}
                >
                    {link.name}
                </CenterUnderline>
            ))}
        </div>
    );
}

function FooterContactInformation({ size = 'desktop' }: { size?: 'desktop' | 'mobile' }) {
    if (size === 'mobile') {
        return (
            <div className="flex flex-col gap-[24px] items-start w-full" data-name="Footer contact information">
                <ContactColumn1 />
                <ContactColumn2 />
                <ContactColumn4 />
            </div>
        );
    }

    return (
        <div className="flex flex-row gap-[45px] items-start" data-name="Footer contact information">
            <ContactColumn1 />
            <ContactColumn2 />
            <ContactColumn4 />
        </div>
    );
}

function FooterCopyright({ size = 'desktop' }: { size?: 'desktop' | 'mobile' }) {
    const containerClasses = size === 'mobile' 
        ? "flex flex-row items-center w-full" 
        : "flex flex-row items-center";

    return (
        <div className={containerClasses} data-name="Footer copyright">
            <div className="font-['Geist'] font-normal text-black text-[14px] leading-[1.4]">
                <p className="mb-0">{companyInfo.name}</p>
                <p>© 2025 All Rights Reserved</p>
            </div>
        </div>
    );
}

interface FooterSectionProps {
    size?: 'desktop' | 'mobile';
}

export default function FooterSection({ size = 'desktop' }: FooterSectionProps) {
    const containerClasses = size === 'mobile' ? 'w-full' : 'w-full max-w-[1280px] mx-auto';
    const paddingClasses = size === 'mobile' ? 'px-[20px] py-[40px]' : 'px-[50px] py-[68px]';
    const gapClasses = size === 'mobile' ? 'gap-[40px]' : 'gap-[84px]';

    return (
        <footer className="bg-[rgb(247,244,235)] w-full" data-name="Footer section">
            <div className={containerClasses}>
                <div className={`flex flex-col ${gapClasses} items-start ${paddingClasses}`}>
                    <FooterHeader size={size} />
                    <FooterSubhead size={size} />
                    <FooterContactInformation size={size} />
                    <FooterCopyright size={size} />
                </div>
            </div>
        </footer>
    );
}