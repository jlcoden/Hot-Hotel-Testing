$(document).ready(function() {
  getReservation();

  function getReservation() {
    $.get("/api/reservation", function(data) {
      console.log("reservation", data);


      var reservationDiv = $("<div>");
      var reservationCardImage = $("<div class ='card-image'>");
      var reservationCardContent = $("<div class ='card-content'>");

      var image = $("<img>");
      image.attr({
        src: imgURL
      });

      image.css({
        width: "100%",
        height: "auto"
      });

      roomCardContentContent.text(data[i].roomType);

      var imgURL = data[i].imgUrl;

      // Appending the image

      reservationDiv.append(reservationCardImage);
      reservationCardImage.append(image);
      reservationDiv.append(reservationCardContent);

      $("#selected-room").append(reservationCard);
    });
  }
});
