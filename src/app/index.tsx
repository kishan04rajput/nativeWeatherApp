import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-100">
      <Text className="text-lg font-bold text-slate-800">
        Tailwind CSS is now setup!
      </Text>
      <Text className="text-sm text-slate-600 mt-2">
        Edit src/app/index.tsx to start building.
      </Text>
    </View>
  );
}

