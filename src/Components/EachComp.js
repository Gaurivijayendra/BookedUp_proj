import React from 'react'
import './Eachcomp.css'
import EachModal from './EachModal'



const EachComp = ({likes,likedby, userid, bid, bname, genre, desc, lang, price, pdate, isrc,pubyear}) => {
    return (
    <EachModal likes={likes} likedby={likedby} uid={userid} bid={bid} bname={bname} genre={genre} desc ={desc} lang={lang} price={price} pdate={pdate} isrc={isrc} pubyear={pubyear}>
    <div className='comp'>
    <img  id='ig' src={require(`../Uploads/${isrc}`)}></img>    
    <span className='detail' id='name'>{bname}</span>
    <span className='detail' id='name'>{genre}</span>
    <span className='detail' id='name'>Rs. {price}</span>
    <span className='detail' id='name'>{pdate.slice(0,10)}</span>
    </div>
    </EachModal>

   
  )
}

export default EachComp