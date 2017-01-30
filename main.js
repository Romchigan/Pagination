jQuery(function ($) {
    $('.pagination button').css('margin-right', '20px')

    var table = $('#myTable').DataTable();

    $('#btn_1').on( 'click', function () {
        table.page.len( 1 ).draw();
    } );

    $('#btn_5').on( 'click', function () {
        table.page.len( 5 ).draw();
    } );
    
    $('#btn_10').on( 'click', function () {
        table.page.len( 10 ).draw();
    } );

    $('#btn_20').on( 'click', function () {
        table.page.len( 20 ).draw();
    } );

    $('#btn_30').on( 'click', function () {
        table.page.len( 30 ).draw();
    } );

    $('#btn_40').on( 'click', function () {
        table.page.len( 40 ).draw();
    } );

    $('#btn_50').on( 'click', function () {
        table.page.len( 50 ).draw();
    } );
});

