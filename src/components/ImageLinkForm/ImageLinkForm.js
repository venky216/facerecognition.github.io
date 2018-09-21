import React from 'react'
import '../../App.css'
import './ImageLinkForm.css'
const ImageLikForm = ({onInputChange,clicked})=>{
    return(
        <div>
            <p className="f3">
                { `This Magic Brain will detect faces in the picture. Then why you are waiting give a try.

`}
            </p>
            
            <div className="center">
            <div className="form center pa4 br3 shadow-5">
                <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange}/>
                <button className=" w-30 grow f4 link ph3 pv2 dib white bgl" onClick={clicked}>Detect</button>
                </div>
            </div>
        </div>
    )
}
export default ImageLikForm;