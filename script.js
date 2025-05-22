function touch(value){
    document.getElementById('output').value=document.getElementById('output').value+value;
}
function clearing(){
    document.getElementById('output').value='';
}
function equal(){
    let process = document.getElementById('output').value;
    let result = eval(process); 
    document.getElementById('output').value = result;
}