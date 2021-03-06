var reformButtons;
var englishSentence;
var value;
var hindiSentence;
var LanguageSelected;
function selectedLanguage()
{
    LanguageSelected = document.getElementById("dropdownSelect");
    value = LanguageSelected.options[LanguageSelected.selectedIndex].value;
    document.getElementById("buttons").innerHTML="";
    document.getElementById("formedSentence").style.visibility="hidden";
    document.getElementById("formedSentenceContent").innerHTML="";
    document.getElementById("reformTheSentenceButton").style.visibility="hidden";
    document.getElementById("checkCorrectnessButton").style.visibility="hidden";
    document.getElementById("wrongAnswer").style.visibility="hidden";
    document.getElementById("correctAnswer").style.visibility="hidden";
    document.getElementById("getCorrectSentenceButton").style.visibility="hidden";
    document.getElementById("showAnswers").innerHTML="";
        if(value === "english")
        {
            var englishSentence1 = ['John ate an apple before afternoon','before afternoon John ate an apple','John before afternoon ate an apple'];
            var englishSentence2 = ['some students like to study in the night','at night some students like to study'];
            var englishSentence3 = ['John and Mary went to church','Mary and John went to church'] ;
            var englishSentence4 = ['John went to church after eating','after eating John went to church','John after eating went to church'];
            var englishSentence5 = ['did he go to market','he did go to market'];
            var englishSentence6 = ['the woman who called my sister sells cosmetics','the woman who sells cosmetics called my sister','my sister who sells cosmetics called the woman','my sister who called the woman sells cosmetics'];
            var englishSentence7 = ['John goes to the library and studies','John studies and goes to the library'];
            var englishSentence8 = ['John ate an apple so did she','she ate an apple so did John'];
            var englishSentence9 = ['the teacher returned the book after she noticed the error','the teacher noticed the error after she returned the book','after the teacher returned the book she noticed the error','after the teacher noticed the error she returned the book','she returned the book after the teacher noticed the error','she noticed the error after the teacher returned the book','after she returned the book the teacher noticed the error','after she noticed the error the teacher returned the book'];
            var englishSentence10 = ['I told her that I bought a book yesterday','I told her yesterday that I bought a book','yesterday I told her that I bought a book','I bought a book that I told her yesterday','I bought a book yesterday that I told her','yesterday I bought a book that I told her'];
            var englishSentences = [englishSentence1,englishSentence2,englishSentence3,englishSentence4,englishSentence5,englishSentence6,englishSentence7,englishSentence8,englishSentence9,englishSentence10];
            //To print message regarding experiment
            document.getElementById("experimentShortInfoContent").innerHTML = "Form a  sentence (Declarative or Interrogative or any other type) from the given words";
            //To print message regarding button selection
            document.getElementById("buttonShortInfoContent").innerHTML = "(select the buttons in proper order)";
            //To randomly select one sentence among the 10 english sentences
            englishSentence = englishSentences[Math.floor(Math.random() * englishSentences.length)];
            //To randomly select one correct sequence from the sentence selected above and to jumble
            var finalEnglishSentence=englishSentence[Math.floor(Math.random() * englishSentence.length)];
            //for creating buttons
            var i=0;
            var count=0;
            let body = document.getElementById("buttons");
            var wordsInButtons=finalEnglishSentence.split(" ");
            for(i=0 ; i<wordsInButtons.length ; i++)
            {
                j = Math.floor(Math.random() * wordsInButtons.length);
                finalEnglishSentence = wordsInButtons[i];
                wordsInButtons[i] = wordsInButtons[j];
                wordsInButtons[j] = finalEnglishSentence;
            }
            for(i=0 ; i<wordsInButtons.length ; i++)
            {
                let button = document.createElement("button");
                button.id='button'+i;
                button.innerHTML = wordsInButtons[i]
                body.appendChild(button);

                button.addEventListener("click",function()
                {
                    document.getElementById("formedSentence").style.visibility="visible";
                    document.getElementById("formedSentenceContent").innerHTML+=this.innerHTML+" ";
                    this.style.display="none";
                    count+=1;
                    if(count >0){
                        document.getElementById("reformTheSentenceButton").style.visibility="visible";
                    }
                    var sentenceFormedByButtons=String(document.getElementById("formedSentenceContent").innerHTML).replace(/\s+$/,"");
                    var x = sentenceFormedByButtons.split(" ");
                    if(wordsInButtons.length == x.length)
                    {
                        document.getElementById("checkCorrectnessButton").style.visibility="visible";
                    }
                });
                reformTheSentenceButton.addEventListener("click",function()
                {
                    document.getElementById("checkCorrectnessButton").style.visibility="hidden";
                    document.getElementById("wrongAnswer").style.visibility="hidden";
                    document.getElementById("correctAnswer").style.visibility="hidden";
                    document.getElementById("getCorrectSentenceButton").style.visibility="hidden";
                    document.getElementById("showAnswers").innerHTML="";
                    myButton = document.getElementById("getCorrectSentenceButton");
                    myButton.value = "Get Correct Sentence";
                    for(i=0 ; i<wordsInButtons.length ; i++)
                    {
                        if(document.getElementById('button'+i).style.display=="none")
                        {
                            document.getElementById('button'+i).style.display="inline";
                            document.getElementById("formedSentence").style.visibility="hidden";
                            document.getElementById("formedSentenceContent").innerHTML="";
                            document.getElementById("reformTheSentenceButton").style.visibility="hidden";
                        }
                    }
                    button.addEventListener("click",function()
                    {
                        document.getElementById("formedSentence").style.visibility="visible";
                        document.getElementById("reformTheSentenceButton").style.visibility="visible";
                    });
                    dropdownSelect.addEventListener("change",function selectedLanguage(){});
                    checkCorrectnessButton.addEventListener("click",function checkCorrectness(){});
                    getCorrectSentenceButton.addEventListener("click",function disp(){});
                });
                checkCorrectnessButton.addEventListener("click",function checkCorrectness(){});
            }
        }
        else if(value === "hindi")
        {
            var hindiSentence1 = ['राम और श्याम बाजार गयें','राम और श्याम गयें बाजार','बाजार गयें राम और श्याम','गयें बाजार राम और श्याम'];
            var hindiSentence2 = ['राम सोया और श्याम भी','श्याम सोया और राम भी','सोया श्याम और राम भी','सोया राम और श्याम भी'];
            var hindiSentence3 = ['मैंने उसे बताया कि राम सो रहा है','मैंने उसे बताया कि सो रहा है राम','उसे मैंने बताया कि राम सो रहा है','उसे मैंने बताया कि सो रहा है राम','मैंने बताया उसे कि राम सो रहा है','मैंने बताया उसे कि सो रहा है राम','उसे बताया मैंने कि राम सो रहा है','उसे बताया मैंने कि सो रहा है राम','बताया मैंने उसे कि राम सो रहा है','बताया मैंने उसे कि सो रहा है राम','बताया उसे मैंने कि राम सो रहा है','बताया उसे मैंने कि सो रहा है राम'];
            var hindiSentence4 = ['राम खाकर सोया','खाकर राम सोया','राम सोया खाकर','खाकर सोया राम','सोया राम खाकर','सोया खाकर राम'];
            var hindiSentence5 = ['बिल्लियों को मारकर कुत्ता सो गया','मारकर बिल्लियों को कुत्ता सो गया','बिल्लियों को मारकर सो गया कुत्ता','मारकर बिल्लियों को सो गया कुत्ता','कुत्ता सो गया बिल्लियों को मारकर','कुत्ता सो गया मारकर बिल्लियों को','सो गया कुत्ता बिल्लियों को मारकर','सो गया कुत्ता मारकर बिल्लियों को'];
            var hindiSentence6 = ['एक लाल किताब वहाँ है','एक लाल किताब है वहाँ','वहाँ है एक लाल किताब','है वहाँ एक लाल किताब'];
            var hindiSentence7 = ['एक बड़ी सी किताब वहाँ है','एक बड़ी सी किताब है वहाँ','बड़ी सी एक किताब वहाँ है','बड़ी सी एक किताब है वहाँ','वहाँ है एक बड़ी सी किताब','वहाँ है बड़ी सी एक किताब','है वहाँ एक बड़ी सी किताब','है वहाँ बड़ी सी एक किताब'];
            var hindiSentences = [hindiSentence1,hindiSentence2,hindiSentence3,hindiSentence4,hindiSentence5,hindiSentence6,hindiSentence7];
            //To print message regarding experiment
            document.getElementById("experimentShortInfoContent").innerHTML="Form a  sentence (Declarative or Interrogative or any other type) from the given words";
            //To print message regarding button selection
            document.getElementById("buttonShortInfoContent").innerHTML="(select the buttons in proper order)";
            //To randomly select one sentence among the 7 hindi sentences
            hindiSentence = hindiSentences[Math.floor(Math.random() * hindiSentences.length)];
            //To randomly select one correct sequence from the sentence selected above
            var finalHindiSentence=hindiSentence[Math.floor(Math.random() * hindiSentence.length)];
            //for creating buttons
            var i=0;
            var count=0;
            var clickedButtons=0;
            var selectedButtons=0;
            let body = document.getElementById("buttons");
            var hindiwordsInButtons=finalHindiSentence.split(" ");
            for(i=0 ; i<hindiwordsInButtons.length ; i++)
            {
                j = Math.floor(Math.random() * hindiwordsInButtons.length);
                finalHindiSentence = hindiwordsInButtons[i];
                hindiwordsInButtons[i] = hindiwordsInButtons[j];
                hindiwordsInButtons[j] = finalHindiSentence;
            }
            for(i=0 ; i<hindiwordsInButtons.length ; i++)
            {
                let button = document.createElement("button");
                button.id='button'+i;
                button.innerHTML = hindiwordsInButtons[i]
                body.appendChild(button);

                button.addEventListener("click",function()
                {
                    document.getElementById("formedSentence").style.visibility="visible";
                    document.getElementById("formedSentenceContent").innerHTML+=this.innerHTML+" ";
                    this.style.display="none";
                    count+=1;
                    if(count >0){
                        document.getElementById("reformTheSentenceButton").style.visibility="visible";
                    }
                    var sentenceFormedByButtons=String(document.getElementById("formedSentenceContent").innerHTML).replace(/\s+$/,"");
                    var x = sentenceFormedByButtons.split(" ");
                    if(hindiwordsInButtons.length == x.length)
                    {
                        document.getElementById("checkCorrectnessButton").style.visibility="visible";
                    }
                });
                reformTheSentenceButton.addEventListener("click",function()
                {
                    document.getElementById("checkCorrectnessButton").style.visibility="hidden";
                    document.getElementById("wrongAnswer").style.visibility="hidden";
                    document.getElementById("correctAnswer").style.visibility="hidden";
                    document.getElementById("getCorrectSentenceButton").style.visibility="hidden";
                    document.getElementById("showAnswers").innerHTML="";
                    myButton = document.getElementById("getCorrectSentenceButton");
                    myButton.value = "Get Correct Sentence";
                    for(i=0 ; i<hindiwordsInButtons.length ; i++)
                    {
                        if(document.getElementById('button'+i).style.display=="none")
                        {
                            document.getElementById('button'+i).style.display="inline";
                            document.getElementById("formedSentence").style.visibility="hidden";
                            document.getElementById("formedSentenceContent").innerHTML="";
                            document.getElementById("reformTheSentenceButton").style.visibility="hidden";
                        }
                    }
                    button.addEventListener("click",function()
                    {
                        document.getElementById("formedSentence").style.visibility="visible";
                        document.getElementById("reformTheSentenceButton").style.visibility="visible";
                    });
                    dropdownSelect.addEventListener("change",function selectedLanguage(){} );
                    checkCorrectnessButton.addEventListener("click",function checkCorrectness(){});
                    getCorrectSentenceButton.addEventListener("click",function disp(){});
                });
                checkCorrectnessButton.addEventListener("click",function checkCorrectness(){});
            }   
        }
        else{
            document.getElementById("experimentShortInfoContent").innerHTML ="";
            document.getElementById("buttonShortInfoContent").innerHTML="";
            alert("Please select a language");
        }
}
function checkCorrectness()
{
    document.getElementById("wrongAnswer").style.visibility="visible";
    document.getElementById("correctAnswer").style.visibility="visible";
    var selectedSentence;
    selectedSentence = document.getElementById("formedSentenceContent").innerHTML;
    var finalAnswer = selectedSentence.trim();
    tempEnglish=0;
    tempHindi=0;
    if(value == "english")
    {
        if(englishSentence.includes(finalAnswer))
        {
            document.getElementById("correctAnswer").innerHTML="Right Answer!!!";
            document.getElementById("wrongAnswer").innerHTML="";
            document.getElementById("getCorrectSentenceButton").style.visibility="hidden";
        }
        else{
            document.getElementById("correctAnswer").innerHTML="";
            document.getElementById("wrongAnswer").innerHTML="Wrong Answer!!!";
            document.getElementById("getCorrectSentenceButton").style.visibility="visible";
            getCorrectSentenceButton.addEventListener("click",function display(){});
        }
        
    }
    else if(value == "hindi")
    {
        if(hindiSentence.includes(finalAnswer))
        {
            document.getElementById("correctAnswer").innerHTML="Right Answer!!!";
            document.getElementById("wrongAnswer").innerHTML="";
            document.getElementById("getCorrectSentenceButton").style.visibility="hidden";
        }
        else{
            document.getElementById("correctAnswer").innerHTML="";
            document.getElementById("wrongAnswer").innerHTML="Wrong Answer!!!";
            document.getElementById("getCorrectSentenceButton").style.visibility="visible";
            getCorrectSentenceButton.addEventListener("click",function display(){});
        }
    }
}
function display(){
    if(value==="english")
    {
    document.getElementById("showAnswers").innerHTML=englishSentence[0] +"<br>"+ englishSentence[1]+"<br>"+englishSentence[2];
    if(document.getElementById("getCorrectSentenceButton").value=="Get Correct Sentence")
    {
        document.getElementById("showAnswers").innerHTML=englishSentence[0] +"<br>"+ englishSentence[1]+"<br>"+englishSentence[2];
        myButton = document.getElementById("getCorrectSentenceButton");
        myButton.value = "Hide the Correct Sentence";
    }
    else if(document.getElementById("getCorrectSentenceButton").value=="Hide the Correct Sentence")
    {
        document.getElementById("showAnswers").innerHTML="";
        myButton = document.getElementById("getCorrectSentenceButton");
        myButton.value = "Get Answers";
    }
    else if(document.getElementById("getCorrectSentenceButton").value=="Get Answers")
    {
        document.getElementById("showAnswers").innerHTML=englishSentence[0] +"<br>"+ englishSentence[1]+"<br>"+englishSentence[2];
        myButton = document.getElementById("getCorrectSentenceButton");
        myButton.value = "Hide the Correct Sentence";
    }
    }
    if(value === "hindi")
    {
        document.getElementById("showAnswers").innerHTML=hindiSentence[0] +"<br>"+ hindiSentence[1]+"<br>"+hindiSentence[2];
    if(document.getElementById("getCorrectSentenceButton").value=="Get Correct Sentence")
    {
        document.getElementById("showAnswers").innerHTML=hindiSentence[0] +"<br>"+ hindiSentence[1]+"<br>"+hindiSentence[2];
        myButton = document.getElementById("getCorrectSentenceButton");
        myButton.value = "Hide the Correct Sentence";
    }
    else if(document.getElementById("getCorrectSentenceButton").value=="Hide the Correct Sentence")
    {
        document.getElementById("showAnswers").innerHTML="";
        myButton = document.getElementById("getCorrectSentenceButton");
        myButton.value = "Get Answers";
    }
    else if(document.getElementById("getCorrectSentenceButton").value=="Get Answers")
    {
        document.getElementById("showAnswers").innerHTML=hindiSentence[0] +"<br>"+ hindiSentence[1]+"<br>"+hindiSentence[2];
        myButton = document.getElementById("getCorrectSentenceButton");
        myButton.value = "Hide the Correct Sentence";
    }
    }
}