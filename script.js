const lists = [12,89,56,47,38,45,78,105];
nums = lists.join(" ");
document.getElementById('demo').innerHTML = nums;

function replace(){
    num1 = parseInt(prompt("Enter the index number of which you want to replace")); 
    text = prompt("What do you want to replace it with?");

    lists.splice(num1,0,text);
    nums = lists.join(" ");
    document.getElementById('demo').innerHTML = nums;
}

function del(){
    num2 = parseInt(prompt("which index you want you delete"));

    lists.splice(num2,1);
    nums = lists.join(" ");
    document.getElementById('demo').innerHTML = nums;
}
