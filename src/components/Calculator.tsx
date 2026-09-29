import ButtonCalc from "./ButtonCalc";
import OclockIcon from "../../assets/ocklock.svg";
import CalculatorIcon from "../../assets/calculator.svg";

import { useFonts } from "expo-font";
import { View, Text } from "react-native";
import { data, dataTab } from "@/data/btn";
import { useEffect, useState } from "react";

export default function Calculator() {
    const [getValue, setValue] = useState<string[]>(["0"]);
    const [getEndValuet, setEndValuet] = useState("0");

    useEffect(() => {
        setEndValuet(getValue.join("").replaceAll("/", "÷").replaceAll("*", "×").replaceAll(".", ","))
    }, [getValue])

    const [fontsLoaded] = useFonts({
        "SF-Pro-Display-Light": require("../../assets/fonts/SFProDisplay-Light.woff"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View
            style={{
                height: "91.3%",
                flexDirection: "column",
                marginHorizontal: 15,
                marginVertical: 25,
                justifyContent: "space-between",
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                <ButtonCalc
                    color="#5E5E5E2B"
                    size={false}
                    icon={{ img: OclockIcon }}
                    end
                />

                <ButtonCalc
                    color="#5E5E5E2B"
                    size={false}
                    icon={{ img: CalculatorIcon }}
                    end
                    setValue={setValue}
                />
            </View>

            <View>
                <View
                    style={{
                        alignItems: "flex-end",
                    }}
                >
                    <Text
                        style={{
                            color: "#949496",
                            fontSize: 30,
                            fontFamily: "SF-Pro-Display-Light",
                        }}
                    >
                        1+2+3
                    </Text>

                    <Text
                        style={{
                            color: "#FBFBFB",
                            fontSize: 69,
                            fontFamily: "SF-Pro-Display-Light",
                        }}
                    >
                        {getEndValuet}
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    {data.map((row, index) => (
                        <View
                            key={index}
                            style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                            }}
                        >
                            {row.map((item, itemIndex) => {
                                const icon =
                                    typeof item === "function"
                                        ? { img: item }
                                        : { text: item };

                                const color =
                                    itemIndex === row.length - 1
                                        ? "#FF9201"
                                        : index === 0
                                            ? "#5E5E5E"
                                            : "#212121";

                                const end =
                                    itemIndex === row.length - 1 ||
                                    item === "%";

                                return (
                                    <View
                                        key={itemIndex}
                                        style={{
                                            width: "25%",
                                            marginTop: 8,
                                        }}
                                    >
                                        <ButtonCalc
                                            color={color}
                                            size={true}
                                            icon={icon}
                                            end={end}
                                            iventSymbol={dataTab[index][itemIndex]}
                                            getValue={getValue}
                                            setValue={setValue}
                                        />
                                    </View>
                                );
                            })}
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}