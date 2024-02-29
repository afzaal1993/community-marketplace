import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  return (
    <View>
      <Image
        source={require("./../../assets/images/login.jpg")}
        className="w-full h-[400px] object-cover"
      />
      <View className="p-8 bg-white mt-[-20px] rounded-t-3xl">
        <Text className="text-[25px] font-bold">Community Marketplace</Text>
        <Text className="text-[18px] text-slate-500 mt-6">
          Buy and Sell marketplace where you can sell old items and make real
          money
        </Text>
        <TouchableOpacity
          onPress={() => alert("Login")}
          className="p-4 bg-blue-500 rounded-full mt-20"
        >
          <Text className="text-white text-center text-[18px]">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
