import { useState, useEffect, useCallback } from 'react';
import { testimonials } from '@/constants/data';
import svgPaths from '@/shared/ui/base/icons';

interface TestimonialSlideProps {
    testimonial: typeof testimonials[0];
    size?: 'desktop' | 'mobile';
}

function TestimonialSlide({ testimonial, size = 'desktop' }: TestimonialSlideProps) {
    if (size === 'mobile') {
        return (
            <div className="flex flex-col gap-[24px] items-center justify-center text-center text-black min-h-[250px] px-[16px]">
                <div className="w-full">
                    <p className="text-[20px] font-medium font-['Geist:Medium'] leading-[1.2] tracking-[-0.6px] text-black">
                        "{testimonial.quote}"
                    </p>
                </div>
                <div>
                    <p className="text-[16px] font-medium font-['Geist:Medium'] leading-[1.2] tracking-[-0.32px] text-black">
                        {testimonial.author}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-[32px] items-center justify-center text-center text-black min-h-[300px] px-[20px]">
            <div className="max-w-[600px]">
                <p className="text-[32px] font-medium font-['Geist:Medium'] leading-[1.09] tracking-[-1.6px] text-black">
                    "{testimonial.quote}"
                </p>
            </div>
            <div>
                <p className="text-[32px] font-medium font-['Geist:Medium'] leading-[1.09] tracking-[-1.6px] text-black font-[Libre_Baskerville]">
                    {testimonial.author}
                </p>
            </div>
        </div>
    );
}

function CarouselContent({ currentSlide, size }: { currentSlide: number; size?: 'desktop' | 'mobile' }) {
    const minHeight = size === 'mobile' ? 'min-h-[250px]' : 'min-h-[300px]';
    
    return (
        <div className={`flex items-center justify-center w-full ${minHeight}`}>
            <div key={currentSlide} className="animate-in fade-in duration-500">
                <TestimonialSlide testimonial={testimonials[currentSlide]} size={size} />
            </div>
        </div>
    );
}

function ArrowButton({ direction, onClick, size = 'desktop' }: { direction: 'left' | 'right'; onClick: () => void; size?: 'desktop' | 'mobile' }) {
    const buttonSize = size === 'mobile' ? 'h-[20px] w-[20px]' : 'h-[24px] w-[24px]';
    const pathData = direction === 'left' ? svgPaths.p1a749e00 : svgPaths.p15f93a40;
    
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
    };

    return (
        <button 
            className={`${buttonSize} cursor-pointer transition-all duration-200 ease-out hover:opacity-60 active:opacity-40 bg-transparent border-0 p-0 rounded-[1px]`} 
            data-name={`${direction} arrow`}
            onClick={handleClick}
            type="button"
        >
            <svg className="block size-full transition-all duration-200" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id={`${direction} arrow`}>
                    <path d={pathData} id="Vector 2" stroke="black" strokeWidth="1.5"/>
                </g>
            </svg>
        </button>
    );
}

function SlideshowNavigation({ currentSlide, totalSlides, onDotClick, size = 'desktop' }: { 
    currentSlide: number; 
    totalSlides: number; 
    onDotClick: (index: number) => void; 
    size?: 'desktop' | 'mobile' 
}) {
    const dotSize = size === 'mobile' ? 'w-[6px] h-[6px]' : 'w-[8px] h-[8px]';
    const gap = size === 'mobile' ? 'gap-[8px]' : 'gap-[12px]';
    
    return (
        <div className={`flex items-center justify-center ${gap}`} data-name="Slideshow navigation">
            {Array.from({ length: totalSlides }, (_, index) => (
                <button
                    key={index}
                    className={`${dotSize} rounded-[1px] cursor-pointer transition-all duration-200 ease-out border-0 p-0 ${
                        index === currentSlide 
                            ? 'bg-[rgb(49,17,15)]' 
                            : 'bg-black opacity-20 hover:opacity-40'
                    }`}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onDotClick(index);
                    }}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    );
}

function SlideshowNavBar({ currentSlide, totalSlides, onPrevious, onNext, onDotClick, size = 'desktop' }: {
    currentSlide: number;
    totalSlides: number;
    onPrevious: () => void;
    onNext: () => void;
    onDotClick: (index: number) => void;
    size?: 'desktop' | 'mobile';
}) {
    const gap = size === 'mobile' ? 'gap-[16px]' : 'gap-[20px]';
    
    return (
        <div className={`box-border flex flex-row ${gap} items-center justify-center overflow-visible p-0 relative shrink-0`} data-name="Slideshow nav bar">
            <ArrowButton direction="left" onClick={onPrevious} size={size} />
            <SlideshowNavigation 
                currentSlide={currentSlide} 
                totalSlides={totalSlides} 
                onDotClick={onDotClick} 
                size={size}
            />
            <ArrowButton direction="right" onClick={onNext} size={size} />
        </div>
    );
}

interface TestimonialCarouselProps {
    size?: 'desktop' | 'mobile';
}

export default function TestimonialCarousel({ size = 'desktop' }: TestimonialCarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const totalSlides = testimonials.length;

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index);
    }, []);

    const handlePrevious = useCallback(() => {
        setIsAutoPlaying(false);
        prevSlide();
        setTimeout(() => setIsAutoPlaying(true), 10000);
    }, [prevSlide]);

    const handleNext = useCallback(() => {
        setIsAutoPlaying(false);
        nextSlide();
        setTimeout(() => setIsAutoPlaying(true), 10000);
    }, [nextSlide]);

    const handleDotClick = useCallback((index: number) => {
        setIsAutoPlaying(false);
        goToSlide(index);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    }, [goToSlide]);

    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, totalSlides]);

    const containerClasses = size === 'mobile' 
        ? "bg-[rgb(246,_246,_246)] w-full min-h-[350px] relative shrink-0"
        : "bg-[rgb(246,_246,_246)] max-w-[738px] min-h-[445px] relative shrink-0 w-full";
    
    const paddingClasses = size === 'mobile' 
        ? "px-[20px] py-[24px]"
        : "px-[50px] py-[30px]";
    
    const gapClasses = size === 'mobile' ? "gap-[40px]" : "gap-[80px]";

    return (
        <div className={containerClasses} data-name="Carousel slides">
            <div className="[border-radius:inherit] flex flex-col h-full items-center justify-center relative w-full">
                <div className={`box-border flex flex-col ${gapClasses} items-center justify-center overflow-visible ${paddingClasses} relative w-full`}>
                    <CarouselContent currentSlide={currentSlide} size={size} />
                    <SlideshowNavBar 
                        currentSlide={currentSlide}
                        totalSlides={totalSlides}
                        onPrevious={handlePrevious}
                        onNext={handleNext}
                        onDotClick={handleDotClick}
                        size={size}
                    />
                </div>
            </div>
        </div>
    );
}