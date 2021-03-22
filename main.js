const fighto = document.querySelector("#fight");
const healthy = document.querySelector("#hp");
const healtho = document.querySelector("#hp2");
const allAil = document.getElementsByClassName("U");
const arrAliens = [
    document.getElementById("enemy_1"),
    document.getElementById("enemy_2"),
    document.getElementById("enemy_3"),
    document.getElementById("enemy_4"),
    document.getElementById("enemy_5"),
    document.getElementById("enemy_6"),
];
for (i=1;i<arrAliens.length;i++){
    arrAliens[i].classList.add("hidden");
}

class Me{
    constructor(name,HP,attacks){
        this.name=name;
        this.HP=HP;
        this.attacks=attacks;
    }
    announceHealth(){
        healthy.innerText=(this.HP);
    }
    fight(enemyName){
        const currentAtk= this.attacks[Math.round(Math.random()*this.attacks.length)];
        if(Math.random()<this.attacks.accuracy){
        console.log(this.name,"used",currentAtk.name,'!');
            enemyName.HP-=(currentAtk.damage);
            enemyName.announceHealth();
        }
        else{
            healthy.innerText=("You Missed");
        }
    }
}
    
class Aliens {
    constructor(name,HP,attacks,accuracy){
        this.name=name;
        this.HP=HP;
        this.attacks=attacks;
        this.accuracy=accuracy;
    }
    announceHealth(){
        healtho.innerText=(this.HP);
    }
    fight(DummyMe){
        const currentAtk= this.attacks[Math.round(Math.random()*this.attacks.length)];
        console.log(this.name,"used",currentAtk.name,'!');
            DummyMe.HP-=(currentAtk.damage);
            DummyMe.announceHealth();      
    }
}

//Make My Ship
const meee = new Me("S.S. Bumpkins",100,[
    {name:"Blaster",
    damage:15,
    accuracy:.95
},
    {name:"Big Missile",
    damage:25,
    accuracy:.5
}
]);

//Make my Enemies
arrAliens[0] = new Aliens("Dingly",25,[{
    name:"Shock",
    damage:5
},{
    name:"Psycho Knife",
    damage:10
}
]);


let corr=0;

if (corr==5 && arrAliens[corr].HP<=0){
    healthy.innerText=("You've Won!");
}
else if(arrAliens[corr].HP<=0){
    arrAliens[corr].classList.add("hidden");
    corr+=1;
    arrAliens[corr].classList.remove("hidden");
}
const rumble = () =>{
    if(arrAliens[corr].HP<=0){
        
    }
}


fighto.addEventListener('click',)