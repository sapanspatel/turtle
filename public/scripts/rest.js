var url = "http://localhost:3000/issues";


function getJSONData(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload = function(){
        printIssue(this.responseText);
    }
    xhr.send();
}

function printIssue(data){
    var issue = JSON.parse(data);
     
    var html = "<table border='1|1'>";
    html+="<tr>";
    html+="<th> Issue ID </th>";
    html+="<th> Issue Name </th>";
    html+="<th> Issue Type </th>";
    html+="<th> Author </th>";
    html+="<th> Issue Description</th>";
    html+="</tr>";
    for (var i = 0; i < issue.length; i++) {
        saveId(issue[i].id);
        html+="<tr id="+(i+1)+">";
        html+="<td>"+(i+1)+"</td>";
        html+="<td>"+issue[i].title+"</td>";
        html+="<td>"+issue[i].type+"</td>";
        html+="<td>"+issue[i].author+"</td>";
        html+="<td>"+issue[i].detail+"</td>";
        html+="<td> <form><button class='btn login-btn' type='submit' formaction='editIssue.html'"; 
        html+="onclick='editId("+issue[i].id+")'> Edit </button>";
        html+="&nbsp <button class='btn login-btn' type='submit' onclick='deleteIssue("+issue[i].id+")'> Delete </button></form></td>";
        html+="</tr>";
    }
    html+="</table>";
    document.getElementById("issue-table").innerHTML = html;
}
function saveId(id){
    var lastid = id;
   
    localStorage.setItem('lastId',JSON.stringify(lastid));
}
function addIssue(){
    var id = JSON.parse(localStorage.getItem('lastId'));
    id = parseInt(id) + 1;
    id = JSON.stringify(id);

    var newIssue = {};
    newIssue.id = id;
    newIssue.title = document.getElementById("title").value;
    newIssue.type = document.getElementById("type").value;
    newIssue.detail = document.getElementById("description").value;
  
    var json = JSON.stringify(newIssue);
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST",url,true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.send(json);
}

function editId(id){
    localStorage.setItem('editId',JSON.stringify(id));
}
function editIssue(){
    var id = JSON.parse(localStorage.getItem('editId'));
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url+'/'+id, true);
    xhr.onload = function(){
        var issue = JSON.parse(this.responseText);
        document.getElementById("title").value = issue.title;
        document.getElementById("type").value = issue.type;
        document.getElementById("description").value = issue.detail;
    }
    xhr.send();
    
    var editIssue = {};
    editIssue.title = document.getElementById("title").value;
    editIssue.type = document.getElementById("type").value;
    editIssue.detail = document.getElementById("description").value;
  
    var json = JSON.stringify(editIssue);
    
    xhr = new XMLHttpRequest();
    xhr.open("PUT",url+'/'+id,true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json); 
}

function deleteIssue(id){
    function deleteConfirmation(){
        return window.confirm("You are about to Delete this Issue. Are you Sure ?");
    } 
    
    if(!deleteConfirmation()){
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url+'/'+id,true);
    xhr.onload = function(){
        getJSONData();
    }
    xhr.send();
}