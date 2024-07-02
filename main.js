$(document).ready(function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos",
        type: "GET",
        cache: false,
        success: function (data) {
            var tableBody = $('#table');
            $.each(data, function (_, value) {
                var row = $('<tr></tr>');
                row.append('<td>' + value.userId + '</td>');
                row.append('<td>' + value.id + '</td>');
                row.append('<td>' + value.title + '</td>');
                row.append('<td>' + value.completed + '</td>');
                tableBody.append(row);
            });
        },
        error: function (xhr, status, error) {
            console.log("An error occurred: " + error);
        }
    });
});