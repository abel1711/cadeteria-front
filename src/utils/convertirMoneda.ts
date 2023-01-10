export const convertirMoneda = ( value: number )=>{
    if(typeof value === "number"){
        return value.toLocaleString( 'es-AR', {style:'currency', currency:'ARS',minimumFractionDigits: 2, maximumFractionDigits: 2});
    }
}