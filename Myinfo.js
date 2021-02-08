
import './My_info.css';


function Myinfo(props){
return(
    <div>
<div className ="my_info">
<ol>
  <li> Name : {props.name} </li>  
  <li> Mobile : +91 {props.mobile} </li>
  <li> Age : {props.age}</li>  
</ol>

</div>

</div>
);
}
export default Myinfo;