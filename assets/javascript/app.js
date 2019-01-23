$(document).ready(function () {
  console.log("Ready!");

var config = {
  apiKey: "AIzaSyCBZ_kvjI_l8AfZarqXolmbV18ytNAqBtw",
  authDomain: "train-time-f2b29.firebaseapp.com",
  databaseURL: "https://train-time-f2b29.firebaseio.com",
  projectId: "train-time-f2b29",
  storageBucket: "train-time-f2b29.appspot.com",
  messagingSenderId: "626132061378"
};

firebase.initializeApp(config);

var database = firebase.database();

$("#submit").on("click", function(event) {
  event.preventDefault();

  var trainName = $("#train-name").val().trim();
  var destination = $("#train-destination").val().trim();
  var firstTrain = $("#first-train").val().trim();
  var frequency = $("#frequency").val().trim();

  var trainToAdd = {
    name: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  };

  database.ref().push(trainToAdd);

  // console.log(trainToAdd.name);
  // console.log(trainToAdd.destination);
  // console.log(trainToAdd.firstTrain);
  // console.log(trainToAdd.frequency);

  // Alert
  alert("Your train has been successfully added!");

  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");
});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  var train = childSnapshot.val().name;
  var destination = childSnapshot.val().destination;
  var frequency = childSnapshot.val().frequency;
  var firstTrain = childSnapshot.val().firstTrain;


  $("#train-table > tbody").append(
    $("<tr>").append(
      $("<td>").text(train),
      $("<td>").text(destination),
      $("<td>").text(frequency)
    )
  );
});
})