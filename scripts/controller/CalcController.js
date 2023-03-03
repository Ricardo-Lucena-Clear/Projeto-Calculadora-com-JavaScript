class CalcController {
    constructor(){


        this.displayCalc = "0";
        this.dataAtual;

    }
    
    get displayCalc(){
    return this._displayCalc;
}


    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get dataAtual(){
        return this._dataAtual;
    }
    set dataAtual(valor){
        this._dataAtual = valor;
    }
  
}