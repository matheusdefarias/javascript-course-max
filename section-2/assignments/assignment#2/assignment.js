const task3Element = document.getElementById('task-3');

function functionOne(){
    alert("Function One called!!");
}

function functionTwo(name){
    alert("Hi " + name + "!!");
}

function fullString(name1, name2, name3){
    return name1 + '-' + name2 + '-' + name3;
}

functionOne();
functionTwo('HTML');

fullStringResult = fullString('HTML5', 'CSS3', 'Javascript')
alert(fullStringResult);

task3Element.addEventListener('click', functionOne);