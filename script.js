const layarKalkulator=document.querySelector(".layar-kalkulator");
const Angka=document.querySelectorAll(".angka");
const Operasi=document.querySelectorAll(".operasi");
const samaDengan=document.querySelector(".samadengan");
const hapusSemua=document.querySelector(".hapus-semua");
const Desimal=document.querySelector(".desimal");
const Persen=document.querySelector(".persen");
let angkaSebelum="";
let angkaSekarang="0";
let operasiHitung="";


//const updateLayar= (tampilan)=>{
//    if (layarKalkulator.value==="0"){
//        layarKalkulator.value=tampilan
//    }else{
//    layarKalkulator.value+=tampilan;
//    }
//}
const updateLayar= (tampilan)=>{
    layarKalkulator.value=tampilan;
}

const inputAngka=(angka)=>{
    if (angkaSekarang==="0"){
        angkaSekarang=angka;
    }
    else{
    angkaSekarang+=angka;
    }
}

const hitung=()=>{
    let hasil="";
    switch (operasiHitung){
        case "+":
            hasil=parseFloat(angkaSebelum)+parseFloat(angkaSekarang);
            break
        case "-":
            hasil=angkaSebelum-angkaSekarang;
            break
        case "*":
            hasil=angkaSebelum*angkaSekarang;
            break
        case "/":
            hasil=angkaSebelum/angkaSekarang;
            break
        case "mod":
            hasil=angkaSebelum%angkaSekarang;
            break
        default:
            return
    }
    angkaSekarang=hasil;
    operasiHitung="";
}

const hapus=()=>{
    angkaSebelum="";
    angkaSekarang="0";
    operasiHitung="";
}

const inputdesimal=(dot)=>{
    if (angkaSekarang.includes(".")){
        return
    }
    angkaSekarang+=dot;
}
const inputOperasi=(operasi)=>{
    if (operasiHitung===""){
        angkaSebelum=angkaSekarang;
    }
    operasiHitung=operasi;
    angkaSekarang="";
}

const persentase=()=>{
    angkaSekarang=angkaSekarang/100;
}

Angka.forEach((angka)=>{
    angka.addEventListener("click",(event)=>{
        inputAngka(event.target.value);
        updateLayar(angkaSekarang);
    })
})

Operasi.forEach((operasi)=>{
    operasi.addEventListener("click",(event)=>{
        inputOperasi(event.target.value);
        updateLayar(operasiHitung);
    })
})

samaDengan.addEventListener("click",()=>{
    hitung();
    updateLayar(angkaSekarang);
})

hapusSemua.addEventListener("click",()=>{
    hapus();
    updateLayar(angkaSekarang);
})

Desimal.addEventListener("click",(event)=>{
    inputdesimal(event.target.value);
    updateLayar(angkaSekarang);
})

Persen.addEventListener("click",()=>{
    persentase();
    updateLayar(angkaSekarang);
})
