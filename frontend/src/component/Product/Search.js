import React,{useState} from "react";
import { useNavigate  } from "react-router-dom";
import MetaData from "../layout/MetaData";
import "./Search.css";
const Search = ( ) => {
  const navigate = useNavigate();
    const [Keyword, setKeyword] = useState("")
    const searchSubmitHandler =(e)=>{

        e.preventDefault();
         
        if(Keyword.trim()){

          navigate(`/products/${Keyword}`)
           
            
            
        }
        else{
          navigate("/products")
          
        }
    }
  return (
    <>
    <MetaData title="Search A Product -- ECOMMERCE"/>
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search"/>
      </form>
    </>
  );
};

export default Search;
