import {createDomElement} from './myFunctions.js'



let data={
    kArray:{
        tag:'t',
        name:"- ARRAY FUNCTIONS - <div class='topic'></div>"
    },
    kReduce:{
        tag:'b',
        id:'reduce',
        name:`.reduce()`,
        br:'<br>',
        form_f:'FORM:',
        form:`Array.reduce((previousValue, currentValue)=>{return -action-},initialValue);`,
        comment:`//The reduce() method executes a user-supplied “reducer” function on
                each element(currentValue) of the array, in order, passing in the 
                return value from the calculation as 'previousValue'. If not supplied, 
                'initialValue' is 0, otherwise 'initialValue' is used instead of previousValue
                during the first loop.`,
        returns:'RETURN: Single value dependant on reducer function.',
        br2:'<br>',
        example_f:'EXAMPLE:',
        example: `[1,2,3].reduce((previousValue, currentValue)=>{return previousValue+currentValue},0);`,
        br3:'<br>',
        vis:function (element){
            let child=createDomElement('vis','p',`//returns (((0+1)+2)+3)=6;`);
            element.appendChild(child)
            }
    },
    
    kMap:{
        tag:'b',
        id:'map',
        name:`.map()`,
        br:'<br>',
        form_f:'FORM:',
        form:`Array.map((x)=>{return actionupon(x)});`,
        comment:`//The map() method creates a new array populated with the results of calling a provided
                 function on every element in the calling array.`,
        returns:'RETURN: New array with modified values',
        br2:'<br>',
        example_f:'EXAMPLE:',
        example: `[1,2,3].map((x)=>{x*2});`,
        br3:'<br>',
        vis:function (element){
            let child=createDomElement('vis','p',`//returns [1*2,2*2,3*2];`);
            element.appendChild(child)
            }
    },

    kPopPush:{
        tag:'b',
        id:'push pop',
        name:`.push() &  .pop()`,
        br:'<br>',
        form_f:'FORM:',
        form:`Array.push(x) or Array.pop()`,
        comment:`//Push adds a new x element to the end of the array.Pop removes and returns 
                the last element of the array.Both methods changes the length of the original array.`,
        returns:'RETURN: pop() returns last element of an array',
        br2:'<br>',
        example_f:'EXAMPLE:',
        example: `[1,2,3].push(4);  and  pop([1,2,3]);`,
        br3:'<br>',
        vis:function (element){
            let child=createDomElement('vis','p',`//push() modifies the array to [1,2,3,4] 
                                        and pop() modifies array to [1,2] and returns 3;`);
            element.appendChild(child)
            }
    },
    
    kUnshiftshift:{
        tag:'b',
        id:'unshift shift',
        name:`.unshift() &  .shift()`,
        br:'<br>',
        form_f:'FORM:',
        form:`Array.unshift(x) or Array.shift()`,
        comment:`//Shift adds a new x element to the beginning of the array. Unshift removes and returns 
                the first element of the array. Both methods changes the length of the original array.`,
        returns:'RETURN: shift() returns last element of an array',
        br2:'<br>',
        example_f:'EXAMPLE:',
        example: `[1,2,3].unshift(4);  and  shift([1,2,3]);`,
        br3:'<br>',
        vis:function (element){
            let child=createDomElement('vis','p',`//unshift() modifies the array to [4,1,2,3] 
                                        and shift() modifies array to [2,3] and returns 1;`);
            element.appendChild(child)
            }
    },
    
    kSlice:{
        tag:'b',
        id:'slice',
        name:`.slice()`,
        br:'<br>',
        form_f:'FORM:',
        form:`Array.slice(start, end)`,
        comment:`//The slice() method returns a shallow copy of a portion of an array into a new array object 
                selected from start to end (end not included) where start and end represent the index of items in that 
                array. The original array will not be modified.`,
        returns:'RETURN: A shallow copy of the array, limited by the start/end parameters.',
        br2:'<br>',
        example_f:'EXAMPLE:',
        example: `[1,2,3,4,5,6,7,8,9,10].slice(1,-2);   OR   [1,2,3,4,5,6,7,8,9,10].slice(1,8);`,
        br3:'<br>',
        vis:function (element){
            let child=createDomElement('vis','p',`//both return a new copy array [2,3,4,5,6,7,8];`);
            element.appendChild(child)
            }
    },
    
    kIndexOflastIndexOf:{
        tag:'b',
        id:'indexOf lastindexof',
        name:`.indexOf() & .lastIndexOf()`,
        br:'<br>',
        form_f:'FORM:',
        form:`Array.indexOf(x) and Array.lastIndexOf(x)`,
        comment:`//The indexOf() method returns the first index at which a given element (x) can be found in the array, 
                lastIndexOf() returns the last one.Both return -1 if it is not present.`,
        returns:'RETURN: index of given element or -1 if nothing is found. ',
        br2:'<br>',
        example_f:'EXAMPLE:',
        example: `[1,2,3].indexOf(2); and [1,2,3,4,5,2].indexOf(2);`,
        br3:'<br>',
        vis:function (element){
            let child=createDomElement('vis','p',`//indexOf() returns 1 and lastIndexOf() returns 5`);
            element.appendChild(child)
            }
    },
    
    kString:{
        tag:'t',
        name:"- STRING FUNCTIONS - <div class='topic'></div>"
    },
    
    kTrim:{
        tag:'b',
        id:'trim',
        name:`.trim()`,
        br:'<br>',
        form_f:'FORM:',
        form:`String.trim()`,
        comment:`//Removes whitespaces, newlines, tabs, and similar
        characters from the start and end of a string. Does not modify the original string.`,
        returns:'RETURN: Copy of original string with no whitespaces on either side.',
        br2:'<br>',
        example_f:'EXAMPLE:',
        example: `' hello '.trim();`,
        br3:'<br>',
        vis:function (element){
            let child=createDomElement('vis','p',`//returns 'hello'`);
            element.appendChild(child)
            }
    }
    
    
    
};




export default data;