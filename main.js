$(document).ready(function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos",
        type: "GET",
        cache: false,
        success: function (data) {
            $.each(data, function(key, value) {
                var row = $('<tr></tr>');
                var tableBody = $('#table');
                row.append('<td>' + value.userID + '</td>');
                row.append('<td>' + value.id + '</td>');
                row.append('<td>' + value.title + '</td>');
                row.append('<td>' + value.completed + '</td>');
                tableBody.append(row);
            });
        }
    }); 
});