
var error=false;

function ajoutParking() {
    error=false;
    var nom=$('#nom-form');
    var nbplace=$('#nbplace-form');
    var lat=$('#lat-gps-form');
    var long=$('#lng-gps-form');
    var mail=$('#email-form');
    var vehicule=$('#validerItemSelected');
    var detectTool=$('#typevehi-from');

    //TODO verifier aussi le type des variables + verifier les selects
    validerInput(nom,nom.val().length!==0);
    validerInput(nbplace,nbplace.val().length!==0);
    validerInput(lat,lat.val().length!==0);
    validerInput(long,long.val().length!==0);
    validerInput(mail,mail.val().length!==0);
    validerItemSelected(vehicule);


    var status=$('#status');
    if(error){
        alert();
        //status.html("Ajouter un joli message d'erreur");
    }else{
       // status.html('');
    }

    //console.log(status);
}

function validerInput(obj, valide) {
    if(!valide){
        error=true;
        obj.removeClass('is-valid');
        obj.addClass('is-invalid');
    }else{
        obj.removeClass('is-invalid');
        obj.addClass('is-valid');
    }
}

function validerItemSelected(obj) {
    if ($('#typevehi-from').selectedIndex == -1) {
        alert("Please select an item.");
        error=true;
        obj.removeClass('is-valid');
        obj.addClass('is-invalid');
    }else{
        alert( $('#typevehi-from').selectedIndex);
        obj.removeClass('is-invalid');
        obj.addClass('is-valid');
    }
}
