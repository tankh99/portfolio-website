// components/ScrollableContainer.jsx
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

type P = {
    children: React.ReactNode;
}

const ScrollableContainer = ({ children }: P) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [showGradient, setShowGradient] = useState(false);
    const [gradientOpacity, setGradientOpacity] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const handleScroll = () => {
            // if (container.scrollHeight > container.clientHeight) {
            //     const isAtBottom = container.scrollHeight - container.scrollTop === container.clientHeight;
            //     setShowGradient(!isAtBottom);
            // }

            const maxScrollTop = container.scrollHeight - container.clientHeight;
            const currentScrollTop = container.scrollTop;
            const opacity = Math.max(((1 - currentScrollTop / maxScrollTop)) - 0.5, 0);
            setGradientOpacity(opacity);
        };

        handleScroll(); // initial check
        container.addEventListener("scroll", handleScroll);
        return () => {
            container.removeEventListener("scroll", handleScroll);
        }

    }, [children]);




    return (
        <div className="relative">
            <div
                ref={containerRef}
                className={cn(
                    `leading-relaxed text-gray-700 dark:text-white/70 overflow-y-auto h-32 overflow-y-auto scrollbar rounded-md`,
                )}
            >
                {children}
            </div>

            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-slate-300 via-white-75 to-transparent pointer-events-none"
                style={{opacity: gradientOpacity}}></div>
            {/* {showGradient && (
            )} */}
        </div>
    );
};

export default ScrollableContainer;
