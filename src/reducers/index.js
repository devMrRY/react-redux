import {combineReducers} from 'redux';

const songlist = ()=>{
    return (
        [
            {title:'song 1', duration:'3:05'},
            {title:'song 2', duration:'5:05'},
            {title:'song 3', duration:'3:05'},
            {title:'song 4', duration:'2:05'},
        ]
    )
}

const selectedSong = (selected = null, action)=>{
    if(action.type === 'song_selected'){
        return action.payload
    }
    return selected
}

export default combineReducers({
    songlist,
    selectedSong
})