console.log('Js linked.');

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
        if(v!='+' && v!='-' && v!='*' && v!='/' && v!='.')
        early_evaluation.innerText = eval(entry.innerText);
        

        

    });
}



