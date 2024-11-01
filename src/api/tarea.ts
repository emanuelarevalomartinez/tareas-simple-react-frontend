import { ActualizarTareaInterface, CrearTareaInterace } from "../interfaces/tarea-interface"

// const API=`http://localhost:3000/api`
const API = import.meta.env.VITE_URL_BACKEND; 

export const crearTareaRequest = ( tarea:CrearTareaInterace ) => 
   fetch(`${API}/tareas`,{
    method:"POST",
    body: JSON.stringify(tarea),
    headers:{
        'Content-Type':'application/json',
    }
   })

   export const obtenerTareasRequest = () => fetch(`${API}/tareas`);

   export const eliminarTareaRequest = (id:string) => fetch(`${API}/tareas/${id}`,{
    method:"DELETE",
   });

   export const actualizarTareaRequest = (id:string, tareaActualizada:ActualizarTareaInterface) => fetch(`${API}/tareas/${id}`,{
    method:"PATCH",
    body: JSON.stringify(tareaActualizada),
    headers:{
        'Content-Type':'application/json',
    }
   })