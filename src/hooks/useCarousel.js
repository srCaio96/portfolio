import { useState, useEffect } from "react";

export default function useCarousel(length) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(0);
    }, [length]);

    function prev() {
        setIndex(i => (i - 1 + length) % length );
    }

    function next() {
        setIndex(i => (i + 1) % length);
    }

    function goTo(i) {
        setIndex(i);
    }

    return {index, prev, next, goTo};
};