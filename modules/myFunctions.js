//Creates DOM element based on className, type and possible content
export function createDomElement(className,type,content=null){
    let element=document.createElement(type);
    if(typeof className === 'object'){
        let name=className.reduce((prev,current)=>{return prev+current;},'');
        element.className=name;
    }
    else{element.className=className}
    if(content){
        element.innerHTML=content;
    }
    return element;
}

//Creates div block containing data, either about topic or the topic header
export function createDivBlock(obj){
    let div;
    //if object is a full data block
    if(obj.tag=='b'){
        //create a white div BLOCK in html
        div = createDomElement(['block ',obj.id],'div')
        //array of all obj keys
        let arr=Object.keys(obj).slice(2,-1);
        //for each key create a DOM element with className=key, innerHtml= keyValue
        arr.map((x)=>{
            div.appendChild(createDomElement(x,'p',obj[x]))
        }); 
        obj.vis(div);
    }
    //if object is just a topic
    else{
        div = document.createElement('h2');
        div.innerHTML=obj.name;
    }
   document.querySelector('body').appendChild(document.createElement('br')); 
   document.querySelector('body').appendChild(div);
}

let a;
export default a='not a function';