$("#searchForm").submit(function (event) {
    event.preventDefault();
    var searchTerm = $("#searchInput").val();
    if (searchTerm.trim() !== "") {
        searchTasks(searchTerm);
    } else {
        // Handle empty search term case
        loadTasks();
    }
});

function searchTasks(searchTerm) {
    $.ajax({
        type: "GET",
        url: "php/search_task.php",
        data: { search: searchTerm },
        success: function (data) {
            $("#taskTable tbody").html(data);
        },
    });
}

function loadTasks() {
    $.ajax({
        type: "GET",
        url: "php/load_task.php",
        success: function (data) {
            $("#taskTable tbody").html(data);
        },
    });
}