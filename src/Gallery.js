import React from "react";
import axios from "axios";

export default function Gallery(param) {
  //const [img, setImg] = useState([]);
  function handleResponse(response) {
    console.log(response);
  }
  if (Object.keys(param.word).length !== 0) {
    let key = "563492ad6f91700001000001f84a1e01968f44b59b29eee146db0a50";
    let url = `https://api.pexels.com/v1/search?query=$${param.word}&orientation=square&size=small&per_page=3&page=1&api_keys=${key}`;
    let headers = { Authorization: `Bearer${key}` };

    axios.get(url, { headers: headers }).then(handleResponse);

    return <div className="Gallery">gallery</div>;
  } else {
    return <h3>Find your definition.</h3>;
  }
}
