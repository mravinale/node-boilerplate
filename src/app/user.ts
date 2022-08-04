
export class User {

    private _name!: string;

    constructor(name:string) {
        this.name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    public displayName(){
        console.log(`User Name: ${this.name}`)
    }
}
