function toggleMode() {
  const html = document.documentElement
  /*  existe uma função no java script toogle que já faz o mesmo que o codigo abaixo de remover ou adicionar.*/
  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Fabio Sodre, usando camisa preta, e fundo branco",
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Fabio Sodre, usando óculos , camisa preta e fundo branco",
    )
  }
}
