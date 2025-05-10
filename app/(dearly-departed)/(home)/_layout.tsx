import { Stack, Tabs } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

export default function SharedLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </GestureHandlerRootView>
  );
}

// import { Stack } from 'expo-router';
// import React from 'react';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';

// export default function TabLayout() {
//     return (
//         <GestureHandlerRootView style={{ flex: 1 }}>
//             <Stack
//                 screenOptions={{
//                     headerShown: false
//                 }}
//             >
//                 {/* Define your routes */}
//                 <Stack.Screen name="addDearlyDepartment" />
//                 <Stack.Screen name="addFamilyTree" />
//                 <Stack.Screen name="ancestorsMainScreen" />
//                 <Stack.Screen name="bffMainScreenLandscape" />
//                 <Stack.Screen name="bffMainScreen" />
//                 <Stack.Screen name="dearlyDepartmentForm" />
//                 <Stack.Screen name="displayData" />
//                 <Stack.Screen name="elegant" />
//                 <Stack.Screen name="familyTree" />
//                 <Stack.Screen name="indian" />
//                 <Stack.Screen name="mainScreen" />
//                 <Stack.Screen name="memoryBoards" />
//                 <Stack.Screen name="selectFoods" />
//                 <Stack.Screen name="selectOfrenda" />
//                 <Stack.Screen name="successfully" />
//                 <Stack.Screen name="uploadFile" />
//                 <Stack.Screen name="viewOfrendas" />

//             </Stack>
//             <StatusBar style="auto" />
//         </GestureHandlerRootView>
//     );
// }
