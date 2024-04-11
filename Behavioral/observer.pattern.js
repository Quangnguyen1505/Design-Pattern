class Observer {
    constructor(name){
        this.pickName = name;
    }

    updateName( location ){
        this.GotoPick(location)
    }

    GotoPick( location ){
        console.log(`${this.pickName} help in ${JSON.stringify(location)}`);
    }
}

class Subject {
    constructor(){
        this.observerList = []
    }

    addSubjectOnObserver( name ){
        this.observerList.push(name);
    }

    notify(location){
        this.observerList.forEach( observer => observer.updateName(location));
    }
}

const subject = new Subject();

const riki = new Observer('riki');
const author = new Observer('author');
const krixi = new Observer('krixi');

subject.addSubjectOnObserver(riki);
subject.addSubjectOnObserver(author);
subject.addSubjectOnObserver(krixi);

subject.notify({long:123, lat: 456})