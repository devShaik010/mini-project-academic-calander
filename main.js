function change(){
    document.getElementById('heading').style.backgroundColor=' rgb(1, 198, 57)';
}


function show()
{
   const a = document.getElementById('n1').value;
   const b = document.getElementById('n2').value;

   if((a==2022)&&(b==1))
   {
       alert("Important Day \n  1:-New Year Day \n  9:-Guru Gobind Singh's Birthday \n 13:-Lohri \n 14:-Makar Sankranti,Bihu & Pongal \n\n Holidays \n ....... \n26:-Republic Day");
   } 
   else if((a==2022)&&(b==2)){
       alert("\n Faberuary \n aprel");
   } 
   else if((a==2022)&&(b==3)){
       alert("\n March Month");
   }
   else{
      alert('There no event !');
   }
}

