
var friend = require("../data/friend");



module.exports = function(app) {

  app.get("/api/friend", function(req, res) {
    res.json(friend);
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
