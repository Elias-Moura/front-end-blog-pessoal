import Api from "../api"

export async function fetchThemes(actives=true, size=4, page=0, sortMethod='id') {
  try {
    const response = await Api.get(`/temas?page=${page}&size=${size}&sort=${sortMethod}`)
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