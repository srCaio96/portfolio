import { useState, useEffect, useRef } from "react";

export default function useDropdownToggle() {
    const [open, setOpen] = useState(false);
    const listRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        function onClickOutside(e) {
            if(containerRef.current && !containerRef.current.contains(e.target)) {
                onClose();
            };
        };

        document.addEventListener('mousedown', onClickOutside);

        return () => document.removeEventListener('mousedown', onClickOutside);
    }, []);

    function onOpen() {
        setOpen(true);
    };

    function onClose() {
        setOpen(false);
    };
    
    return {open, onOpen, onClose, listRef, containerRef};
};