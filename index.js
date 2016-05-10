
var ab=function(){
    console.log("function ")
}

console.log(a)
console.log(ab())

var a="abhay"


/*
/!**
 * Created by ruhi on 6/5/16.
 *!/
var persons = [];
var count=0
function main() {
   persons.push(createPersons("ruhi", 1910, 1912));
   persons.push(createPersons("ruhi", 1912, 1949));
    persons.push(createPersons("abhay", 1950, 1970));
    persons.push(createPersons("a", 1940, 1999));
    persons.push(createPersons("b", 1950, 1955));
    persons.push(createPersons("c", 1995, 2000));
    persons.push(createPersons("c22", 1962, 1965));
    showPersons(persons);
    for (var i = 0; i < persons.length; i++) {
        var p = persons[i];
//console.log("person",p);

    }
  //  findRange(persons);
}

function onSubmit()
{
    if($("#formPersons").attr("edit-row-id")!=null)
    {
        var currentRowId=( $("#formPersons").attr("edit-row-id"));
        console.log(currentRowId)
        var currentRow= $("#persons").find("[table-row="+currentRowId+"]")
        var children=currentRow.children();

        $(children[0]).html($("#name").val());
        $(children[1]).html($("#birth").val());
        $(children[2]).html($("#death").val());
        $("#name").val("");
        $("#birth").val("");
        $("#death").val("");

    }
    else {
        var name = $("#name").val();
        var birth = $("#birth").val();
        var death = $("#death").val();
        if (name == '' || birth == "" || death == '') {
            alert("enter all values");
        }
        else {
            var person = createPersons(name, birth, death);
            persons.push(person);
            $("#persons").append(enterRow(person));
            $("#name").val("");
            $("#birth").val("");
            $("#death").val("");

            ///var row=$("</tr>");
            //var entry="<tr><td>"+name+"</td><td>"+birth+"</td><td>"+death+"</td></tr>";
            //row.append(entry);
            //$("#persons").append(row);

        }
    }
}



function createPersons(name, birth, death) {
    var map = {};
    map['name'] = name;
    map['birth'] = birth;
    map['death'] = death;
    map['name']=name;
    return map;

}

function showPersons(persons) {
    var a=""
    for (var i = 0; i < persons.length; i++) {
       // console.log(i);
        a=a+enterRow(persons[i]);
    }
    $("#persons").append(a);

}

function enterRow(person) {
  /!*  var entry = $("<tr/>");
   entry=entry+
    entry.append("<td>" + person.name + "</td>");
    entry.append("<td>" + person.birth + "</td>");
    entry.append("<td>"+ person.death + "</td>");*!/

    var id="person-table-"+count;
   var entry="<tr table-row='"+count+"' id="+id+"><td>"+person.name+"</td><td>"+person.birth+"</td><td>"+person.death+"</td><td> <button class='edit' type='button' name='edit' value='edit' onclick='onEdit("+count+")'>edit</button></td> <td> <button type='button' class='del' name='delete' value='delete' onclick='onDelete("+count+")'>delete</button></td></tr>";
    count++;
    return entry;

   // var entry=$("#persons tr:last").after("<tr><td>"+person.name+"</td><td>"+person.birth+"</td><td>"+person.death+"</td></tr>");
    //console.log(entry);
   // return entry;
}

function onEdit(id)
{
var par=$("#persons").find("[table-row="+id+"]")

    var children=par.children();

    $("#name").val($(children[0]).html());
    $("#birth").val($(children[1]).html());
    $("#death").val($(children[2]).html());

    $("#formPersons").attr("edit-row-id",id);
   // console.log($("#formPersons").attr("edit-row-id"))
    //console.log(id)
}


function onDelete(id)
{
    console.log("in delete",id)
   $("#persons").find("[table-row="+id+"]").remove();       //this coresponds to current function here fn() is an object


}

/!*$(document).ready(function(){
    $(".del").click(function(){
        ($(this).parent().parent().remove());
    });
});*!/

function findRange() {
    var personsNew=[]
    var rows= $("#persons").children().children();
   // console.log(rows);
    for(var i=1;i<rows.length;i++)
    {
        var values=$(rows[i]).children();
        var name=$(values[0]).text()
        var birth=$(values[1]).text()
        var death=$(values[2]).text()
       // console.log(name)
        personsNew.push(createPersons(name,birth, death));

    }
    persons=personsNew;

    var rangeMap = {};
    var max = 0;
    for (var i = 0; i < persons.length; i++) {
        var p = persons[i];
        for (var j = p.birth; j <= p.death; j++) {
            if (!(j in rangeMap)) {
                rangeMap[j] = 1;
            }
            else {
                rangeMap[j] = rangeMap[j] + 1;
            }
            if (rangeMap[j] > max)
                max = rangeMap[j];
        }

    }
    var maxYears = [];
    for (var i in rangeMap) {
        if (rangeMap[i] == max)
            maxYears.push(i);
    }
    var i = 0;
    while (i < maxYears.length) {
        var minyear = maxYears[i];
        var maxyear = maxYears[i];
        for (var j = i + 1; j < maxYears.length; j++) {
            if (maxYears[j] == maxYears[i]) {
                maxyear = maxYears[j];
            }
            else
                break;

        }
       // console.log("range:", minyear, maxyear);
        i = j + 1;
    }
   // console.log(maxYears);
   console.log(rangeMap);
    $("#range").text(maxYears)
}

main();
*/
