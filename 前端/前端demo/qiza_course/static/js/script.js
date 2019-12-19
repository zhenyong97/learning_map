//challenge 1: your Age in Day
function ageInDays(){
    var birthYear = parseInt(prompt("What year were you born... Good friend?"), 10);
    var ageInDays = (2019 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("Your are " + ageInDays + " days old that");
    h1.setAttribute('id', 'ageIndays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    // console.log(ageInDays)
    
}

function clear_value(){
    let value_column = document.getElementById("ageIndays");
    if (value_column == null){
        console.log('not exist the node')
    }else{
        document.getElementById('flex-box-result').removeChild(value_column);
    }
    
}


//challenge 2: generate cat

function add_cat(){
    var div_contain = document.createElement('div')
    div_contain.setAttribute("class", "cat_desc");
    var cat_img = document.createElement('img')
    // cat_img.src = "C:\\Users\\YONG\\Desktop\\前端学习\\qiza_course\\static\\image\\giphy.gif";
    // cat_img.width = "300px";
    // cat_img.height = "300px";
    cat_img.setAttribute("src", "C:\\Users\\YONG\\Desktop\\前端学习\\qiza_course\\static\\image\\giphy.gif")
    cat_img.setAttribute("width", "300px")
    cat_img.setAttribute("height", "300px")
    div_contain.appendChild(cat_img)
    // document.createAttribute()
    document.getElementById('flex-catbox-container').appendChild(div_contain);
}