import ScoreComp from "@/components/ScoreComp/ScoreComp.vue";

export default {
  name: "App",
  components: {
    ScoreComp,
  },

  data() {
    return {
      question: undefined,
      incorrectAnswers: undefined,
      correctAnswer: undefined,
      chosenAnwser: undefined,
      answerSubmitted: false,
      winCount: 0,
      loseCount: 0,
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
  methods: {
    submitAnswer() {
      if (!this.chosenAnwser) {
        alert("choose an answer");
      } else {
        this.answerSubmitted = true;
        if (this.chosenAnwser == this.correctAnswer) {
          this.winCount++;
        } else {
          this.loseCount++;
        }
      }
    },

    getNewQuestion() {
      this.answerSubmitted = false;
      this.chosenAnwser = undefined;
      this.question = undefined;

      this.axios
        .get("https://opentdb.com/api.php?amount=10&category=15")
        .then((res) => {
          this.question = res.data.results[0].question;
          this.incorrectAnswers = res.data.results[0].incorrect_answers;
          this.correctAnswer = res.data.results[0].correct_answer;
        });
    },
  },
  created() {
    this.getNewQuestion();
  },
};
