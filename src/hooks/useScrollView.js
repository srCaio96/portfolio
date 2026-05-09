import { useEffect, useState } from "react";

export default function useScrollView() {
    const [active, setActive] = useState('');
    
    function handleScroll(str) {
        document.getElementById(str)?.scrollIntoView({
            behavior: 'smooth'

        })
    };

    useEffect(() => {
        const handleActive = () => {
            const sections = ['main', 'projects', 'aboutMe', 'contact'];

            sections.forEach((id) => {
                const el = document.getElementById(id);
                if(!el) return;

                const rect = el.getBoundingClientRect();

                if(rect.top <= 100 && rect.bottom >= 100) {
                    setActive(id);
                };
            });
        };
   
        window.addEventListener('scroll', handleActive);
        return () => window.removeEventListener('scroll', handleActive);
    }, []);
    
    return {handleScroll, active};
}