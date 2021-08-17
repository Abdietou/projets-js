export default {
  name: "App",
  data() {
    return {
      question: undefined,
      incorrectAnswers: undefined,
      correctAnswer: undefined,
    };
  },
  computed: {
    answer() {
      let answers = JSON.parse(JSON.stringify(this.incorrectAnswers));
      answers.splice(
        Math.round(Math.random() * answers.length),
        0,
        this.correctAnswer
      );

      return answers;
    },
  },
  created() {
    this.axios
      .get("https://opentdb.com/api.php?amount=10&category=15")
      .then((res) => {
        this.question = res.data.results[0].question;
        this.incorrectAnswers = res.data.results[0].incorrect_answers;
        this.correctAnswer = res.data.results[0].correct_answer;
      });
  },
};
