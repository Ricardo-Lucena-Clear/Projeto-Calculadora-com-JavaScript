class CalcController {
    constructor(){


        this.displayCalc = "0";
        this.currentDate;
        this.initialize();

    }
    
    initialize(){

        let displayCalcEl = document.querySelector("#display");
        let dateEl =document.querySelector("#data");
        let timeEl =document.querySelector("#hora");

        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML ="01/02/2023";
        timeEl.innerHTML ="13:56";

    }
    
    get displayCalc(){
    return this._displayCalc;
}


    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get currentDate(){
        return this._currentDate;
    }
    set currentDate(valor){
        this._currentDate = valor;
    }
  
}