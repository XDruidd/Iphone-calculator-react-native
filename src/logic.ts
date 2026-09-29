export default function logick(
    iventSymbol: string, 
    setValue: React.Dispatch<React.SetStateAction<string[]>>,
    getValue: string[]
){
    const lastIndex = getValue.length - 1;

    switch(iventSymbol){
        case("AC"):{
            setValue(["0"]);
            break;
        }
        case("<"):{
            if (getValue.length === 0 || (getValue.length === 1 && getValue[0] === "0")) {
                setValue(["0"]);
                break;
            }

            const lastItem = getValue[lastIndex];

            if (lastItem.startsWith("(-") && lastItem.endsWith(")")) {
                const cleanNumber = lastItem.slice(2, -1);

                if (cleanNumber.length <= 1) {
                    const cleanArray = getValue.slice(0, -1);
                    setValue(cleanArray.length === 0 ? ["0"] : cleanArray);
                } else {
                    const updatedCleanNumber = cleanNumber.slice(0, -1);
                    const newArray = [...getValue];
                    newArray[lastIndex] = `(-${updatedCleanNumber})`;
                    setValue(newArray);
                }
            } 
            else if (lastItem.length > 1) {
                const updatedLastItem = lastItem.slice(0, -1);
                const newArray = [...getValue];
                newArray[lastIndex] = updatedLastItem;
                setValue(newArray);
            } 
            else {
                const cleanArray = getValue.slice(0, -1);
                setValue(cleanArray.length === 0 ? ["0"] : cleanArray);
            }
            break;
        }
        case("/"):
        case("*"):
        case("-"):
        case("+"):
        case("%"):{
            const symbol = ["/", "*", "-", "+", "%"];
            const updateArr = [...getValue];
            if(symbol.includes(getValue[lastIndex])){
                updateArr[lastIndex] = iventSymbol
                setValue([...updateArr]);
            }
            else {
                setValue([...getValue, iventSymbol]);
            }
            break
        }
        case("+/-"):{
            const lastItem = getValue[lastIndex];

            const cleanNumberString = lastItem ? lastItem.replace(/[()]/g, "") : "";

            if (lastItem && cleanNumberString !== "" && isFinite(Number(cleanNumberString))) {
              const updateArr = [...getValue];

                if (lastItem.startsWith("(-") && lastItem.endsWith(")")) {
                    updateArr[lastIndex] = lastItem.slice(2, -1);
                } 
                else {
                    updateArr[lastIndex] = `(-${lastItem})`;
                }

                setValue(updateArr);  
            }
            break
        }
        case(","):{
            const lastItem = getValue[lastIndex];
            
            if(!lastItem.includes(".")){
                const updateArr = [...getValue];

                if(lastItem.endsWith(")")){
                    updateArr[lastIndex] = lastItem.slice(0, -1) + "." + ")"
                }
                else{
                    updateArr[lastIndex] = lastItem + "."
                }
                setValue(updateArr);
            }
            break
        }
        case("="):{
            
        }
        default:{
            const arrSymbol = ["/", "*", "-", "+", "%",]
            const lastItem = getValue[lastIndex];
            const updateArr = [...getValue];

            if(lastItem.endsWith(")")){
                updateArr[lastIndex] = lastItem.slice(0, lastItem == "(-0)" ? -2 : -1) + iventSymbol + ")"
                setValue(updateArr);
            }
            else if(lastItem == "0"){
                updateArr[lastIndex] = iventSymbol;
                setValue(updateArr);
            }
            else if(!arrSymbol.includes(lastItem)){
                updateArr[lastIndex] = lastItem + iventSymbol
                setValue(updateArr)
            }
            else{
                setValue([...getValue, iventSymbol]);            
            }
        }
    }
}