
        
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

                database.ref().push({
                    train: train_name,
                    destination: destination,
                    time: time,
                    frequency: frequency

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
            $("#destination-display").text(snapshot.val().destination);
            $("#time-display").text(snapshot.val().time);
            $("#frequency-display").text(snapshot.val().frequency);
            });



            function buildRow(snapshot) {


                var newRow = $("<tr>");

                var trainCol = $("<td>");
                trainCol.text(snapshot.val().train);
                newRow.append(trainCol);

                var roleCol = $("<td>");
                roleCol.text(snapshot.val().destination);
                newRow.append(roleCol);

                var sdCol = $("<td>");
                sdCol.text(snapshot.val().time);
                newRow.append(sdCol);


                var salCol = $("<td>");
                salCol.text(snapshot.val().frequency);
                newRow.append(salCol);

                newRow.appendTo("#empTable");
                console.log(snapshot.val().train);
            console.log(snapshot.val().destination);
            console.log(snapshot.val().time);
            console.log(snapshot.val().frequency);
            }
        });
 