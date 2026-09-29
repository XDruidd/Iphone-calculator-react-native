import PlusMinusIcon from "../../assets/plus-minus.svg";
import Backspace from "../../assets/backspace.svg";
import Multiply from "../../assets/multiply.svg";
import Equals from "../../assets/equals.svg";
import Minus from "../../assets/minus.svg";
import Plus from "../../assets/plus.svg";
import { FC } from "react";
import { SvgProps } from "react-native-svg";

type CalcButton = string | FC<SvgProps>;

const data: CalcButton[][] = [
    [Backspace, "AC", "%", "÷"],
    ["7", "8", "9", Multiply],
    ["4", "5", "6", Minus],
    ["1", "2", "3", Plus],
    [PlusMinusIcon, "0", ",", Equals],
];

const dataTab: string[][] = [
    ["<", "AC", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["+/-", "0", ",", "="],
];

export {data, dataTab}