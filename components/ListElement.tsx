import { FunctionComponent } from "preact";
import { Post, PostResponse } from "../types.ts";
import { Job } from "../types.ts"


const ListElement: FunctionComponent<{
    myJob: Job,
    selected: boolean
}> = (props) => {

    const { company_name, title, remote, tags, location } = props.myJob;

    //El div comprueba si el trabajo seleccionado es el mismo que el que se esta pintando, si es asi le añade la clase selected
    return (

        <div class={`list-element ${props.selected && 'selected' }`}> 

            <div>
                <img src="https://static.vecteezy.com/system/resources/previews/017/347/353/non_2x/hexagonal-blue-cube-free-png.png" alt="img" class="img-oferta"></img>
                <p class="titulo-oferta">{title}</p>
                <p class="compania-oferta">{company_name}</p>
                <p class="ubicacion-oferta">{location}</p>
                <p class="promocionado"> Promocionado  <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="img" class="img-linkedin"></img></p>
            </div>

            <hr></hr>
        </div>
    );
};

export default ListElement;
