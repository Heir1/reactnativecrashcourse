/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
// import { StyleSheet, Text, View, TextInput, Button } from 'react-native/types';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

function App(): JSX.Element {

  // const [courseGoals, setCourseGoals] = useState<string[]>([]);
  const [courseGoals, setCourseGoals] = useState<
    Array<{
      key: string,
      value: string
    }>
  >([]);

  const [isAddMode, setIsAddMode] = useState(false)

  const addGoal = (enteredGoal:string) => {
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value : enteredGoal}]);
    setIsAddMode(false);
  }

  const deleteGoalHandler = (id:string) => {
    setCourseGoals(courseGoals.filter(courseGoal => courseGoal.key !== id ))
  } 

  const cancelAddGoal = () => {
    setIsAddMode(false)
  }

  return (

    <View style={styles.screen} >
      <Button title='ADD A NEW GOAL' onPress={() => setIsAddMode(true)} />
      <GoalInput cancelAddGoal={cancelAddGoal} visible={isAddMode} addGoal={addGoal} />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={courseGoals}
        renderItem={ itemData => (
          <GoalItem title={itemData.item.value} id={itemData.item.key} deleteGoal={deleteGoalHandler} />
        )}
      />
      {/* <ScrollView> title={itemData.item.value}
        { title={itemData.item.value}
          courseGoals.map((goal, index) => <View style={styles.listItem} ><Text key={index}> {goal} </Text></View>  )
        }
      </ScrollView> */}
    </View>

  );
}

const styles = StyleSheet.create({
  screen : {
    padding:50, 
    paddingLeft:30, 
    paddingRight:30 
  }
});

export default App;

// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             This is my first experience in react native <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });