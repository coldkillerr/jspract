
function ageInDays(){
    var birthyear = prompt('What year were you born in ??');
    let ageindays=(2020-birthyear)*365;
    var  h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+ageindays+' days old . ');
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    

}

function reset(){
    document.getElementById('ageindays').remove()
}

