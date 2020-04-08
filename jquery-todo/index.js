$(document).ready(function($) {
    $('form').submit(function() {
        if ($('.input').val() !== '') {
            var newTodo = $('.input').val();
            var newList = $('<li>' + newTodo + '</li>');
            newList.on('click', function() {
                // Attach event handler b4 adding element
                $(this).remove(); 
            });
            // Put new task at top of list
            $('ul').prepend(newList); 
            $('.input').val('');
            // So Change STAYS
            return false; 
        }
    });
});
