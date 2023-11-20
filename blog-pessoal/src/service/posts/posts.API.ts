import Api from "../api"

export async function fetchPosts(active=true, size=4, page=0, sortMethod='id') {
  try {
    const response = await Api.get(`/postagens?page=${page}&size=${size}&sort=${sortMethod}&isActive=${active}`)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function fetchPostByTitle(active=true, title:string) {
  try {
    const response = await Api.get(`/postagens/titulo/${title}`)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function fetchPostById(active=true, id:number) {
  try {
    const response = await Api.get(`/postagens/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function createPost(post: CreatePostDTO) {
  try {
    const response = await Api.post("/postagens", post)
    // verificar status code
    console.log(response.status, response.statusText)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function updatePost(post: {id: number, titulo: string, descricao: string}) {
  try {
    const response = await Api.put("/postagens", post)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function deletePost(id: number) {
  try {
    const response = await Api.delete("/postagens/"+ id)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}