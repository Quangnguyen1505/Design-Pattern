// class RoundRobin {
//     constructor(){
//         if(RoundRobin.instance){
//             return RoundRobin.instance
//         }
//         RoundRobin.instance = this
//         this.servers = [];
//         this.index = 0;
//     }

//     setServer( server ){
//         this.servers.push(server);
//     }

//     getServer(){
//         if(!this.servers.length){
//             throw new Error('Server is defined')
//         }
//        const server = this.servers[this.index];
//        //modulos 

//        this.index = (this.index +1 ) % this.server.length;

//        return server
//     }

// }

// const loadBalancer = new RoundRobin();
// const loadBalancer1 = new RoundRobin();
// console.log("check: ",loadBalancer === loadBalancer1 )


// class RoundRobin {
//     constructor(){
//         if(RoundRobin.instance){
//             return RoundRobin.instance;
//         }
//         RoundRobin.instance = this
//         this.servers = [];
//         this.index = 0;
//     }

//     addServer( server ){
//         this.servers.push(server);
//     }

//     getNextServer(){
//         if(!this.servers.length){
//             throw new Error("server not call!!");
//         }

//         const server = this.servers[this.index];

//         this.index = ( this.index + 1 ) % this.servers.length;

//         return server;
//     }
// }



// const loadBalancer = new RoundRobin();
// const loadBalancer1 = new RoundRobin();
// console.log("check true or flase::", loadBalancer === loadBalancer1);

// loadBalancer.addServer("server 01");
// loadBalancer.addServer("server 02");
// loadBalancer.addServer("server 03");
// loadBalancer.addServer("server 04");

// console.log(loadBalancer.getNextServer());
// console.log(loadBalancer.getNextServer());
// console.log(loadBalancer.getNextServer());
// console.log(loadBalancer.getNextServer());
// console.log(loadBalancer.getNextServer());
// console.log(loadBalancer.getNextServer());
// console.log(loadBalancer.getNextServer());


class RoundRobin {
    constructor(){
        if(RoundRobin.instance){
            return RoundRobin.instance;
        }
        RoundRobin.instance = this;
        this.servers = [];
        this.index = 0;    
    }

    addServer (server){
        this.servers.push(server);
    } 

    getNextServer(){
        if(!this.servers.length){
            throw new Error("server not add!!");
        }

        const server = this.servers[this.index];

        this.index = (this.index + 1) % this.servers.length;

        return server;
    }
}

const loadBalancer = new RoundRobin();
const loadBalancer1 = new RoundRobin();

console.log("check exists singel::", loadBalancer === loadBalancer1);

loadBalancer.addServer("server 1");
loadBalancer.addServer("server 2");
loadBalancer.addServer("server 3");
// loadBalancer.addServer("server 4");

console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());
console.log(loadBalancer.getNextServer());
