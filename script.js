let id0 =document.getElementById("id0");
id0.addEventListener('click',function(){
    let textarea =document.getElementById("textarea");
    let previousText=textarea.value;
    textarea.value=previousText+0;
});
let id1 =document.getElementById("id1");
id1.addEventListener('click',function(){
    let textarea =document.getElementById("textarea");
    let previousText=textarea.value;
    textarea.value=previousText+1;
});

let id2 =document.getElementById("id2");
id2.addEventListener('click',function(){
    let textarea =document.getElementById("textarea");
    let previousText=textarea.value;
    textarea.value=previousText+2;
});

let id3 =document.getElementById("id3");
id3.addEventListener('click',function(){
    let textarea =document.getElementById("textarea");
    let previousText=textarea.value;
    textarea.value=previousText+3;
});

let id4 =document.getElementById("id4");
id4.addEventListener('click',function(){
    let textarea =document.getElementById("textarea");
    let previousText=textarea.value;
    textarea.value=previousText+4;
});
let id5 =document.getElementById("id5");
id5.addEventListener('click',function(){
    let textarea =document.getElementById("textarea");
    let previousText=textarea.value;
    textarea.value=previousText+5;
});
let id6 =document.getElementById("id6");
id6.addEventListener('click',function(){
    let textarea =document.getElementById("textarea");
    let previousText=textarea.value;
    textarea.value=previousText+6;
});

let id7 =document.getElementById("id7");
id7.addEventListener('click',function(){

    let textarea =document.getElementById("textarea");
    let previousText=textarea.value;
    // console.log("previous text is:"+previousText)
    let textadded=previousText+7;
    // console.log("Text to be added is:"+textadded)
    // textarea.innerText=textadded;
    textarea.value=textadded;
    console.log("Currenttext is:"+textarea.value)
});
let id8 =document.getElementById("id8");
id8.addEventListener('click',function(){
    let textarea =document.getElementById("textarea");
    let previousText=textarea.value;
    textarea.value=previousText+8;
});
let id9 =document.getElementById("id9");
id9.addEventListener('click',function(){
    let textarea =document.getElementById("textarea");
    let previousText=textarea.value;
    textarea.value=previousText+9;
});

let id_AC =document.getElementById("id-AC");
id_AC.addEventListener('click',function(){
    let textarea =document.getElementById("textarea");
    textarea.value="";
});

let id_C =document.getElementById("id-C");
id_C.addEventListener('click',function(){
    let textarea =document.getElementById("textarea");
    let previousText=textarea.value;
    // console.log("previous test is:"+previousText);
    // console.log("length is:"+previousText.length);
    // console.log("slice text is:"+previousText.slice(0,previousText.length-1))
    textarea.value=previousText.slice(0,previousText.length-1);
})

let id_modulo =document.getElementById("id-modulo");
id_modulo.addEventListener('click',function(){
    let textarea =document.getElementById("textarea");
    let previousText=textarea.value;
    console.log("Previuos text is:"+previousText);
    console.log("Currenttext is:"+previousText+"%")
    currentText=previousText+"%";
    textarea.value=currentText;
});
let id_divison =document.getElementById("id_divison");
id_divison.addEventListener('click',function(){
    let textarea =document.getElementById("textarea");
    let previousText=textarea.value;
    let currentText =previousText+"/";
    textarea.value=currentText;
});

let id_multiply =document.getElementById("id_multiply");
id_multiply.addEventListener('click',function(){
    let textarea =document.getElementById("textarea");
    let previousText=textarea.value;
    let currentText =previousText+"*";
    textarea.value=currentText;
});
let id_subtract =document.getElementById("id_subtract");
id_subtract.addEventListener('click',function(){
    let textarea =document.getElementById("textarea");
    let previousText=textarea.value;
    let currentText =previousText+"-";
    textarea.value=currentText;
});
let id_add =document.getElementById("id_add");
id_add.addEventListener('click',function(){
    let textarea =document.getElementById("textarea");
    let previousText=textarea.value;
    let currentText =previousText+"+";
    // textarea.innerText=currentText;
    textarea.value=currentText;

});
let id_dot =document.getElementById("id_dot");
id_dot.addEventListener('click',function(){
    let textarea =document.getElementById("textarea");
    let previousText=textarea.value;
    let currentText =previousText+".";
    textarea.value=currentText;
});

let id_result =document.getElementById("id_result");
id_result.addEventListener('click',function(){
    let textarea =document.getElementById("textarea");
    let previousText=textarea.value;
    let currentText =eval(previousText);
    console.log("previuos text is:"+previousText);
    console.log("currenttext is:"+currentText);
    // textarea.innerText=currentText;
    textarea.value=currentText;

});

textarea.addEventListener('keyup',(e)=>{

    let textarea = document.getElementById("textarea");
    if(e.keyCode === 13){
        let previousText=textarea.value;
        let currentText=eval(previousText);
        textarea.value=currentText;
    }
    else if((e.keyCode>=96 && e.keyCode<=105) || (e.keyCode>=106 && e.keyCode<=107) ||(e.keyCode>=109 && e.keyCode<=111) || e.keyCode==53 || e.keyCode==8)
    {
        console.log("Data is:"+textarea.value);
    }
    else
    {
        console.log("KeyCode is:"+e.keyCode);
        alert("Only number are allowed")

        let textarea =document.getElementById("textarea");
        let previousText=textarea.value;
        textarea.value=previousText.slice(0,previousText.length-1);
    }
    
    
})