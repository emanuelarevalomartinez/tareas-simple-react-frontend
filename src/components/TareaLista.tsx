
import { TareaItem } from "./TareaItem";
import { UseTareas } from "../context";

function TareaLista() {

  const { listaTareas }= UseTareas();
  
  return (
    <div>
     {
      listaTareas.map((tarea)=> (
        <TareaItem tarea={tarea} key={tarea._id}/>
      ))
     }
    </div>
  )
}

export default TareaLista
