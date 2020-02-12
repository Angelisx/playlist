let inputs = [
        {   song: "ggbro" ,
            artist:"ffgff" ,
            length:"fnifn" ,
            image:"ytdc",
            sUrl:"eknef"
        }
    ];

$("#add").click(function(){
    let song = $("#songName").val();
    let artist = $("#artistName").val();
    let length = $("#songLength").val();
    let image = $("#imgUrl").val();
    let sUrl = $("#songUrl").val();
    
    let somgd =  {song, artist , length , image, sUrl};

    inputs.push(somgd);
    
    inputs.forEach(function(songs) {
        $(".cart").append(songs.song);

        console.log(songs.song)
        console.log(songs.artist)

    });

    console.log(inputs);

//        $("#cart").append("<li>"+songs.song+"</li>");


});




