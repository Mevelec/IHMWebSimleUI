
var error=false;

function ajoutParking() {
    error=false;
    var nom=$('#nom-form');
    var nbplace=$('#nbplace-form');
    var lat=$('#lat-gps-form');
    var long=$('#lng-gps-form');
    var mail=$('#email-form');
    var vehicule=$('#typevehi-form');
    var controlTool=$('#syscompage-form');

    //TODO verifier aussi le type des variables + verifier les selects
    validerInput(nom,nom.val().length!==0);
    validerInput(nbplace,nbplace.val().length!==0);
    validerInput(lat,lat.val().length!==0);
    validerInput(long,long.val().length!==0);
    validerInput(mail,mail.val().length!==0);


    var status=$('#status');
    if(error){
        //status.html("Ajouter un joli message d'erreur");
        $('#alertOutputs').prepend("<div class='alert alert-danger fade-5 show' id='alert' role='alert'><strong>Oups ! </strong> Veuillez verifier les informations spécifiées.</div>");
        setTimeout(function(){
           $('#alert').alert('close');
        }, 5000);
    }else{
        status.html('');
        var table =$('#collapseParking').find( "tbody");
        var res ="<tr><th scope='row'>"+nom.val()+"</th><td>"+ vehicule.val()+"</td><td><a href='https://www.google.com/maps/?q="+lat.val()+","+long.val()+"' target='_blank'>"+lat.val()+","+long.val()+"</a></td><td>"+nbplace.val()+"</td><td><a href='mailto:"+mail.val()+"'>"+mail.val()+"</a></td><td>"+controlTool.val()+"</td><td><button type='button' class='close'  onclick='RemoveParking(this)' value='lol'><span aria-hidden='true'>&times;</span></button></td></tr>";
        table.append(res);
        $('#alertOutputs').prepend("<div class='alert alert-success fade-5 show' id='alert' role='alert'><strong>Inséré : </strong> Issertion réussie.</div>");
        setTimeout(function(){
           $('#alert').alert('close');
        }, 5000);

    }
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

function RemoveParking(obj)
{
    $(obj).parent().parent().remove();
    $('#alertOutputs').prepend("<div class='alert alert-warning fade-5 show' id='alert' role='alert'><strong>Supprimée ! </strong> Ligne supprimée.</div>");
    setTimeout(function(){
       $('#alert').alert('close');
    }, 5000);
}

function find()
{
    var nom=$('#nom-find');
    var nbplace=$('#nbplace-find');
    var lat=$('#lat-gps-find');
    var long=$('#lng-gps-find');
    var mail=$('#email-find');
    var vehicule=$('#typevehi-find');
    var controlTool=$('#syscompage-find');

    // alert(nom.val()+"  "+nbplace.val()+"  "+lat.val()+"  "+long.val()+"  "+mail.val()+"  "+vehicule.val()+"  "+controlTool.val());
    $("#parking-list").children();
    $('#parking-list').children().each(function() {
        var i = 0;
        var toDisplay=true;
        $(this).children().each(function() {
            switch(i) {
                case 0: /*check nom*/
                    if($(this).text().toLowerCase().indexOf(nom.val().toLowerCase()) === -1)
                    {
                        toDisplay=false;
                    }
                    break;
                case 1: /*check vehicule*/
                    if($(this).text() !== vehicule.val() && vehicule.val() != 'Tous')
                    {
                        toDisplay=false;
                    }
                    break;
               /* case 2: /*check lat, long
                    if($(this).child().text().indexOf(lat.val().toFixed(4)) === -1 && lat.val())
                    {
                        toDisplay=false;
                    }
                    if($(this).child().text().indexOf(long.val().toFixed(4)) === -1 && long.val())
                    {
                        toDisplay=false;
                    }
                    break;*/
                case 2: /*check nbplace*/
                    if($(this).text() !== nbplace.val() && nbplace.val())
                    {
                        toDisplay=false;
                    }
                    break;
                case 3: /*check mail*/
                    if($(this).text().toLowerCase().indexOf(mail.val().toLowerCase()) === -1)
                    {
                        toDisplay=false;
                    }
                    break;
                case 4: /*check controlTool*/
                    if($(this).text() !== controlTool.val() && controlTool.val() != 'Tous')
                    {
                        toDisplay=false;
                    }
                    break;
            }
            i++;
        });
        if(toDisplay)
        {
             $(this).show();
        }
        else
        {
             $(this).hide();
        }
    });

}