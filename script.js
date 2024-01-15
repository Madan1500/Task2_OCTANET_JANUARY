let input=document.querySelector('.ip-box');
let date=document.querySelector('.date');
let btn=document.querySelector('.btn');
let notes=document.querySelector('.notes');



btn.addEventListener('click',createrect);



function createrect(){
    let rect=document.createElement('div');
    let ipValue=input.value;
    console.log(ipValue);
    let dateValue=date.value;
    rect.classList.add('rect');
    rect.innerHTML=`<p>${ipValue}</p><p>${dateValue}</p>`;
    let correct=document.createElement('button');
    let cross=document.createElement('button');
    correct.innerHTML=`<span class="material-symbols-outlined">
    done
    </span>`
    correct.classList.add('correct');
    cross.innerHTML=`<span class="material-symbols-outlined">
    close
    </span>`
    cross.classList.add('cross');
    rect.appendChild(createbox(correct,cross));
    notes.appendChild(rect);
    input.value='';
    correct.addEventListener('click',()=>{
        rect.style.backgroundColor='green';
        rect.style.textDecoration='line-through';
    })
    cross.addEventListener('click',()=>{
        rect.style.backgroundColor='red';
        rect.style.display='none';
    })
}

function createbox(correct,cross){

    if(input.value===''){
        alert('Please enter a note');
        return;
    }
    let box=document.createElement('div');
    box.classList.add('box');
    box.appendChild(correct);
    box.appendChild(cross);
    return box;
}