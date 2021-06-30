import './Card.css'

function Card(props){
    //value of this children prop is inbuilt and will always be the content between the opening and closing tag of it.
    const classes = 'card ' +props.className;
    return <div className={classes}>{props.children}</div>;
}
export default Card;