import React from 'react'
import {connect} from 'react-redux'

const SongDetail =({song})=>{
    if(!song){
        return <div>select a song</div>
    }
    return (<div><p>{song.title}</p>
        <p>{song.duration}</p>
    </div>)
}

const mapStateToProps=(state)=>{
    return {song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail)