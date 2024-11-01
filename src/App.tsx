import TareaFormulario from "./components/TareaFormulario"
import TareaLista from "./components/TareaLista"
import { TareaContextoGlobal } from "./context"


function App() {

  return (
   <div className="bg-zinc-900 h-screen text-white flex justify-center items-start sm:items-center">
    <div className="bg-zinc-950 p-4 w-full sm:w-2/5 ">
       <h1 className="text-3xl font-bold text-center block my-2">App de Tareas</h1>
       <TareaContextoGlobal>
         <TareaFormulario/>
         <TareaLista/>
       </TareaContextoGlobal>
    </div>
   </div>
  )
}

export default App
