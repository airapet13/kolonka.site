VANTA.CELLS({
    el: "#intro",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    color1: 0xe1ff00,
    color2: 0xfffe00,
    size: 4.7,
    speed: 4.20
})
let d = 0
function rnd() {
    // случайное число от min до (max+1)
    let a = document.getElementById("min1").value;
    let b = document.getElementById("max1").value;
    let min = Number(a)
    let max = Number(b)
    //alert(min + " " + max)
    if (min <= max){
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        let ans = Math.round(rand);
        document.getElementById("ans").innerHTML = ans;
    }
    else{
        let ans = "Минимум должен быть меньше максимума!"
        d += 1
        if (d>4){
            let ans = "Ну ты дурачок чтоль?"
            document.getElementById("ans").innerHTML = ans;
        }
        else{
            document.getElementById("ans").innerHTML = ans;
        }
    }
    return ans
}
