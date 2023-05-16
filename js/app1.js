class CalcGDZS{
    constructor(){
        this.pMaxDrop = pMaxDrop;
        this.pToExit = pToExit;
        this.deltaT = deltaT;
        this.tExitComand = tExitComand;
        this.tGeneral = tGeneral;
        this.tReturn = tReturn;
    }

    calcpMaxDrop(P){
       this.pMaxDrop = Math.round(P / 3);
    }

    calcpToExit(P){
        this.pToExit = P - this.pMaxDrop;
    }

    calcdeltaT(){
        Math.round((this.pMaxDrop * 6.8) / 45)
    }
}