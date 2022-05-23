<template>
  <div id="app">

    <div class="container">
      <div class="row justify-content-md-center">
        <!--Form-->
        <div class="wrap">
          <h1>ARC</h1>
          <form >
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email">
            </div>
            <div class="form-group">
              <label for="password">Senha</label>
              <input type="password">
            </div>
          </form>
          <p>Esqueceu a Senha? Clique <a href="#">aqui</a> </p>
          <p>Precisa acessar <a href="#">siga</a> </p>
        </div>
      </div>
      <button class="btn btn-primary">Sign in</button>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      text: 'Nice'

    }
  },
  method: {
    
  }
}
</script>

<style>

</style>
