class PrototypeScore{
    constructor( name, clb, golas){
        this.name = name; 
        this.clb = clb; 
        this.golas = golas; 
    }

    score(){
        this.golas++;
    }

    clone(){
        return new PrototypeScore("CR7", "MU", 0);
    }
}

const prototypeservices = new PrototypeScore();
PrototypeScore.prototype.stats = {
    minutes: 0,
    ab: 1
}
const CR7 = prototypeservices.clone();
CR7.stats.minutes = 1000;

const M10 = prototypeservices.clone();
M10.stats.minutes = 200;
M10.name = "Messi";
M10.score();

console.log(`name is ${CR7.name} in clb ${CR7.clb} score ${CR7.golas} have ${ JSON.stringify(CR7.stats)}`);
console.log(`name is ${M10.name} in clb ${M10.clb} score ${M10.golas} have ${ JSON.stringify(M10.stats)}`);