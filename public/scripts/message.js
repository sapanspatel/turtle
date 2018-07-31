var data =[
    {
        "title":"Various Image Formats",
        "type":"Image",
        "detail":"Example of diffrent Image formats"
    },
    {
        "title":"Problem with video",
        "type":"Video/media",
        "detail":"problem with video tag"
    }
];

function issueInfo(){
    var html = "<table border='1|1'>";
    html+="<tr>";
    html+="<th> Issue ID </th>";
    html+="<th> Issue Name </th>";
    html+="<th> Issue Type </th>";
    html+="<th> Issue Description</th>";
    html+="</tr>";
    for (var i = 0; i < data.length; i++) {
    html+="<tr>";
    html+="<td>"+(i+1)+"</td>";
    html+="<td>"+data[i].title+"</td>";
    html+="<td>"+data[i].type+"</td>";
    html+="<td>"+data[i].detail+"</td>";

    html+="</tr>";
    }
    html+="</table>";
    document.getElementById("issue-table").innerHTML = html;
}