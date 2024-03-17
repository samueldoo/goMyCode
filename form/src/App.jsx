import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState("");
const [name, setName] = useState("");
const [text, setText] = useState("")
  useEffect(() => {});

  // const handle = (e) => {
  //   e.preventDefault()

  //   fetch("https://jsonplaceholder.typicode.com/users", {
  //     method: "POST", //setting the method
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     }, //setting the header
  //     body: JSON.stringify(user), //setting the body
  //   })
  //     .then((res) => console.log(res))
  //     .catch((err) => err);
  // };

  const handle = (e) => {
    e.preventDefault()
    axios
      .post("https://jsonplaceholder.typicode.com/users", user )
      .then((res) => {
        console.log(res.data.name)
        let name= res.data.name
        setName(name)
      }
        )
      .catch((err) => console.log(err));
  };


  const handleGet =async () => {
    const options = {
      method: 'GET',
      url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
      params: {
        url: 'https://time.com/6266679/musk-ai-open-letter/',
        length: '3'
      },
      headers: {
        'X-RapidAPI-Key': '6a8ef69c3fmshfc56e51d080514ep174835jsn0bb3aad13246',
        'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
 
  
  
  
  const handleChange = (e) => {
    setUser({name: e.target.value});
    console.log({name: e.target.value});
  };

  return (
    <>
    <button onClick={handleGet}>get texts</button>
      <form
        onSubmit={handle}
        className="flex flex-col items-start gap-5 justify-center  w-fit p-10"
      >
        <label htmlFor="" className="flex gap-3 flex-col text-xl">
          person name:
          <input
            onChange={handleChange}
            type="text"
            name="name"
            className="border-2 border-black rounded-lg"
          />
        </label>
        <button type="submit" className="bg-blue-400 py-1 px-3 rounded-full">
          SUBMIT
        </button>
      </form>
      <p>{name}</p>
      <p>{text}</p>
    </>
  );
}

export default App;
