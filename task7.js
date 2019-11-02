
//Question7
var text = "The quick brown fox jumps over the lazy dog";
var searchText = prompt('value');
var textIndex = -1;
var counter = 0;
for(var a = 0 ; a < text.length; a++){
    textIndex = text.indexOf(searchText, textIndex+1);
    if(textIndex >= 0) {
        counter++;
    }else{
        break;
    }
    console.log("Index = "+textIndex);
}
if(counter==0){
    console.log("Not found");
}else{
    console.log("counter = "+counter);
}