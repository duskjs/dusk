export class App
{
    constructor(){this.executeServer();}

    executeServer(){require('./server').RunServer();}
}

