$(document).ready(function() {
    $('.tab-btn').on('click', function() {
        var tabId = $(this).data('tab');
        $('.tab-btn').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').removeClass('active');
        $('.tab-content').hide();
        $('#' + tabId).addClass('active');
        $('#' + tabId).show();
    });
    $('.tab-content.active').show();
});