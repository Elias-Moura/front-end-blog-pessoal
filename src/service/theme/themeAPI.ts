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

export async function fetchThemesByName(active=true, name:string) {
  try {
    const response = await Api.get(`/temas/titulo/${name}`)
    return response.data
  } catch (error) {
    console.log(error, active)
    return null
  }
}

export async function fetchThemesById(active=true, id:string) {
  try {
    const response = await Api.get(`/temas/${id}`)
    return response.data
  } catch (error) {
    console.log(error, active)
    return null
  }
}

export async function createTheme(theme: {titulo: string, descricao: string}) {
  try {
    const response = await Api.post("/temas", theme)
    // verificar status code
    console.log(response.status, response.statusText)
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

export async function deleteTheme(id: number) {
  try {
    const response = await Api.delete("/temas/"+ id)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}