import data from './modules/data.js'
import {createDivBlock} from './modules/myFunctions.js'






Object.keys(data).map((x)=>{createDivBlock(data[x])});
