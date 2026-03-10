import { useState } from "react";

export default function useSearchLanguage() {
    const [tool, setTool] = useState('HTML5');
  
    function language(choice = 'HTML5') {
        setTool(choice)  
    }

    return {tool, language}
};