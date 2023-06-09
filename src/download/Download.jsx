import React from 'react'
import './download.css'
const PDF_URL="https://himanshu007-portfolio.netlify.app/RESUME_HIMANSHU.pdf"
const Download = () => {
    const downloadFileAtUrl=(url)=>{
fetch(url).then((response)=>response.blob()).then((blob)=>{
    window.URL.createObjectURL(new Blob([blob]))
    const fileName=url.split("/").pop();
    const aTag=document.createElement("a");
    aTag.href=url;
    aTag.setAttribute("download",fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
})
    }
  return (
    <button className='Download-btn'  onClick={()=>{downloadFileAtUrl(PDF_URL)}}>
        DOWNLOAD RESUME
    </button>
  )
}

export default Download
