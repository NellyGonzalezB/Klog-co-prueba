
import Gallery from '../components/Gallery'
import React, { useState } from "react"

const Index = () => {
  const [photo, setPhoto] = useState("");
  const [data, setData] = useState([]);

  const apiRequest = async (query) => {

    console.log("entro aqui");
    const res = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${query}`,
      {
        headers: {
          Authorization:
            " Client-ID JtegpQeue6ZGzBufChZB0KCNt_ydzBOgxSUfkqopuVE",
        },
      }
    );
    const apiData = await res.json();
    console.log(apiRequest);
    setData(apiData);
    
  };

  const resultPhoto = async (e) => {
    e.preventDefault();
    apiRequest(photo);
  };

  return (


    <div>
      <form onSubmit={resultPhoto}>
        <div className="input-group flex-nowrap p-3">
          <span className="input-group-text" id="addon-wrapping">🔍</span>
          <input type="text" className="form-control" placeholder="Search images" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => setPhoto(e.target.value)}></input>
        </div>
        <div className="d-grid gap-2 col-2 mx-auto">
          <button type="submit" className="btn btn-primary btn-lg">Search</button>
        </div>
      </form>
      <div>
        <Gallery data={data} />
      </div>
    </div>


  )
}



export default Index;