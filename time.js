var date = new Date('02-17-2011')

function time(date){
var now = Date.now()

    dif = now - date
dif_d = Math.floor(dif/(1000*60*60*24))

years = Math.floor(dif_d/365)
months = Math.floor(dif_d/30)
days = dif_d

var string_diff
if(years!=0){
    string_diff="سنوات"+years+"منذو"
}else if(months!=0){
    string_diff="شهر"+months+"منذو"
}else if(days!=0){
    string_diff="يوم"+days+"منذو"
}else{
    string_diff="اليوم"
}
console.log(string_diff)
}


