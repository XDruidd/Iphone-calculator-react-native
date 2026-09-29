import { FC, useEffect } from "react";
import { SvgProps } from "react-native-svg";
import { useFonts } from "expo-font";
import { View, Text, Pressable } from "react-native";
import logick from "@/logic";

interface ButtonProps {
    color: string;
    size: boolean;
    icon: {
        img?: FC<SvgProps>;
        text?: string;
    };
    end: boolean;
    iventSymbol?: string; 
    setValue?: React.Dispatch<React.SetStateAction<string[]>>;
    getValue?: string[]
}

export default function ButtonCalc(data: ButtonProps) {
    const Icon = data.icon.img;
    const [fontsLoaded] = useFonts({
        "SF-Pro-Display-Light": require("../../assets/fonts/SFProDisplay-Light.woff"),
        "SF-Pro-Rounded-Regular": require("../../assets/fonts/SF-Pro-Rounded-Regular.otf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    function handlerClick() {
        if (data.iventSymbol && data.getValue && data.setValue) {            
            logick(data.iventSymbol, data.setValue, data.getValue)
        }
    }

    return (
        <Pressable
            style={{
                borderWidth: 0.5,
                borderColor: "#8A8A8A",
                backgroundColor: data.color,

                width: data.size ? 87 : 43,
                height: data.size ? 87 : 43,

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                borderRadius: 50,
                cursor: "pointer",
                userSelect: "none"
            }}
            onPress={()=> {handlerClick()}}
        >
            {Icon && (
                <Icon width={"100%"}/>
            )}

            {data.icon.text && (
                <Text
                    style={{
                        color: "#F8F8F8",
                        fontSize: data.end ? 45 : 38,
                        lineHeight: 45,
                        fontFamily: data.end
                            ? "SF-Pro-Rounded-Regular"
                            : "SF-Pro-Display-Light",
                    }}
                >
                    {data.icon.text}
                </Text>
            )}
        </Pressable>
    );
}

function setValue(p0: never[]) {
    throw new Error("Function not implemented.");
}
