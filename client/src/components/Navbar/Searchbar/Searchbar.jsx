import React,{useState} from 'react'
import Searchlist from './Searchlist';
import { BsMicFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Searchbar = () => {
    const [searchquery,setsearchquery] = useState("");
    const [Searchlist,setsearchlist] = useState(false);
    const Titlearray=  ["video1","video2","animated video","Movies"].filter(q=>q.toUpperCase().includes(searchquery?.toUpperCase()))
  return (
    <>
    <div className='searchBar_Container'>
        <div className="searchBar_Container2">
            <div className="search_div">
                <input type="text" className='iBox_SearchBar' placeholder="Search" onChange={e=>setsearchquery(e.target.value)} value={Searchquery} onClick={e=>setsearchlist(true)}/>
                <Link to={`/search/${Searchquery}`}>
                <FaSearch className='searchIcon_SearchBar'/>
                </Link>
                <BsMicFill callName='Mic_SearchBar'/>
                {Searchquery && seachlist && <Searchlist setsearchquery={setsearchquery} Titlearray={Titlearray}/>}
            </div>
        </div>
      
    </div>
    </>
  )
}

export default Searchbar
