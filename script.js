function generateMarks(){
    let name=document.getElementById('name').value;
    let maths=parseInt(document.getElementById('maths').value)||0;
    let english=parseInt(document.getElementById('english').value)||0;
    let science=parseInt(document.getElementById('science').value)||0;
    let hindi=parseInt(document.getElementById('hindi').value)||0;
    let social=parseInt(document.getElementById('social').value)||0;
    let gujarati=parseInt(document.getElementById('gujarati').value)||0;
    let sanskrit=parseInt(document.getElementById('sanskrit').value)||0;

    let total=maths+english+science+hindi+social+gujarati+sanskrit;
    let percentage=(total/700)*100;

    if (!name || !maths || !english || !science || !hindi || !social || !gujarati || !sanskrit) {
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('error-message').innerText = "Please fill in all the fields!";
        document.getElementById('resultSection').style.display = 'none'; 
        return; 
    }
    if (maths < 0 || maths > 100 || english < 0 || english > 100 || science < 0 || science > 100 || hindi < 0 || hindi > 100 || social < 0 || social > 100 || gujarati < 0 || gujarati > 100 || sanskrit < 0 || sanskrit > 100) {
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('error-message').innerText = "Please enter marks between 0 and 100 for all subjects!";
        document.getElementById('resultSection').style.display = 'none'; 
        return; 
    }

    document.getElementById('error-message').style.display = 'none';  
    document.getElementById('resultSection').style.display = 'block'; 

    document.getElementById('nameDisplay').innerText=name;
    document.getElementById('mathsDisplay').innerText=maths;
    document.getElementById('englishDisplay').innerText=english;
    document.getElementById('scienceDisplay').innerText=science;
    document.getElementById('hindiDisplay').innerText=hindi;
    document.getElementById('socialDisplay').innerText=social;
    document.getElementById('gujaratiDisplay').innerText=gujarati;
    document.getElementById('sanskritDisplay').innerText=sanskrit;
    document.getElementById('percentageDisplay').innerText=percentage.toFixed(2)+'%';

    document.getElementById('mathsDisplay').className=maths <35 ? 'fail':'pass';
    document.getElementById('englishDisplay').className=english <35 ? 'fail':'pass';
    document.getElementById('scienceDisplay').className=science <35 ? 'fail':'pass';
    document.getElementById('hindiDisplay').className=hindi <35 ? 'fail':'pass';
    document.getElementById('socialDisplay').className=social <35 ? 'fail':'pass';
    document.getElementById('gujaratiDisplay').className=gujarati <35 ? 'fail':'pass';
    document.getElementById('sanskritDisplay').className=sanskrit <35 ? 'fail':'pass';

    document.getElementById('resultSection').style.display = 'block';
}