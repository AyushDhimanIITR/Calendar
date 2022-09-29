var months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

var days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

var calendarObject = document.getElementById("calendar"); 

var currentMonth = (new Date()).getMonth();
var currentYear = (new Date()).getFullYear();

function Calendar(month, year){
    
    var firstDay = (new Date(year, month, 01)).getDay();
    var numberOfDays = 32 - (new Date(year, month, 32).getDate());
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let theadrow = document.createElement('tr');
    for(wd = 0; wd<=6; wd++){
        
        let th = document.createElement("th");
        let thtext = document.createTextNode(days[wd])
        th.append(thtext);
        theadrow.append(th);
    }
    thead.append(theadrow);
    table.append(thead);
    let tbody = document.createElement("tbody");
    var dateDate = 1;

    for(weeks = 0; weeks<=5; weeks++ ) {
        let tr = document.createElement("tr");
        for (wds = 0; wds <= 6; wds++) {
            let td = document.createElement("td");
            if(dateDate > numberOfDays){
                continue;
            }
            if(weeks === 0 && wds < firstDay){
                
            }else{
                // let td = document.createElement("td");
                let tdText = document.createTextNode(dateDate);
                
                td.append(tdText);
                dateDate = dateDate + 1;

            }
            tr.append(td);
        }
        tbody.append(tr);
    }

    table.append(tbody);
    calendarObject.append(table);

}   

Calendar(currentMonth, currentYear);  

function next(){

}

function back(){
    
}