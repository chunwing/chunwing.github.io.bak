jQuery(document).ready(function($){
    var $timeline_block = $('.cd-timeline-block');
    var $chart = $('.chart');
    var $job = $('.job');
    var $work = $('.work');
    //hide timeline blocks which are outside the viewport
    $timeline_block.each(function(){
        //console.log($(this).offset().top);
        //console.log($(window).scrollTop()+$(window).height()*0.75);
        if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
    });
    if ($(window).width() <= 768){  
        $chart.each(function(index, element){
            $(this).removeClass('is-hidden').easyPieChart({
                animate: 2000,
                scaleColor: false,
                lineWidth: 5,
                lineCap: 'square',
                size: 100,
                trackColor: '#333',
                barColor: '#999'
            });
        });
        $work.each(function(index, element){
            $(this).removeClass('is-hidden');
        });
    }   
    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll',function(){
        $chart.each(function(index, element){
            if( $(this).parents('#skill').offset().top <= $(window).scrollTop()+$(window).height()*0.75 ) {
                $(this).removeClass('is-hidden').easyPieChart({
                    animate: 2000,
                    scaleColor: false,
                    lineWidth: 5,
                    lineCap: 'square',
                    size: 100,
                    trackColor: '#333',
                    barColor: '#999'
                }).find('canvas').addClass('rotateIn animated').css('-webkit-animation-delay', index/5 + 's');
                $(this).find('span').addClass('fadeIn').css('-webkit-animation-delay', index/5 + 's');
            }
        });
        $job.each(function(index, element){
            if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 ) {
                $(this).removeClass('is-hidden').addClass('fadeInUp');
            }
        });
        $work.each(function(index, element){
            if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 ) {
                $(this).removeClass('is-hidden').addClass('fadeInUp').css('-webkit-animation-delay', index/5 + 's');
            }
        });

        $timeline_block.each(function(){
            if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
        });
    });
});
