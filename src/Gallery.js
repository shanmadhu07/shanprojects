import React from "react";
import './Gallery.css';

class Gallery extends React.Component{
    arrobj = [{
        imgurl:"https://i.pinimg.com/236x/b1/ff/72/b1ff724eab291491a95c75fef0a09ed9.jpg",
        type:"all,thrill"
    },{
        imgurl:"https://i.pinimg.com/236x/eb/44/3a/eb443a59863b3247c68d8aac50234692.jpg",
        type:"all,thrill"
    },{
        imgurl:"https://i.pinimg.com/236x/0d/0b/80/0d0b80c4e75540be825a8ce331645814.jpg",
        type:"all,thrill"
    },{
        imgurl:"https://i.pinimg.com/236x/41/93/c1/4193c18971ae30f53240fc4b91b2f8c7.jpg",
        type:"all,hor"
    },{
        imgurl:"https://i.pinimg.com/236x/26/01/c9/2601c9686cddb11bd97810637e6a4c01.jpg",
        type:"all,hor"
    },{
        imgurl:"https://i.pinimg.com/236x/e6/3e/21/e63e21ebdba9a10143215b990c0d06ce.jpg",
        type:"all,hor"
    },{
        imgurl:"https://i.pinimg.com/236x/00/c2/f7/00c2f790a2ebc591ea3939c8763e8d8f.jpg",
        type:"all,com"
    },{
        imgurl:"https://i.pinimg.com/236x/79/93/39/7993395aacc54e4c9ffda329233ab2a2.jpg",
        type:"all,com"
        
    },{
        imgurl:"https://i.pinimg.com/236x/8e/5e/52/8e5e52f7bdaf2bb9e2fd2e2ce9ed6be2.jpg",
        type:"all,com"
    }];

    constructor(props){
        super(props);
    }
    render(){
        let imgstring = this.arrobj.map((val)=>{
            if(val.type.includes(this.props.send)){
            return(
               <img src={val.imgurl} alt="img" className="img"/>
            );
            }
        });
        return(
            <div>
            <div className=" imgdiv">
                {imgstring}
            
            </div>
            </div>
        )
    }
}

export default Gallery; 