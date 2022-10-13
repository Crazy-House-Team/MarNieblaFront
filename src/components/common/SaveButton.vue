<template>
    <div>
        <button type="submit" class="button-savequestion">
          <h3>Grabar</h3>
        </button>
    </div>
  </template>
  <script></script>
  <style scoped>
    .button-savequestion:hover {
      background-color: white;
      color: green;
    }
    .button-savequestion {
      background-color: #92c954;
      border-radius: 20px;
      width: 200px;
      height: 65px;
      border: none;
      color: white;
    }
    h3{
      font-size: 3rem;
      font-weight:bold;
    }
  @media(max-width:700px){
    .button-savequestion{
      width: 150px;
    }
    h3{
      font-size: 3rem;
      font-weight:bold;
    }
  }
  </style>