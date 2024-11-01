import { useContext } from "react"
import { TareaContexto } from "."


export const UseTareas = () => {

   const contexto = useContext(TareaContexto)
   if(!contexto){
      throw new Error("puede que el useTarea este fuera del contexto de tareas");
   }
   return contexto;
}