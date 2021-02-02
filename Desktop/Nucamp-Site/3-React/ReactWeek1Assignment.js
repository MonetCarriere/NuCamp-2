



class Student {
    constructor(name,  email,  city){
        this.name = name;
        this.email = email;
        this.city = city;
    }
    learn(){
        console.log(`At Nucamp the students learn ${this.language} as well as ${this.framework}.`)
    }
}


class Bootcamp {
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = studens;
    }
    registerStudent(student){
        if(this.students.email.includes(student.email)){
            console.log(`The student is already registered!`);
        }
        else{
            this.students.push(student);
            console.log(`Registering ${this.name} to the bootcamp Webpage`)
        }
    }
}





















/*
class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(student){
        if(this.students.includes(student)){
            console.log("The student is already registered"`);
        }
        else{
            this.students.push(student);
                console.log(`Registering student to the bootcamp Web Dev Funtamentals.`);
        }

        
    
    }
}






/*
    const webDevFundamentals = new Bootcamp("Web Development Fundamentals", "Beginner");

    console.log(webDevFundamentals);

    const fullStack = new Bootcamp("Full Stack Web and mobile Development", "Advanced");

    console.log(fullStack);


    const Neo = new Student ("neo", "neo@matrix.org", "Seattle");

    const Morpheus = new Student ("Morpheus", "morpheus@matrix.org");

    const Trrinity = new Student ("Trinity", "trinity@matrix.org", "Bellgium");


    console.log(Neo)*/