$(function() {
    const $secondrow = $('#secondrow');
    const $shbutton = $('#showhide');
    const $angle = $('#angle');
    $secondrow.hide();
    $shbutton.click(function(){
        const text = $shbutton.text();
        if (text === 'Show more') {
            $shbutton.text('Hide');
        }
        else {
            $shbutton.text('Show more');
        }
        $angle.toggleClass('fa-angle-down');
        $angle.toggleClass('fa-angle-up');
        $secondrow.toggle(500);
    });

    $('#firstModal').on('hidden.bs.modal', function () {
        $('#firstmdlbtn').text('Thank You');
    });

    $('.fa-github').hover(function(){
        $(this).toggleClass('fa-4x');
    });
    $('.fa-linkedin-in').hover(function(){
        $(this).toggleClass('fa-4x');
    });
    $('.fa-facebook-square').hover(function(){
        $(this).toggleClass('fa-4x');
    });
});

