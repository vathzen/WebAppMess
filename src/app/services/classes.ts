export class Response {
    Status: string;
    Text: string;
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}

export class User {
   username: string;
   password: string;
   constructor(values: Object = {}) {
        Object.assign(this, values);
   }
}

export class Menu {
    bf1: string;
    bf1c: string;
    bf2: string;
    bf2c: string;
    lun1: string;
    lun1c: string;
    lun2: string;
    lun2c: string;
    din1: string;
    din1c: string;
    din2: string;
    din2c: string;

    constructor(array: string[]){
        this.bf1 = array[0];
        this.bf1c = array[1];
        this.bf2 = array[2];
        this.bf2c = array[3];
        this.lun1 = array[4];
        this.lun1c = array[5];
        this.lun2 = array[6];
        this.lun2c = array[7];
        this.din1 = array[8];
        this.din1c = array[9];
        this.din2 = array[10];
        this.din2c = array[11];
    }
}

export class Code{
    Username: string;
    Code: string;

    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}
