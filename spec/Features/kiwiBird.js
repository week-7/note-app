function kiwiBird(){

(function hasTitle(){
  var tft = document.getElementById('NZ');
    console.log("Test: Title");

  if (tft.innerHTML === 'KiwiNotes'){
    console.log("Passed");}
  else{
    console.log('Failed') ;}
})();

(function inputNote(){
  var getArea = document.getElementById('textarea');
    console.log("Test: Input");

getArea.value += "Aga Thady Zak and Nick";

  var saveButton = document.getElementById('saveButton');

saveButton.click();

  var noteList = document.getElementById('list');
  var lastEntry = noteList.lastChild.firstChild.innerHTML;

if(lastEntry === "Aga Thady Zak and Ni..."){
  console.log("Passed");}
else{
  console.log('Failed') ;}

})();

}
