function emoticonResponse(hVal,sVal,nVal,aVal){

if(hVal>sVal && hVal>nVal && hVal>aVal){
//document.getElementById("happyEmo").style.animation="anim1 1s infinite ease-in-out";
document.getElementById("happyEmo").style.boxShadow="1p 1px 1px #eee";
document.getElementById("happyEmo").style.transform="scale(1.25)";
document.getElementById("happyEmo").style.transition="transform 0.1s ease";

document.getElementById("sadEmo").style.boxShadow="0p 0px 0px #fff";
document.getElementById("sadEmo").style.transform="scale(1)";
document.getElementById("sadEmo").style.transition="transform 0.1s ease";

document.getElementById("normalEmo").style.boxShadow="0p 0px 0px #fff";
document.getElementById("normalEmo").style.transform="scale(1)";
document.getElementById("normalEmo").style.transition="transform 0.1s ease";

document.getElementById("angryEmo").style.boxShadow="0p 0px 0px #fff";
document.getElementById("angryEmo").style.transform="scale(1)";
document.getElementById("angryEmo").style.transition="transform 0.1s ease";
}
else if(sVal > hVal && sVal > nVal && sVal > aVal){
//document.getElementById("sadEmo").style.animation="anim1 1s infinite ease-in-out";
document.getElementById("sadEmo").style.boxShadow="1p 1px 1px #eee";
document.getElementById("sadEmo").style.transform="scale(1.25)";
document.getElementById("sadEmo").style.transition="transform 0.1s ease";

document.getElementById("happyEmo").style.boxShadow="0p 0px 0px #fff";
document.getElementById("happyEmo").style.transform="scale(1)";
document.getElementById("happyEmo").style.transition="transform 0.1s ease";

document.getElementById("normalEmo").style.boxShadow="0p 0px 0px #fff";
document.getElementById("normalEmo").style.transform="scale(1)";
document.getElementById("normalEmo").style.transition="transform 0.1s ease";

document.getElementById("angryEmo").style.boxShadow="0p 0px 0px #fff";
document.getElementById("angryEmo").style.transform="scale(1)";
document.getElementById("angryEmo").style.transition="transform 0.1s ease";

}
else if(nVal>hVal && nVal>sVal && nVal>aVal){
//document.getElementById("normalEmo").style.animation="anim1 1s infinite ease-in-out";
document.getElementById("normalEmo").style.boxShadow="1p 1px 1px #eee";
document.getElementById("normalEmo").style.transform="scale(1.25)";
document.getElementById("normalEmo").style.transition="transform 0.1s ease";

document.getElementById("happyEmo").style.boxShadow="0p 0px 0px #fff";
document.getElementById("happyEmo").style.transform="scale(1)";
document.getElementById("happyEmo").style.transition="transform 0.1s ease";

document.getElementById("sadEmo").style.boxShadow="0p 0px 0px #fff";
document.getElementById("sadEmo").style.transform="scale(1)";
document.getElementById("sadEmo").style.transition="transform 0.1s ease";

document.getElementById("angryEmo").style.boxShadow="0p 0px 0px #fff";
document.getElementById("angryEmo").style.transform="scale(1)";
document.getElementById("angryEmo").style.transition="transform 0.1s ease";

}
else if(aVal>hVal && aVal>sVal && aVal>nVal){
//document.getElementById("angryEmo").style.animation="anim1 1s infinite ease-in-out";
document.getElementById("angryEmo").style.boxShadow="1p 1px 1px #eee";
document.getElementById("angryEmo").style.transform="scale(1.25)";
document.getElementById("angryEmo").style.transition="transform 0.1s ease";

document.getElementById("happyEmo").style.boxShadow="0p 0px 0px #fff";
document.getElementById("happyEmo").style.transform="scale(1)";
document.getElementById("happyEmo").style.transition="transform 0.1s ease";

document.getElementById("sadEmo").style.boxShadow="0p 0px 0px #fff";
document.getElementById("sadEmo").style.transform="scale(1)";
document.getElementById("sadEmo").style.transition="transform 0.1s ease";

document.getElementById("normalEmo").style.boxShadow="0p 0px 0px #fff";
document.getElementById("normalEmo").style.transform="scale(1)";
document.getElementById("normalEmo").style.transition="transform 0.1s ease";

}else {

}
}
function clearAllTransitions(){
document.getElementById("happyEmo").style.boxShadow="0p 0px 0px #fff";
document.getElementById("happyEmo").style.transform="scale(1)";
document.getElementById("happyEmo").style.transition="transform 0.1s ease";

document.getElementById("sadEmo").style.boxShadow="0p 0px 0px #fff";
document.getElementById("sadEmo").style.transform="scale(1)";
document.getElementById("sadEmo").style.transition="transform 0.1s ease";

document.getElementById("normalEmo").style.boxShadow="0p 0px 0px #fff";
document.getElementById("normalEmo").style.transform="scale(1)";
document.getElementById("normalEmo").style.transition="transform 0.1s ease";

document.getElementById("angryEmo").style.boxShadow="0p 0px 0px #fff";
document.getElementById("angryEmo").style.transform="scale(1)";
document.getElementById("angryEmo").style.transition="transform 0.1s ease";

}