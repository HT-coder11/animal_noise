
function start(){
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Gt6-oI7JP/model.json",modelReady)
}

function modelReady(){

    classifier.classify(gotResults)

}

function gotResults(error, results){

    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML = "I  Can detect animals-"+ results[0].label;
        document.getElementById("result_accuracy").innerHTML = "ACCURACY -"+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")"
        document.getElementById("result_accuracy").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img1=document.getElementById("mark");
        img2=document.getElementById("Bark");
        img3=document.getElementById("Meow");
        img4=document.getElementById("Monkey");

        if(results[0].label == "Background Noise"){
            img1.src = "mark.jpg";
        }
        else if(results[0].label == "Bark"){
            img2.src = "dog.jpg";
        }

        else if(results[0].label == "Meow"){
            img3.src = "ct.jpg";
        }
        else{
            img4.src = "monkey.jpg";
            
        }
    }

}