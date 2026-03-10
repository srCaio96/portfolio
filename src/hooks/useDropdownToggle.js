import { useState, useEffect, useRef } from "react";

export default function useDropdownToggle() {
    const [open, setOpen] = useState(false);
    const listRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if(!listRef.current) return;

        if(open) {
            listRef.current.style.maxHeight = listRef.current.scrollHeight + "px";
        } else {
            listRef.current.style.maxHeight = "0px";
        };

    }, [open]);

    useEffect(() => {
        function handleClickOutside(e) {
            if(containerRef.current && !containerRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    function isOpen(bool) {
        !open ? setOpen(bool) : setOpen(!bool)
    };
    
    return {open, isOpen, listRef, containerRef};
};