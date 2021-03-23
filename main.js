//Buttons & Button Functions
const fighto = document.querySelector("#fight");
const backo = document.querySelector("#Back");
const repol = document.querySelector("#save")
const atk1 = document.querySelector("#Atk1");
const atk2 = document.querySelector("#Atk2");

//Stats & Stat Messages
const myhp= document.querySelector("#urHP");
const urhp = document.querySelector("#NMEHP");
const statMes= document.querySelector("#statbar");

    const fmenu= () =>{
        backo.classList.remove("notNow");
        atk1.classList.remove("notNow");
        atk2.classList.remove("notNow");
        fighto.classList.add("notNow");
        repol.classList.add("notNow");
    }
    const bmenu=()=>{
        backo.classList.add("notNow");
        atk1.classList.add("notNow");
        atk2.classList.add("notNow");
        fighto.classList.remove("notNow");
        repol.classList.remove("notNow");
    }
    let potions = 10;
    let baseP=100;
    const healME=()=>{
        if(meee.HP!=baseP){
            meee.HP=baseP;
            potions-=1;
            let tempString = ("Repair x"+potions);
            repol.innerText=tempString;
            myhp.innerText=(meee.HP+"/"+baseP);
        }
        else if (meee.HP==baseP){
            statMes.innerText="You're at full health!";
            statMes.classList.add('hit');
        }
        else{
            statMes.innerText="You're out of repair tools";
        }
    }

const healthy = document.querySelector("#hp");
const healtho = document.querySelector("#hp2");
const allAil = document.getElementsByClassName("U");

const trophyArr=[
    document.getElementById("Psychic"),
    document.getElementById("Insect"),
    document.getElementById("Long"),
    document.getElementById("Ghost"),
    document.getElementById("Slime"),
    document.getElementById("Bat"),
    document.getElementById("Hidden"),
    document.getElementById("Traitor"),
];
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
for (i=0;i<trophyArr.length;i++){
    trophyArr[i].classList.add("hidden");
}

const secretBat= document.getElementById("")



class Me{
    constructor(name,HP,attacks){
        this.name=name;
        this.HP=HP;
        this.attacks=attacks;
    }
    announceHealth(){
        healthy.innerText=this.HP;
    }
    fight(enemyName,atc,hu,num){
        if(Math.random()<=hu){
            enemyName.HP-=(atc.damage);
            arrAliens[num].classList.add("hit");
            healthy.innerText=(this.name+" used "+atc.name+'!');
        }
        else{
            if(healthy.innerText=="You Missed"){
                healthy.classList.add("hit");
            }
            else{
            healthy.innerText=("You Missed");
            }
        }
    }
}
    
class Aliens {
    constructor(name,HP,attacks){
        this.name=name;
        this.HP=HP;
        this.attacks=attacks;
    }
    announceHealth(){
        healtho.innerText=this.HP;
    }
    fight(DummyMe,atc){
        const currentAtk= atc[Math.round(Math.random())];
        if(Math.random()<=currentAtk.accuracy){
            DummyMe.HP-=(currentAtk.damage);
            healtho.innerText=(this.name+" used "+currentAtk.name +'!');
            myhp.innerText=(DummyMe.HP+"/"+baseP);
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
const dingle = new Aliens("Dingle",25,[{
    name:"Shock",
    damage:5,
    accuracy:0.9
},{
    name:"Psycho Knife",
    damage:10,
    accuracy:.25
}
]);

const ploomoo = new Aliens("Ploomoo",37.5,[{
    name: "Kick Jump",
    damage:20,
    accuracy:.5
}]);

const slipp = new Aliens("Slipp",50,[{
    name: "Tenta-Slap",
    damage:35,
    accuracy:0.75
},{
    name: "Acid Vomit",
    damage:50,
    accuracy:0.3
}
]);



let arrAliensNME = [];
arrAliensNME.push(dingle,ploomoo,slipp);


let corr=0;

const rumble1 = () =>{
    if(meee.HP>0){
    if (arrAliensNME[corr].HP<=0){
        arrAliens[corr].classList.add('hidden');
        trophyArr[corr].classList.remove("hidden");
        urhp.innerText="You beat "+arrAliensNME[corr].name;
        corr+=1;
        arrAliens[corr].classList.remove('hidden');
        urhp.innerText=arrAliensNME[corr].HP;
        // meee.HP+=10;
        // baseP+=10;
         myhp.innerText=(meee.HP+"/"+baseP);
        meee.fight(arrAliensNME[corr],meee.attacks[0],0.8,corr);
    arrAliensNME[corr].fight(meee,arrAliensNME[corr].attacks,arrAliensNME[corr].accuracy);
    }
    else{
    meee.fight(arrAliensNME[corr],meee.attacks[0],0.8,corr);
    arrAliensNME[corr].fight(meee,arrAliensNME[corr].attacks,arrAliensNME[corr].accuracy);
}
    }
    else{
        fighto.classList.add("notNow");
        repol.classList.add("notNow");
        healtho.innerText="You've Lost";
        healthy.innerText="";
    }
}


const rumble2 = ()=>{
    // if (corr==5 && arrAliensNME[5].HP<=0){
    //      healthy.innerText=("You've Won!");
    // }
     if(arrAliensNME[corr].HP<=0){
         arrAliens[corr].classList.add('hidden');
         trophyArr[corr].classList.remove("hidden");
         corr= corr+1;
         arrAliens[corr].classList.remove("hidden");
         meee.HP+=25;
         baseP+=25;
         myhp.innerText=(meee.HP+"/"+baseP);
         meee.fight(arrAliensNME[corr],meee.attacks[1],0.5,corr);
         arrAliensNME[corr].fight(meee,arrAliensNME[corr].attacks,arrAliensNME[corr].accuracy);
    }
    else{
        meee.fight(arrAliensNME[corr],meee.attacks[1],0.5,corr);
        arrAliensNME[corr].fight(meee,arrAliensNME[corr].attacks,arrAliensNME[corr].accuracy);
    }
}
if(meee.HP<=0){
    fighto.classList.add("notNow");
    repol.classList.add("notNow");
    healtho.innerText="You've Lost";
    healthy.innerText="";
}

fighto.addEventListener('click',fmenu);
backo.addEventListener('click',bmenu);
repol.addEventListener('click',healME);
atk1.addEventListener('click',rumble1);
atk2.addEventListener('click',rumble2);