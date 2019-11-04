import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions'

class Songlist extends Component{
    fun = ()=>{
        return this.props.songlist.map( item =>{
            return (
                <div className="item" key={item.title}>
                    <div className="right floated content">
                        <button className="ui button primary"
                                onClick={()=>{this.props.selectSong(item)}}>
                            select
                        </button>
                    </div>
                    <div className="content">
                        {item.title}
                    </div>
                </div>
            )
        })
    }

    render(){
        return(
            <div className="ui divided list">
                {this.fun()}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {songlist: state.songlist}
}

export default connect(mapStateToProps, {selectSong})(Songlist)