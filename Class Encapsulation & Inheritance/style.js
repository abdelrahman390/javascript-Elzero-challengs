



class user{
    #e
    constructor(age, name, email){
        this.a = age;
        this.n = name;
        this.#e = email
    }
    GetPrivNumuser(){
        return this.#e;
    }
}

class admin extends user {
    #e
    constructor(age, name, email){
        super(age, name, email)
    }
}

let privuser = new user(18, "os", 10)
let privAdmin = new admin(28, "os", 20)

console.log(privuser.GetPrivNumuser())
console.log(privAdmin.GetPrivNumuser())