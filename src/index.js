import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const myStyle = {
  backgroundColor:"#FF0000",
  color:"#FFFFFF",
  padding:"10px",
  textAlign:'center'
}

const headerStyle = {
  backgroundColor:"#FF00FF",
  color:"#FFFFFF",
  padding:"10px"
}

function BodyComponent(){
    return(
      <div>
        <h2 className="MyHeader">This is my Body Component</h2>
      </div>
    )
}

function HeaderComponent(){
  return(
    <div>
      <div>
        <h1 style={headerStyle}>I am the Header Component</h1>
      </div>
    </div>
  )
}

function FooterComponent(){
  return(
    <div>
    <h1 style={myStyle}>I am the Footer Component</h1>
    </div>
  )
}

function MyComponent()
{
  return(
      <div>
        <div>
          <HeaderComponent/>
          <h1 style={{
            backgroundColor:"#FF0000",color:"#FFFFFF",
            padding:"10px",textAlign:'center'
          }}>Welcome Developers</h1>
          <h2>Great Learning</h2>
          <BodyComponent/>
          <FooterComponent/>
        </div>
      </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('myRoot'));
root.render(<MyComponent/>);