import { createContext, useEffect, useState } from "react"
import { actualizarTareaRequest, crearTareaRequest, eliminarTareaRequest, obtenerTareasRequest } from "../api";
import { ActualizarTareaInterface, CrearTareaInterace, TareaInterface } from "../interfaces/tarea-interface";

interface TarasContextoProps{
    listaTareas: TareaInterface[],
    crearTarea: (nuevaTarea: CrearTareaInterace) => Promise<void>,
    eliminarTarea: (id: string) => Promise<void>,
    actualizarTarea: (id: string, tareaAtualizar: ActualizarTareaInterface) => Promise<void>,
}

export const TareaContexto = createContext<TarasContextoProps>({
    listaTareas: [],
    crearTarea: async () => { },
    eliminarTarea: async () => { },
    actualizarTarea: async () => { },
});

interface Props{
    children: React.ReactNode;
}

export const TareaContextoGlobal: React.FC<Props> = ({children}) => {

  const [listaTareas, setlistaTareas] = useState<TareaInterface[]>([]);


  // usefect para que la pagina no se duerma

  useEffect(() => {
    const intervalId = setInterval(() => {
        const fetchTareas = async () => {
            try {
                const response = await obtenerTareasRequest();
                const data = await response.json();
                console.log("Pgina activa");
                
                setlistaTareas(data);
            } catch (error) {
                console.error("Error al obtener tareas:", error);
            }
        };
        fetchTareas();
    }, 60000); 

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(intervalId);
}, []);

// hasta aqui

  useEffect(() => {
    obtenerTareasRequest()
    .then((response)=> response.json())
    .then((data)=> setlistaTareas(data))
  }, [])

  const crearTarea = async (nuevaTarea:CrearTareaInterace) => {
        const respuesta = await crearTareaRequest(nuevaTarea);
        const data = await respuesta.json();
        setlistaTareas([...listaTareas,data]);
  }

  const eliminarTarea = async (id:string) => {
    const eliminar = await eliminarTareaRequest(id);
    if(eliminar.status === 204){
       setlistaTareas( listaTareas.filter( (tarea)=> tarea._id !== id ) );
    }
  }

  const actualizarTarea = async (id:string, tareaAtualizar: ActualizarTareaInterface) => {
    const respuesta = await actualizarTareaRequest(id,tareaAtualizar);
    const data = await respuesta.json();

    console.log(data);
    
    
    setlistaTareas( listaTareas.map( (tarea)=> (tarea._id === id ? {...tarea,...tareaAtualizar}: tarea) ))
  } 
    return(
        <TareaContexto.Provider 
        value={{
          listaTareas,
          crearTarea,
          eliminarTarea,
          actualizarTarea,
        }}>
            {children}
        </TareaContexto.Provider>
    )
}