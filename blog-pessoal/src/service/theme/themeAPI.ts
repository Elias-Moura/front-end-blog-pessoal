import Api from "../api"

export async function fetchThemes(active=true, size=4, page=0, sortMethod='id') {
  try {
    const response = await Api.get(`/temas?page=${page}&size=${size}&sort=${sortMethod}&isActive=${active}`)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function createTheme(theme: {titulo: string, descricao: string}) {
  try {
    const response = await Api.post("/temas", theme)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function updateTheme(theme: {id: number, titulo: string, descricao: string}) {
  try {
    const response = await Api.put("/temas", theme)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}