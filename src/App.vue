<template>
  <div>
    <ul>
      <li class="lista">
<RouterLink to="/">Home</RouterLink> - 
<RouterLink :to="{name: 'sobre'}">Sobre</RouterLink>
      </li>
    </ul>
    <h1>Testando vue router</h1>
    <RouterView></RouterView>
  </div>
</template>


<style>
* {
  background-color: #DEB887;
  text-align: center;
}

.lista {
 list-style: none; 
}
</style>
