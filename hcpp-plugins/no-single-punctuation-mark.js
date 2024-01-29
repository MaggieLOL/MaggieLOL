const punctuation_marks=Array.from(".,?!…，。？！")
function pmcheck(args){
    if(args[0].cmd!="chat"){return args};
    if((args[0].text.length == 1) || punctuation_marks.indexOf(args[0].text) != -1){
        pushMessage({nick:"!",text:"Single punctuation mark cannot be sent."})
        return false;
    }else{
        return args
    }
}
hook.register("in","send",pmcheck)
