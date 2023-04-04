dayjs.extend(window.dayjs_plugin_advancedFormat);
dayjs.extend(window.dayjs_plugin_customParseFormat);

$(function () {
  var savedSched = {};
  var blockStyle;

  // Apply the past, present, or future blockStyle to each timeblock by comparing the id to the current hour.
  for (var blockHour = 9; blockHour <= 17; blockHour++) {
    // Compare current hour to timeblock hours.
    if (blockHour < dayjs().hour()) {
      blockStyle = "past";
    } else if (blockHour > dayjs().hour()) {
      blockStyle = "future";
    } else {
      blockStyle = "present";
    }

    // Fill in the id, class, and hour text. Add timeblock for 9AM - 5PM.
    $("#container").append(
      `<div id="hour-${blockHour}" class="row time-block ${blockStyle}">
        <div class="col-2 col-md-1 hour text-center py-3">${dayjs(blockHour.toString(),"H").format("hA")}</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>`
    );
  }

  // Display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("dddd, MMMM Do"));

  // Get saved input from local storage and populate timeblocks.
  if (localStorage.getItem("savedSched")) {
    savedSched = JSON.parse(localStorage.getItem("savedSched"));
  }

  for (key in savedSched) {
    $(`#${key}`).children(".description").val(savedSched[key]);
  }

  // On click, save user input in local storage. savedSched: {timeBlock: description}.
  $(".saveBtn").on("click", function () {
    var timeBlock = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val().trim();
    savedSched[timeBlock] = description;
    localStorage.setItem("savedSched", JSON.stringify(savedSched));
  });
});
