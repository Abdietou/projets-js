<template>
  <div>
    <template v-if="this.question">
      <h1 v-html="this.question"></h1>

      <template v-for="(answers, index) in this.answer" :key="index">
        <input
          :disabled="this.answerSubmitted"
          type="radio"
          name="options"
          :value="answers"
          v-model="this.chosenAnwser"
        />
        <label v-html="answers"></label><br />
      </template>

      <button
        v-if="!this.answerSubmitted"
        @click="this.submitAnswer()"
        class="send"
        type="button"
      >
        Send
      </button>
      <section v-if="this.answerSubmitted" class="result">
        <h4
          v-if="this.chosenAnwser == this.correctAnswer"
          v-html="
            '&#9989; Congratulations, the answer ' +
              this.correctAnswer +
              ' is correct.'
          "
        ></h4>
        <h4
          v-else
          v-html="
            '&#10060; I`m sorry, you picked the wrong answer, The correct is ' +
              this.correctAnswer +
              '.'
          "
        ></h4>
        <button @click="this.getNewQuestion()" class="send" type="button">
          Next question
        </button>
      </section>
    </template>
  </div>
</template>

<script src="./appCore.js"></script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 960px;

  input[type="radio"] {
    margin: 12px 4px;
  }

  button.send {
    margin-top: 12px;
    height: 40px;
    min-width: 120px;
    padding: 0 16px;
    color: #fffb;
    background-color: #1867c0;
    border: 1px solid #1867c0;
    cursor: pointer;
  }
}
</style>
