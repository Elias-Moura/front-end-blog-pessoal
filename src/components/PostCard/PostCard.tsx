
export default function PostCard(post : ListPostDTO) {
  return (
    <section key={post.id} className="flex flex-col items-center justify-center bg-zinc-400 p-4 rounded-md">
      <div className="w-1/2">
        <img src="https://ovicio.com.br/wp-content/uploads/2021/11/20211119-ovicio-one-piece-cosplay-luffy.jpg" alt="" />
      </div>
      <p>{post.data}</p>
      <p>{post.texto}</p>
      <p>{post.titulo}</p>
      <p>{post.usuario.nome}</p>
      <p>{post.usuario.email}</p>
    </section>
  )
}
