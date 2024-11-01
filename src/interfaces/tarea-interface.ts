

export interface TareaInterface{
    _id:string;
    titulo:string,
    descripcion:string;
    hecha:boolean;
    createdAt?:Date;
    updatedAt?:Date;
}

export type CrearTareaInterace = Omit<TareaInterface,"_id" | "createdAt" | "updatedAt">;
export type ActualizarTareaInterface = Partial<CrearTareaInterace>;