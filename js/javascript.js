let cont = 0
//let c = console.count();
let c = 0
let listArticlesSection = $("section article");
console.log("hi")

$(document).ready(function(){
    var vis = ($("#formulari").css("opacity"));
    alert(localStorage.getItem("c"));
    if(localStorage.getItem("c") === null ){
        alert("undefined")
        localStorage.setItem("c", 1);
        alert(localStorage.getItem("c"));
    } 
    else {
        c = localStorage.getItem("c");
        c++;
        localStorage.setItem("c", c);
        $("#title").text("h1#title    Visit number "+ c);
    }
    
    

    console.log("else if")
    $(".target").on( "click", function() {
        console.log("click"+vis);
        $("#formulari").slideToggle(300);
        //$("section").append(content);
        /*if (vis > 0.8){
            $("#formulari").show(500);
            vis = ($("#formulari").fadeIn("opacity"));   // slideDown
            console.log(vis);
        }
        else{
            console.log("HIDE")            
                $("#formulari").slideUp(500);
                vis = ($("#formulari").css("opacity"));
                console.log(vis);

                
            
        }*/
    });

    $("#butonId1").on("click", function() {
        let text = $("#floatingTextarea2").val();
        let title = $("#titolId").val();
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        
        if(text == "" || title == ""){
            alert("INTRODUEIX ALGU ");
        }

        else{
            console.log($("#floatingSelect option:selected").text());
            if($("#floatingSelect option:selected").text() == "Primary"){

                $("section").prepend( `<article id=cont${cont}><h2>${title}</h2><div onClick=deleteWithTrashIcon(this.parentElement.id)  type="button" class="btn btn-secondary btn-lg">🗑</div><br/>${today}<br>${text}</article>`);
                cont++;
            }
            else if($("#floatingSelect option:selected").text() == "Secundary"){
                $("aside").prepend( `<article id=cont${cont}><h2>${title}</h2><div onClick=deleteWithTrashIcon(this.parentElement.id) type="button" class="btn btn-secondary btn-lg">🗑</div><br/>${today}<br>${text}</article>`);
                cont++;
            }
            else{
            }
        }
    });

    $("#butonId2").on("click", function(){
        if($("#floatingSelect option:selected").text() == "Primary"){
            let listItemsSection = $("#NewSect article");

            $(listItemsSection[0]).remove();
        }
        else if($("#floatingSelect option:selected").text() == "Secundary"){
            let listItemsAside = $("#newAside article");
            $(listItemsAside[0]).remove();
        }
        
    
    });


    $("#trashBin").click(function(){
        $(this).parent().remove()
    });


    
    /*var primary = $("#floatingSelect[value='1']").attr("selected",true);
    if(primary){
        alert("primary Selected");
    }*/
        
    
});

function deleteWithTrashIcon(id){
    document.getElementById(id).remove();
}
