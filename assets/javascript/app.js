
        
        $(document).ready(function () {


            // Initialize Firebase
            var config = {
                apiKey: "AIzaSyB7TnaFyldS6N4MJmtVMlaCB6FXPCLwQWY",
                authDomain: "traindata-9f42d.firebaseapp.com",
                databaseURL: "https://traindata-9f42d.firebaseio.com",
                projectId: "traindata-9f42d",
                storageBucket: "traindata-9f42d.appspot.com",
                messagingSenderId: "749115387692"
            };
            firebase.initializeApp(config);

            var database = firebase.database();

            $("#addBtn").on('click', function (event) {
                event.preventDefault();
                let train_name = $("#train_name-input").val().trim();
                let destination = $("#destination-input").val().trim()
                let time = $("#time-input").val().trim()
                let frequency = $("#frequency-input").val().trim()
                console.log(train_name);
                console.log(frequency);

                database.ref().push({
                    train: train_name,
                    destination1: destination,
                    time1: time,
                    frequency1: frequency

                });

            })

            /*     database.ref().on('child_added', function (snapshot) {
                    buildRow(snapshot);
                    console.log(snapshot.val());
                    console.log(snapshot.val().train);
                    console.log(snapshot.val().destination);
                    console.log(snapshot.val().time);
                    console.log(snapshot.val().frequency);


                    $("#train_name-display").text(snapshot.val().train);
                    $("#destination-display").text(snapshot.val().destination);
                    $("#time-display").text(snapshot.val().time);
                    $("#frequency-display").text(snapshot.val().frequency);
                }); */

            database.ref().orderByChild("dateAdded").limitToLast(1).on('child_added',function(snapshot){    
            buildRow(snapshot);
            $("#train_name-display").text(snapshot.val().train);
            $("#destination-display").text(snapshot.val().destination1);
            $("#time-display").text(snapshot.val().time1);
            $("#frequency-display").text(snapshot.val().frequency1);
            });



            function buildRow(snapshot) {


                var newRow = $("<tr>");

                var trainCol = $("<td>");
                trainCol.text(snapshot.val().train);
                newRow.append(trainCol);

                var roleCol = $("<td>");
                roleCol.text(snapshot.val().destination1);
                newRow.append(roleCol);

                var sdCol = $("<td>");
                sdCol.text(snapshot.val().time1);
                newRow.append(sdCol);


                var salCol = $("<td>");
                salCol.text(snapshot.val().frequency1);
                newRow.append(salCol);

                newRow.appendTo("#empTable");
                console.log(snapshot.val().train);
            console.log(snapshot.val().destination1);
            console.log(snapshot.val().time1);
            console.log(snapshot.val().frequency1);
            }
        });
 