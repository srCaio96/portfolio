import dataCourses from '../../data/courses.json';
import dataPersonal from '../../data/personalProjects.json';
import { useState, useEffect } from "react";

export default function useSetProject() {
    const [dataC, setDataC] = useState([]);
    const [dataP, setDataP] = useState([]);
    const [loading, setLoading] = useState(true)
   
    useEffect(() => {   
        async function load() {
            setDataC(dataCourses)
            setDataP(dataPersonal);
            setLoading(false)
        }
        load();
    }, []); 
    
    return {dataC, dataP, loading};
};