import JobList from "../components/JobsList.tsx";
import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import JobDetail from "../components/JobDetail.tsx";
import { Job } from "../types.ts"


const JobBase: FunctionComponent<{
    data: Job[] 
}> = (props) => {

    const [job, setJob] = useState<Job>(props.data[0]); //Para inicializar el job seleccionado con el primer trabajo de la lista

    //JobList recibe la lista de trabajos y el metodo setJob para cambiar el estado del job seleccionado
    //JobDetail recibe el job seleccionado y pinta el detalle del trabajo

    return (
        <div>
            <h1 class="portada">
                ✏💼 Práctica 3 - Ofertas de empleo 💼✏
            </h1>

            <div class="layout">    
                <JobList 
                    data={props.data}
                    selectedJob={job}
                    setJob={setJob}
                />
                <JobDetail   
                    title={job?.title} 
                    description={job?.description} 
                    url={job?.url} 
                    location={job?.location} 
                    company_name={job?.company_name} 
                    remote={job?.remote}
                    tags={job?.tags}
                    slug={job?.slug}
                /> 
            </div>
        </div>
    );
};

export default JobBase;
