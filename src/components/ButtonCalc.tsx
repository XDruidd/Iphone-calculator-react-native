import { FC } from "react";
import { SvgProps } from "react-native-svg";
import { useFonts } from "expo-font";
import { View, Text } from "react-native";

interface ButtonProps {
    color: string;
    size: boolean;
    icon: {
        img?: FC<SvgProps>;
        text?: string;
    };
    end: boolean;
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

    return (
        <View
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
            }}
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
        </View>
    );
}