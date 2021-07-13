var a = [
    {
        "id" : "one",
        "QUE" : "What is the sum of 10 and 20 ?",
        "option" : [
            10,
            20,
            30,
            "none of the above"
        ],
        "ans" : 30
    },
    {
        "id" : "two",
        "QUE" : "What is the remainder when we devide 10 by 3 ?",
        "option" : [
            0,
            2,
            1,
            "None"
        ],
        "ans" : 1
    },
    {
        "id" : "three",
        "QUE" : "What is the approx age of sun ?",
        "option": [
            "4.603 billion years",
            "5.603 billion years",
            "6.603 billion years",
            "None of the above"
        ],
        "ans": "4.603 billion years"
    }
]
var nam=0;
var k = 0;
var count = 0;
function fun(){
    var ho = document.getElementById("nam").value;
    nam = ho;
    document.getElementById("name").style.display = "none";
    document.getElementById("quee").style.display = "flex";
    func();
    return;
}
function func(){
    if(k>0){
        for(var j=0;j<4;j++){
            var q = document.getElementById(a[k-1].id+j.toString());
                    if(q.checked)
                    {
                        if(q.value == a[k-1].ans)
                        {
                            count++;
                        }
                    }
                }
            }
    if(k==2)
    {
        document.getElementById("next").innerHTML = "Finish";
    }
    if(k===3)
    {
        // document.getElementById(a[k].id).style.display = "none";
        funcc();
        return;
    }
        // if(k===0)
        // {
        //     var ho = document.getElementById("name").value;
        //     nam = ho;
        //     document.getElementById("name").style.display = "none";
        //     document.getElementById("quee").style.display = "flex";
        //     alert(nam);
        // }
        var div = document.getElementById("quee");
        while (div.firstChild) {
            div.removeChild(div.lastChild);
          }

        document.getElementById("next").style.display = "block";
    var que = document.createElement("h2");
    que.innerHTML = a[k].QUE; 
    que.id = a[k].id;
    div.appendChild(que);
    for(var j=0;j<4;j++)
    {
        que.appendChild(document.createElement("br"));
        var lab = document.createElement("label");
        lab.setAttribute("class","custom-radio");
        que.appendChild(lab);
        var b = document.createElement("input");
        b.setAttribute('type', "radio");
        b.type = "radio";
        b.id = a[k].id+j.toString();
        // c.setAttribute("for",b);
        b.setAttribute('name',a[k].id);
        b.setAttribute('value',a[k].option[j]);
        var c  = document.createElement("span");
        c.setAttribute("class","radio-btn");
        var i = document.createElement("i");
        i.setAttribute("class","fas fa-vote-yea");
        var h = document.createElement("h2");
        h.innerHTML = a[k].option[j];
        // c.innerHTML = a[k].option[j];
        c.appendChild(i);
        c.appendChild(h);
        lab.appendChild(b);
        lab.appendChild(c);
    }
    // var but = document.createElement("button");
    // but.type = "submit";
    // but.addEventListener('click',func());
    // div.appendChild(but);
    k++;
}
function funcc()
{
    var f = document.getElementById("quee");
    document.getElementById("next").style.display = "none";
    document.getElementById(a[k-1].id).style.display = "none";
    var hh = document.createElement("h1");
    hh.innerHTML = nam;
    hh.style.textTransform = "capitalize";
    hh.innerHTML+=" Your total score is given below";

    f.appendChild(hh);
    f.appendChild(document.createElement("br"));
    var score = document.createElement("h1");
    score.innerHTML = "SCORE : " + count;
    f.appendChild(score); 


}

// function fun(){
//     nam = document.getElementById("name").value;
//     document.getElementById("name").style.display = "none";
//     document.getElementById("quee").style.display = "flex";
//     func();
//     return;
// }