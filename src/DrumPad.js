import React, { Component } from 'react'
import styled from 'styled-components'


export default class DrumPad extends Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
        window.focus()
    }


    handleKeyDown = (e) => {
        if (e.keyCode === this.props.letter.charCodeAt()) {
            this.audio.play();
            this.props.handleDisplay(this.props.id)
        }
    }

    handleClick = () => {
        this.audio.play();
        this.props.handleDisplay(this.props.id)

    }

    render() {

        const { id, src, letter } = this.props
        return (
            <ButtonWrapper>
                <button className="drum-pad retro-button" id={id} onClick={this.handleClick} onKeyPress={this.handleKeyDown}>
                    <p> {letter}</p>
                    <audio className="clip" src={src} id={letter} ref={ref => this.audio = ref}></audio>
                </button>
            </ButtonWrapper>
        )
    }
}

const ButtonWrapper = styled.div`
    display: inline-block;

.retro-button{
    position:relative;
    appearance:none;
    box-sizing:border-box;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
    background: #899095;
    height:3rem;
    min-width:3rem;
    border-radius:calc(3rem / 2);
    border:0;
    font-weight:800;
    text-transform:uppercase;
    color: rgba(0,0,0,.25);
    text-shadow: 1px 1px rgba(255,255,255,.15);
    cursor: pointer;
    margin:6px 6px;
    letter-spacing:.1em;
    transition: all 200ms ease;
    box-shadow:
        -1px  -1px 1px #899095, 
        0 0 0 4px rgba(0,0,0,.1), 
        1px  1px 1px #7D878F, 
        inset .0 .0 .0 rgba(0,0,0,.2), 
        inset .5rem .5rem .25rem #969DA3 ;
    
        &:hover{
        outline:none;
        border:none;
        box-shadow:
            inset 1px 1px 1px #899095,   
            0 0 0 4px rgba(0,0,0,.2), 
            inset -1px -1px 1px #969DA3,    
            inset .5rem .5rem .75rem #7D878F, 
            inset .5rem .5rem .5rem #969DA3, 
        }
}


`