
var friend = require("../data/friend");

module.exports = function(app) {

  app.get("/api/friend", function(req, res) {
      //console.log("test")
    res.json(friend);
  });


  app.post("/api/friend", function(req, res) {
      console.log(req.body)
      //res.send("Hello World")
    var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 10000,
        }
     
     var userData = req.body
     var userScores = userData.userScores
     var totalDifference;
     
      for (let i = 0; i < friend.length; i++) {
          var currentFriend = friend[i];
          totalDifference = 0;
          for (let j = 0; j < currentFriend.scores; j++){
              totalDifference += Math.abs(parsInt(userScores[j]) - parsInt(currentFriend.scores[j]))
          }
          if (totalDifference <= bestMatch.friendDifference){
              bestMatch.name = currentFriend.name;
              bestMatch.photo = currentFriend.photo;
              bestMatch.friendDifference = currentFriend.friendDifference;
          }
      }
      res.json(bestMatch);
  });



//   app.get("/api/friend", function(req, res) {
//     res.json(waitListData);
//   });

//   app.post("/api/friend", function(req, res) {
//     if (tableData.length < 5) {
//       tableData.push(req.body);
//       res.json(true);
//     }
//     else {
//       waitListData.push(req.body);
//       res.json(false);
//     }
//   });

//   app.post("/api/clear", function(req, res) {
//     tableData.length = [];
//     waitListData.length = [];

//     res.json({ ok: true });
//   });
};
