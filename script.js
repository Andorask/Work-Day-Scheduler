$(document).ready(function() {
    const timestamp = moment(localStorage.getItem("timestamp"));
    const saveDay = parseInt(timestamp.format("DD"));
    const currntDay = parseInt(moment().format("DD"));
    if (timestamp != null && saveDay === currntDay)
        $("textarea").each(function(index) {
            $(this).text(localStorage.getItem(index.toString()));
        });
    $("#currentDay").text(moment().format("dddd, MMMM do YYYY"));
})