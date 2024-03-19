import { FunctionComponent } from "preact";
import { Job } from "../types.ts"


const JobDetail: FunctionComponent<Job> = (props) => {
    
    const { company_name, title, remote, tags, location, description, url } = props;

    //<div dangerouslySetInnerHTML={{ __html: description }} /> Inyecta el html 

    return (
        <div class="job-detail w-65">      
            <h1>{title}</h1>
            <p class="job-detail-location">{location}</p>
            <p>💼 Hibrido</p>
            <p>🏢 De 1.001 a 5.000 empleados · Servicios y tecnología de la información</p>
            <p>👨🏼‍💻 3 antiguos empleados de la empresa trabaja aqui · 1 antiguo empleado de la universidad trabaja aquí</p>
            <p> ✔ 7 de 10 aptitudes coinciden con tu perfil, podrías encagar muy bien</p>
            <p> 💡 Ve una comparación con los otros 12 solicitantes</p>
            <br></br>
            <a class="link-oferta" href={url}>Solicitar</a> 

            <div>
                <br></br>
                <h2> Acerca del empleo</h2>
                <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>

        </div>
    );
};

export default JobDetail;
