
const allAil = document.getElementsByClassName("U");
const arrAliens = [
    document.getElementById("enemy_1"),
    document.getElementById("enemy_2"),
    document.getElementById("enemy_3"),
    document.getElementById("enemy_4"),
    document.getElementById("enemy_5"),
    document.getElementById("enemy_6"),
];
arrAliens[0,5].style.display('none');

class Me{
    
}
class Aliens {
    constructor(name,HP,attacks){
        this.name=name;
        this.HP=HP;
        this.attacks=attacks;
    }
}
