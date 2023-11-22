interface ListPostDTO {
  id: number 
  titulo: string //Como criar código limpo,
  texto: string //Um exemplo de texto,
  data: string //2023-11-20T13:10:07.894197,
  tema: ThemeListDTO
  // tema: {
  //   id: 1,
  //   titulo: Progarmar é vida,
  //   descricao: Ts é um superset de javascript.
  // },
  usuario: UserListDTO
  // usuario: {
  //   id: 1,
  //   nome: null,
  //   email: elias@java.com,
  //   imagem: null
  // }
}

 
