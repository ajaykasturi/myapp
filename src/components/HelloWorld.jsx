export function HelloWorld(props){ //we can use props to accept arguments as parameter and the use it as
    return (                        //{props.text}
        <h3>{props.text}</h3>
    );
}

//here the name of the default exported component should have same name as file-name
//export default HelloWorld;

//we can also use export followed by component name or function name

export function ByWorld({text}){ //we can use {text} directly is one way of accepting parameter
    return (
        <h4>{text}</h4>
    );
}
