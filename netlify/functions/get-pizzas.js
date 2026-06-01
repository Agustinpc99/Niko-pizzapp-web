exports.handler = async function (event, context) {
  try {
    const response = await fetch("https://queresto.com/Pizzerianiko")
    
    if (!response.ok) {
      return { 
        statusCode: response.status, 
        body: `Error al obtener los datos de la pizzería: ${response.statusText}` 
      }
    }

    const html = await response.text()

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", 
        "Content-Type": "text/html; charset=utf-8",
      },
      body: html, 
    }
  } catch (error) {
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: error.message }) 
    }
  }
}