<template>
<h1>Veille Techno</h1>
<Form @add="saveTechno"/>
<br />

<TechnoList :technos="technos" @delete-techno="deleteTechno" @edit-techno="editTechno"/>
</template>

<script src="./app.js"></script>
set
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
