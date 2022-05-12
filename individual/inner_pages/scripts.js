function changeIMG(id){
    if (id=='guitar_form1') {
        document.getElementById('page_box1').style.border = '2px #101c26 solid';
        document.getElementById('page_box2').style.border = '0';
        document.getElementById('page_box3').style.border = '0';
        document.getElementById('name').innerHTML = "Gold Top";
       
    } else if (id == 'guitar_form2') {
        document.getElementById('page_box1').style.border = '0';
        document.getElementById('page_box2').style.border = '2px #101c26 solid';
        document.getElementById('page_box3').style.border = '0';
        document.getElementById('name').innerHTML = "Heritage Cherry Sunburst";
        
    } else if (id == 'guitar_form3') {
        document.getElementById('page_box1').style.border = '0';
        document.getElementById('page_box2').style.border = '0';
        document.getElementById('page_box3').style.border = '2px #101c26 solid';
        document.getElementById('name').innerHTML = "Tobacco Burst";
       
    }
}   

function changeAudio(){
    let selectElem = document.getElementById('user_audio')
    let audio = document.getElementById('audio');
    let source = selectElem.options[selectElem.selectedIndex].value;
    
    audio.src = source;
    audio.load();
    audio.play();
}
