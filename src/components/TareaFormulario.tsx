import { ChangeEvent, FormEvent, useState } from "react"
import { CrearTareaInterace } from "../interfaces/tarea-interface"
import { UseTareas } from "../context"


function TareaFormulario() {

const [tarea, settarea] = useState<CrearTareaInterace>({
       titulo:"",
       descripcion:"",
       hecha:false
      })

      const {crearTarea} = UseTareas();

      const HandleChange =(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        settarea({...tarea,[e.target.name]:e.target.value});
      }

      const HandleSubmit = async (e:FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          crearTarea(tarea);
      }

  return (
    <div>
      <form onSubmit={HandleSubmit}>
          <input type="text" name="titulo"
          className="border2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
          placeholder="Escribe un titulo"
          onChange={HandleChange}
          />

          <textarea name="descripcion" rows={3}
          className="border2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
          placeholder="Escribe una descripción"
          onChange={HandleChange}
          ></textarea>

          <label htmlFor="" 
            className="inline-flex items-center gap-x-2">
            <input type="checkbox" className="h-5 w-5 text-indigo-500"
            onChange={ ()=> settarea({...tarea,hecha: !tarea.hecha}) }
            />
            <span>Hecha</span>
          </label>

          <button className="bg-indigo-500 px-3 block py-2 w-full">
            Guardar
          </button>

      </form>
    </div>
  )
}

export default TareaFormulario

