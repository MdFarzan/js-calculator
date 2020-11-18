
var entry = document.querySelector('#entry');
var early_evaluation = document.querySelector('#early-evaluation');
var btns = document.querySelectorAll('.btn');
var reset = true;
var result = 0;


for(let btn of btns){
    btn.addEventListener('click',(event)=>{
        
        entry.innerText += event.target.innerText;
        
        //disabling early evaluation if entry containes opcode and dot
        let v = entry.innerText.charAt(entry.innerText.length-1);
        if(v!='+' && v!='-' && v!='*' && v!='/' && v!='.'){
        early_evaluation.innerText = eval(entry.innerText);
            result = eval(entry.innerText);
        }
        
    });
}

//evaluation buttun
document.querySelector('.equal-btn').addEventListener('click',function(){
    entry.innerText = result;
});


//clear button
document.querySelector('#clear').addEventListener('click',function(){
    entry.innerText = '';
    early_evaluation.innerText = '0';
});


//clear last entry
document.querySelector('#clear-entry').addEventListener('click',function(){
    entry.innerText = entry.innerText.slice(0,-1);
    early_evaluation.innerText = entry.innerText;
});
