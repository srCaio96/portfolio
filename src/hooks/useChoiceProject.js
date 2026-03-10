import { useState } from "react";

export default function useChoiceProject() {
  const [project, setProject] = useState('pessoais');

  function opProject(choice = 'pessoais') {
    setProject(choice);
  }

  return { project, opProject };
}