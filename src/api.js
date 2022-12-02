import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:8000`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Bvc3RzL2NyZWF0ZWp3dCIsImlhdCI6MTY2OTk5NDU4NCwiZXhwIjoxNjY5OTk4MTg0LCJuYmYiOjE2Njk5OTQ1ODQsImp0aSI6Ik1kakp2VGJZeW1pZWNqUHAiLCJzdWIiOiIzIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.xG9HAJsfa7MJ8_kWgCwaLxdY26UJDf08mvjy91ICXco'
   }
})

export const getListData = async () =>{
    const listData = await api.get("/api/posts/dataposts")
    return listData.data.data
    // console.log({dataList: listData})
}