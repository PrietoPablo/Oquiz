const { Quiz } = require("../models");

const mainController = {
  homePage(_, res) {
    Quiz.findAll({ order: [["title", "ASC"]], include: "author" }).then(
      (quizzes) => {
        res.render("home", { quizzes });
      },
      (error) => {
        console.log(error);
      }
    );
  },
};

module.exports = mainController;
