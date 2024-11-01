import { UseTareas } from "../context";
import { TareaInterface } from "../interfaces/tarea-interface"
import {IoCheckmarkDone,IoTrash} from 'react-icons/io5'

interface Props{
    tarea:TareaInterface;
}

export function TareaItem({tarea}:Props){

  const { eliminarTarea,actualizarTarea } = UseTareas();

    return (
        <div key={tarea._id} className="bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer">
          <div>
          <h1>{ tarea.titulo } </h1>
          <p>{ tarea.descripcion }</p>
          </div>
          <div className="flex gap-x-2">
           { tarea.hecha ?  (<IoCheckmarkDone
                              className="text-green-500"
                              onClick={ ()=> {
                             actualizarTarea(tarea._id,{ 
                             hecha: !tarea.hecha
                })} }/>) :  (<IoCheckmarkDone
                              className="text-gray-500"   
                              onClick={ ()=> {
                             actualizarTarea(tarea._id,{ 
                             hecha: !tarea.hecha
                       })
                 } }/>) }
           
             <IoTrash onClick={
               async ()=> { 
                if(!window.confirm("Esta seguro que desea eliminar la tarea actual ?")){
                   return;
                }
                await eliminarTarea(tarea._id);
                } 
            }/>
          </div>
        </div>
    )
}