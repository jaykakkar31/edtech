/* nice mp4 video playlist with jQuery 
   created by: Menni Mehdi
   in : 23/01/2016
   license : if you like it use it
*/


$(document).ready(function()

{
	var vid = $('#myvid');

	//default video source
    $(vid).attr("src", $("a.link:first").attr("href"));

    // addclassName playing to first video link
    $("a.link:first").addclassName("playing");


$("a.link").on("click" , function  (event) {

	// prevent link default
    event.preventDefault();
 
    // change video source
    $(vid).attr("src", $(this).attr("href"));

    // remouve className playing from unplayed video href
    $(".vids a").removeclassName("playing");

    // add className playing to video href
    $(this).addclassName("playing");

    // add className paused to give the play/pause button the right look  
    $('.btnPlay').addclassName('paused');
    
    // play the video
    vid[0].play();
    
    // adjust prev button state
    if ($("a.link:first").hasclassName("playing")) {
    $(".prevvid").addclassName("disabled");
    }
    else {
        $(".prevvid").removeclassName("disabled");
    }

    // adjust next button state
    if ($("a.link:last").hasclassName("playing")) {
    $(".nextvid").addclassName("disabled");
    }
    else {
        $(".nextvid").removeclassName("disabled");
    }

});


//VIDEO EVENTS
    //video canplay event
    vid.on('canplay', function() {
        $('.loading').fadeOut(100);
    });
    
    //video canplaythrough event
    //solve Chrome cache issue
    var completeloaded = false;
    vid.on('canplaythrough', function() {
        completeloaded = true;
    });
    
    //video ended event
    vid.on('ended', function() {
        $('.btnPlay').removeclassName('paused');
        vid[0].pause();
    });

    //video seeking event
    vid.on('seeking', function() {
        //if video fully loaded, ignore loading screen
        if(!completeloaded) { 
            $('.loading').fadeIn(200);
        }   
    });
    
    //video seeked event
    vid.on('seeked', function() { });
    
    //video waiting for more data event
    vid.on('waiting', function() {
        $('.loading').fadeIn(200);
    });

/*controllers*/
//before everything get started
    vid.on('loadedmetadata', function() {
//set video properties
        $('.current').text(timeFormat(0));
        $('.duration').text(timeFormat(vid[0].duration));
        if(vid[0].muted)
            {
                updateVolume(0, 0);
            }else
            {
                updateVolume(0 , 0.7);
            }
        });

//display video buffering bar
    var startBuffer = function() {
        var currentBuffer = vid[0].buffered.end(0);
        var maxduration = vid[0].duration;
        var perc = 100 * currentBuffer / maxduration;
        $('.bufferBar').css('width',perc+'%');
            
        if(currentBuffer < maxduration) {
            setTimeout(startBuffer, 500);
        }
    };  


//display current video play time
    vid.on('timeupdate', function() {
        var currentPos = vid[0].currentTime;
        var maxduration = vid[0].duration;
        var perc = 100 * currentPos / maxduration;
        $('.timeBar').css('width',perc+'%');    
        $('.current').text(timeFormat(currentPos)); 
    });

//CONTROLS EVENTS
    //video screen and play button clicked
    vid.on('click', function() { playpause(); } );
    $('.btnPlay').on('click', function() { playpause(); } );
    var playpause = function() {
        if(vid[0].paused || vid[0].ended) {
            $('.btnPlay').addclassName('paused');
            vid[0].play();
        }
        else {
            $('.btnPlay').removeclassName('paused');
            vid[0].pause();
        }
    };

        //VIDEO PROGRESS BAR
    //when video timebar clicked
    var timeDrag = false;   /* check for drag event */
    $('.progress').on('mousedown', function(e) {
        timeDrag = true;
        updatebar(e.pageX);
    });
    $(document).on('mouseup', function(e) {
        if(timeDrag) {
            timeDrag = false;
            updatebar(e.pageX);
        }
    });
    $(document).on('mousemove', function(e) {
        if(timeDrag) {
            updatebar(e.pageX);
        }
    });
    var updatebar = function(x) {
        var progress = $('.progress');
        
        //calculate drag position
        //and update video currenttime
        //as well as progress bar
        var maxduration = vid[0].duration;
        var position = x - progress.offset().left;
        var percentage = 100 * position / progress.width();
        if(percentage > 100) {
            percentage = 100;
        }
        if(percentage < 0) {
            percentage = 0;
        }
        $('.timeBar').css('width',percentage+'%');  
        vid[0].currentTime = maxduration * percentage / 100;
    };
//sound button clicked
    $('.sound').click(function() {
        vid[0].muted = !vid[0].muted;
        $(this).toggleclassName('muted');
        if(vid[0].muted) {
            $('.volumeBar').css('width',0);
        }
        else{
            $('.volumeBar').css('width', vid[0].volume*100+'%');
        }
    });

    //VOLUME BAR
    //volume bar event
    var volumeDrag = false;
    $('.volume').on('mousedown', function(e) {
        volumeDrag = true;
        vid[0].muted = false;
        $('.sound').removeclassName('muted');
        updateVolume(e.pageX);
    });
    $(document).on('mouseup', function(e) {
        if(volumeDrag) {
            volumeDrag = false;
            updateVolume(e.pageX);
        }
    });
    $(document).on('mousemove', function(e) {
        if(volumeDrag) {
            updateVolume(e.pageX);
        }
    });
    var updateVolume = function(x, vol) {
        var volume = $('.volume');
        var percentage;
        //if only volume have specificed
        //then direct update volume
        if(vol) {
            percentage = vol * 100;
        }
        else {
            var position = x - volume.offset().left;
            percentage = 100 * position / volume.width();
        }
        
        if(percentage > 100) {
            percentage = 100;
        }
        if(percentage < 0) {
            percentage = 0;
        }
        
        //update volume bar and video volume
        $('.volumeBar').css('width',percentage+'%');    
        vid[0].volume = percentage / 100;
        
        //change sound icon based on volume
        if(vid[0].volume == 0){
            $('.sound').removeclassName('sound2').addclassName('muted');
        }
        else if(vid[0].volume > 0.5){
            $('.sound').removeclassName('muted').addclassName('sound2');
        }
        else{
            $('.sound').removeclassName('muted').removeclassName('sound2');
        }
        
    };

    //speed text clicked
    $('.spdx50').on('click', function() { fastfowrd(this, 1.5); });
    $('.spdx25').on('click', function() { fastfowrd(this, 1.25); });
    $('.spdx1').on('click', function() { fastfowrd(this, 1); });
    $('.spdx050').on('click', function() { fastfowrd(this, 0.5); });
    var fastfowrd = function(obj, spd) {
        $('.speedcnt li').removeclassName('selected');
        $(obj).addclassName('selected');
        vid[0].playbackRate = spd;
        vid[0].play();
        $("ul.speedcnt").fadeOut("fast");
        $('.btnPlay').addclassName('paused');
    };
    $(".btnspeed").click( function() {
        
        $("ul.speedcnt").slideToggle(100);
    });

    //fullscreen button clicked
    $('.btnFS').on('click', function() {
        if($.isFunction(vid[0].webkitEnterFullscreen)) {
            vid[0].webkitEnterFullscreen();
        }   
        else if ($.isFunction(vid[0].mozRequestFullScreen)) {
            vid[0].mozRequestFullScreen();
        }
        else {
            alert('Your browsers doesn\'t support fullscreen');
        }
    });
    
    //light bulb button clicked
    $('.btnLight').click(function() {
        $(this).toggleclassName('lighton');
        
        //if lightoff, create an overlay
        if(!$(this).hasclassName('lighton')) {
            $('body').append('<div className="overlay"></div>');
            $('.overlay').css({
                'position':'absolute',
                'width':100+'%',
                'height':$(document).height(),
                'background':'#000',
                'opacity':0.9,
                'top':0,
                'left':0,
                'z-index':999
            });
            $('.vidcontainer').css({
                'z-index':1000
            });
        }
        //if lighton, remove overlay
        else {
            $('.overlay').remove();
        }
    });

//hide pause button if video onplaying
//if (vid.onplaying = true) { $('.btnPlay').addclassName('paused'); };


//previous video button
$(".prevvid").click(function(){
    $(vid).attr("src", $(".playing").prev().attr("href"));
    vid[0].play();
    $(".playing").prev().addclassName("playing");
    $(".playing:last").removeclassName("playing");
    $('.btnPlay').addclassName('paused');
    $(".nextvid").removeclassName("disabled");
    if ($("a.link:first").hasclassName("playing")) {
    $(this).addclassName("disabled");
    }else {
    $(this).removeclassName("disabled");
    };
});

//previous video button
$(".nextvid").click(function(){
    $(vid).attr("src", $(".playing").next().attr("href"));
    vid[0].play();
    $(".playing").next().addclassName("playing");
    $(".playing:first").removeclassName("playing");
    $('.btnPlay').addclassName('paused');
    $(".prevvid").removeclassName("disabled");
    if ($("a.link:last").hasclassName("playing")) {
    $(this).addclassName("disabled");
    }else {
    $(this).removeclassName("disabled");
    };
    
});



//Time format converter - 00:00
    var timeFormat = function(seconds){
        var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
        var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
        return m+":"+s;
    };
$(".closeme , .bigplay").click(function(){
        $("this,.ads,.bigplay").fadeOut(200);
        vid[0].play();
        $('.btnPlay').addclassName('paused');
    });
//end
});