import React from 'react'
import './FaceRecognition.css'
const FaceRecognition = ({imageurl,box,faces})=>{
    return(
        <diV>
            <div >
                <p>No of faces detected: <span className="cont">{faces}</span></p>
                <img  id="inputimage"className="faceimg" src={imageurl} />
                <div className="bounding-box" style={{top: box.topRow, right:box.rightCol,bottom:box.bottomRow,left:box.leftCl}}></div>
                <p>Note:supports jpg,jpeg,png and make sure that you submited a link end with respected formats </p>
            <a href="https://wallpaperlayer.com/img/2015/5/harry-potter-wallpaper-hd-5737-5999-hd-wallpapers.jpg" target="_blank">example link: https://wallpaperlayer.com/img/2015/5/harry-potter-wallpaper-hd-5737-5999-hd-wallpapers.jpg</a>
            </div>
        </diV>
    )
}

export default FaceRecognition;