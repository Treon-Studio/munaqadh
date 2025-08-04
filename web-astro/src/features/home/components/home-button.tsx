interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    variant?: 'dark' | 'light';
    size?: 'desktop' | 'mobile';
    fullWidth?: boolean;
}

export function Button({ onClick, children, variant = 'dark', size = 'desktop', fullWidth = false }: ButtonProps) {
    const baseClasses = "flex flex-row gap-[10px] items-center justify-center rounded-[2px] cursor-pointer transition-all duration-200 ease-out";
    
    const sizeClasses = size === 'mobile' 
        ? "px-[20px] py-[16px]" 
        : "px-[24px] py-[18px]";
    
    const widthClasses = fullWidth ? "w-full" : "";
    
    const variantClasses = variant === 'dark'
        ? "bg-[rgb(49,17,15)] border border-[rgb(49,17,15)] hover:bg-transparent hover:text-[rgb(49,17,15)] hover:border-[rgb(49,17,15)] active:bg-[rgb(39,7,5)]"
        : "bg-white border border-white hover:bg-transparent hover:text-white hover:border-white active:bg-[rgb(235,235,235)]";
    
    const textClasses = variant === 'dark'
        ? "font-['Geist:Medium'] font-medium text-white text-center transition-colors duration-200 hover:text-[rgb(49,17,15)]"
        : "font-['Geist:Medium'] font-medium text-black text-center transition-colors duration-200 hover:text-white";
    
    const textSize = size === 'mobile' ? "text-[16px] tracking-[-0.32px]" : "text-[18px] tracking-[-0.36px]";

    return (
        <div 
            className={`${baseClasses} ${sizeClasses} ${widthClasses} ${variantClasses}`}
            onClick={onClick}
            data-name={`Button ${variant}`}
        >
            <div className={`${textClasses} ${textSize} leading-[1.2]`}>
                {children}
            </div>
        </div>
    );
}

export function ButtonDark({ onClick, size = 'desktop', fullWidth = false }: { onClick?: () => void; size?: 'desktop' | 'mobile'; fullWidth?: boolean }) {
    const handleClick = () => {
        const navigateTo = (window as any).navigateTo;
        if (navigateTo) {
            navigateTo('contact');
        }
        onClick?.();
    };

    return (
        <Button onClick={handleClick} variant="dark" size={size} fullWidth={fullWidth}>
            <p>Schedule a Consult</p>
        </Button>
    );
}

export function ButtonLight({ onClick, size = 'desktop', fullWidth = false }: { onClick?: () => void; size?: 'desktop' | 'mobile'; fullWidth?: boolean }) {
    const handleClick = () => {
        const navigateTo = (window as any).navigateTo;
        if (navigateTo) {
            navigateTo('services');
        }
        onClick?.();
    };

    return (
        <Button onClick={handleClick} variant="light" size={size} fullWidth={fullWidth}>
            <p>Services</p>
        </Button>
    );
}