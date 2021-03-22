//Buttons & Button Functions
const fighto = document.querySelector("#fight");
const backo = document.querySelector("#Back");
const atk1 = document.querySelector("#Atk1");
const atk2 = document.querySelector("#Atk2");
const myhp= document.querySelector("#urHP");
const urhp = document.querySelector("#NMEHP");
    const fmenu= () =>{
        backo.classList.remove("notNow");
        atk1.classList.remove("notNow");
        atk2.classList.remove("notNow");
        fighto.classList.add("notNow");
    }
    const bmenu=()=>{
        backo.classList.add("notNow");
        atk1.classList.add("notNow");
        atk2.classList.add("notNow");
        fighto.classList.remove("notNow");
    }


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
        healthy.innerText=this.HP;
    }
    fight(enemyName,atc,hu){
        if(Math.random()<=hu){
            enemyName.HP-=(atc.damage);
            healthy.innerText=(this.name+" used "+atc.name+'!');
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
        healtho.innerText=this.HP;
    }
    fight(DummyMe,atc){
        const currentAtk= atc[Math.round(Math.random())];
        if(Math.random()<=this.accuracy){
            DummyMe.HP-=(currentAtk.damage);
            healtho.innerText=(this.name+" used "+currentAtk.name +'!');
            myhp.innerText=(DummyMe.HP+"/"+100);
        }
        else{
            healtho.innerText=("The Enemy Missed");
        }    
    }
}

//Make My Ship
const meee = new Me("S.S. Bumpkins",100,[
    {name:"Missiles",
    damage:15,
},
    {name:"Big Gun",
    damage:25,
}
]);

//Make my Enemies
arrAliens[0] = new Aliens("Dingle",25,[{
    name:"Shock",
    damage:5,
},{
    name:"Psycho Knife",
    damage:10,
}
],.5);

arrAliens[1]= new Aliens("Ploomoo",25,[{
    name: "Kick Jump",
    damage:30
}]);

let corr=0;


const rumble1 = () =>{
    if (arrAliens[corr].HP<=0){
        arrAliens[corr].classList.add("hidden");
        corr+=1;
        arrAliens[corr].classList.remove("hidden");
    }
    else{
        meee.fight(arrAliens[corr],meee.attacks[0],0.3);
        arrAliens[corr].fight(meee,arrAliens[corr].attacks,arrAliens[corr].accuracy);
    }
}

const rumble2 = ()=>{
    if (corr==5 && arrAliens[5].HP<=0){
         healthy.innerText=("You've Won!");
    }
     if(arrAliens[corr].HP<=0){
         arrAliens[corr].classList.add("hidden");
         corr= corr+1;
         arrAliens[corr].classList.remove("hidden");
    }
    else{
        meee.fight(arrAliens[corr],meee.attacks[1],0.75);
        arrAliens[corr].fight(meee,arrAliens[corr].attacks,arrAliens[corr].accuracy);
    }
}

fighto.addEventListener('click',fmenu);
backo.addEventListener('click',bmenu);
atk1.addEventListener('click',rumble1);
atk2.addEventListener('click',rumble2);