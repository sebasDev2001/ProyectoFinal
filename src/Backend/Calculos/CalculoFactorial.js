export default function calcFacRec(numero){ 
    if(numero == 0){
        return 1;
    }
    
    return numero*calcFacRec(numero-1);
}

//////////////////////////////////////////
// Ojo con si el numero se muy grande porque despuueus saca error
///////////////////////////////////////////
