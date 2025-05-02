import { useEffect } from "react";
import { useState } from "react"
import Card from "./components/Card";
import Shimmer from "./components/Shimmer";

function App() {

  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);

  async function fetchData(){
    setLoading(true);
    try{
      const response = await fetch("https://meme-api.com/gimme/20");
      const data = await response.json();
      console.log(data.memes);
      setLoading(false);
      setData(prev => [...prev,...data.memes])
    }
    catch(err){
      setLoading(false);
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();

    const handleScroll = () => {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight-1) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[])


  return (
    <div className="w-full min-h-screen p-8 bg-gray-200 flex flex-wrap items-center justify-center gap-8">
      {
        data?.map((val,idx) => {
          return(
            <Card val={val} key={idx} />
          )
        })
      }
      {loading && <Shimmer/>}
    </div>
  )
}

export default App
