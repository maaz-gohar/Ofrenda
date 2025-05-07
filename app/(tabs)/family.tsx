import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Svg, { Line } from 'react-native-svg';

const { width } = Dimensions.get('window');

// Example family data
const familyData = {
  name: 'Grandparents',
  image: require('../../assets/images/frames/frame1.png'),
  children: [
    {
      name: 'Parent 1',
      image: require('../../assets/images/frames/frame1.png'),
      children: [
        { name: 'Child 1', image: require('../../assets/images/frames/frame1.png'), children: [] },
        { name: 'Child 2', image: require('../../assets/images/frames/frame1.png'), children: [] },
      ]
    },
    {
      name: 'Parent 2',
      image: require('../../assets/images/frames/frame1.png'),
      children: [
        { name: 'Child 3', image: require('../../assets/images/frames/frame1.png'), children: [] },
        { name: 'Child 4', image: require('../../assets/images/frames/frame1.png'), children: [] },
        { name: 'Child 5', image: require('../../assets/images/frames/frame1.png'), children: [] },
      ]
    }
  ]
};

const FamilyNode = ({ member }) => {
  return (
    <View style={styles.node}>
      <Image source={member.image} style={styles.image} />
      <View style={styles.nameBox}>
        <Text style={styles.name}>{member.name}</Text>
      </View>
    </View>
  );
};

const FamilyTree = ({ member }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      {/* Current Person */}
      <FamilyNode member={member} />

      {/* Connect Line */}
      {member.children && member.children.length > 0 && (
        <>
          <Svg height="40" width={width}>
            <Line x1={width / 2} y1="0" x2={width / 2} y2="40" stroke="black" strokeWidth="2" />
          </Svg>

          {/* Children */}
          <View style={styles.childrenContainer}>
            {member.children.map((child, index) => (
              <View key={index} style={{ alignItems: 'center' }}>
                <FamilyTree member={child} />
              </View>
            ))}
          </View>
        </>
      )}
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        <FamilyTree member={familyData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  node: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  nameBox: {
    backgroundColor: '#ffd700',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  childrenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
});
