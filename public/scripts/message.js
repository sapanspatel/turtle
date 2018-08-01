var data =[
    {
        "title":"Various Image Formats",
        "type":"Image",
        "detail":"Example of diffrent Image formats"
    },
    {
        "title":"Problem with video",
        "type":"Video",
        "detail":"problem with video tag"
    }
];

function addIssue(){
    //test.push("3");
    data.push({"title":document.getElementById("title").value,
                "type":document.getElementById("type").value,
                "detail":document.getElementById("description").value});
    localStorage.setItem('issueData',JSON.stringify(data));
   
}

function issuetoEdit(){
    var id = JSON.parse(localStorage.getItem('id'));
    var retrievedObject = JSON.parse(localStorage.getItem('issueData'));
    for(var i=0; i < retrievedObject.length;i++){
        if(i == (id)){
            document.getElementById("title").value = retrievedObject[i].title;
            document.getElementById("type").value = retrievedObject[i].type;
            document.getElementById("description").value = retrievedObject[i].detail;
        }
    }
}

function editIssue(){
    var id = JSON.parse(localStorage.getItem('id'));
    var retrievedObject = JSON.parse(localStorage.getItem('issueData'));
    for(var i=0; i < retrievedObject.length;i++){
        if(i == (id)){
            retrievedObject[i].title = document.getElementById("title").value;
            retrievedObject[i].type = document.getElementById("type").value;
            retrievedObject[i].detail = document.getElementById("description").value;
        }
    }
    localStorage.setItem('issueData',JSON.stringify(retrievedObject));
}

function issueInfo(){
    var retrievedObject = JSON.parse(localStorage.getItem('issueData'));

    var html = "<table border='1|1'>";
    html+="<tr>";
    html+="<th> Issue ID </th>";
    html+="<th> Issue Name </th>";
    html+="<th> Issue Type </th>";
    html+="<th> Issue Description</th>";
    html+="</tr>";
    for (var i = 0; i < retrievedObject.length; i++) {
        html+="<tr id="+(i+1)+">";
        html+="<td>"+(i+1)+"</td>";
        html+="<td>"+retrievedObject[i].title+"</td>";
        html+="<td>"+retrievedObject[i].type+"</td>";
        html+="<td>"+retrievedObject[i].detail+"</td>";
        html+="<td> <form><button class='btn login-btn' type='submit' formaction='editIssue.html'"; 
        html+="onclick='setId("+(i)+")'> Edit </button>";
        html+="&nbsp <button class='btn login-btn' type='submit' onclick='deleteIssue("+(i+1)+")'> Delete </button></form></td>";
        html+="</tr>";
    }
    html+="</table>";
    document.getElementById("issue-table").innerHTML = html;
}

function setId(id){
    localStorage.setItem('id',JSON.stringify(id));
}
function deleteIssue(id){  
    
    var retrievedObject = JSON.parse(localStorage.getItem('issueData'));
   
    for(var i=0; i<retrievedObject.length;i++){
         
        if(i == id-1){ 
            retrievedObject.splice(i,1);
            localStorage.setItem('issueData',JSON.stringify(retrievedObject));
            break;
        }
    }
    issueInfo();

}