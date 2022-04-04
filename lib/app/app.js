class App
{
    constructor(content){this.content = content;}
    executeServer(){require('./server').RunServer(this.content);}
    targetStarter(){return this.content}
    setStarter(target){this.content = target}
}

module.exports = new App();