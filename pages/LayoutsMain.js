"use client"
import LeftSidebar from "@/components/shared/Sidebars/LeftSidebar";
import RightSidebar from "@/components/shared/Sidebars/RightSidebar";
import ThemeSwitcher from "@/components/shared/ThemeSwither/ThemeSwitcher";
import { useTheme } from "@/components/shared/ThemeSwither/useTheme";
import { useEffect, useState } from "react";

const LayoutsMain = ({ children }) => {
    const { theme } = useTheme();
    const [overSize, setOverSize] = useState(null);
    const maxWidth = 1440;
    const zoom = overSize / maxWidth;

    const getSize = () => {
        return overSize > maxWidth ? zoom : '100%';
    }

    useEffect(() => {
        if (!window.innerWidth) return;
        setOverSize(window.innerWidth);

        const getInnerWidth = () => {
            setOverSize(window.innerWidth);

            if(window.innerWidth <= maxWidth) {
                window.removeEventListener('resize', getInnerWidth);
            }
        }

        window.addEventListener('resize', getInnerWidth)

    }, [])

    return (
        <>
            <main className={`${theme} main relative`} style={{ zoom: getSize() }}>
                <div className="absolute right-[1%] top-[3%]">
                    <ThemeSwitcher />
                </div>
                <div className={`h-screen w-screen`}>
                    <div className="left-sidebar rounded-lg bg-black py-6 fixed left-[4%] top-[10%] h-[80%] w-left-sidebar">
                        <LeftSidebar />
                    </div>
                    <div className="main-content rounded-[6px] pt-[2px] pb-[2px] pe-[2px] fixed overflow-hidden top-[10%] h-[80%] w-[calc(100%-300px-100px-8%-48px)] left-[calc(4%+300px+24px)] flex-grow">
                        <div className="main-content-wrapper overflow-auto h-full">
                            {children}
                        </div>
                    </div>
                    <div className="right-sidebar rounded-lg fixed right-[4%] h-[80%] top-[10%] w-right-sidebar">
                        <RightSidebar />
                    </div>
                </div>
            </main>
        </>
    )
}

export default LayoutsMain;