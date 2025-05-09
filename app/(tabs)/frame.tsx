import React, { useState } from 'react';
import { View, Image, StyleSheet, Alert, Text, Dimensions, TouchableOpacity, PanResponder, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

// Define the type for the slot objects
interface Slot {
  top: number;
  left: number;
  width: number;
  height: number;
}

const slots16: Slot[] = require('../../configs/frame16.json');
const MexicanFrame = require('../../assets/images/frames/frame17.png');

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const Frame = () => {
  const [images, setImages] = useState<Array<string | null>>(Array(slots16.length).fill(null));
  const [imagePositions, setImagePositions] = useState(slots16.map(() => ({ x: 0, y: 0 })));
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const pickImageAt = async (index: number) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      return Alert.alert('Permission required', 'We need access to your gallery');
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const updatedImages = [...images];
      updatedImages[index] = result.assets[0].uri;
      setImages(updatedImages);
    }
  };

  const panResponders = images.map((_, index) =>
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) =>
        gestureState.numberActiveTouches === 1 && images[index] !== null,
      onPanResponderGrant: () => {
        setCurrentImageIndex(index);
      },
      onPanResponderMove: (evt, gestureState) => {
        if (currentImageIndex === index) {
          const updatedPositions = [...imagePositions];
          updatedPositions[index] = {
            x: updatedPositions[index].x + gestureState.dx,
            y: updatedPositions[index].y + gestureState.dy,
          };
          setImagePositions(updatedPositions);
        }
      },
      onPanResponderRelease: () => {
        setCurrentImageIndex(null);
      },
      onPanResponderTerminate: () => {
        setCurrentImageIndex(null);
      },
    })
  );

  return (
    <View style={styles.container}>
      {/* Slot + inserted image layer */}
      <View style={styles.imageLayer}>
        {slots16.map((slot, index) => (
          <View
            key={index}
            style={[
              styles.slot,
              {
                top: slot.top,
                left: slot.left,
                width: slot.width,
                height: slot.height,
              },
            ]}
          >
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => pickImageAt(index)}
            >
              {images[index] ? (
                <View
                  {...panResponders[index].panHandlers}
                  style={[
                    styles.imageContainer,
                    {
                      transform: [
                        { translateX: imagePositions[index].x },
                        { translateY: imagePositions[index].y },
                      ],
                    },
                  ]}
                >
                  <Image
                    source={{ uri: images[index] }}
                    style={styles.image}
                    resizeMode="cover"
                  />
                </View>
              ) : (
                <View style={styles.placeholder}>
                  <Text style={styles.plus}></Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Frame Layer */}
      <View style={styles.frameLayer} pointerEvents="none">
        <Image source={MexicanFrame} style={styles.frame} resizeMode="contain" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4e8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLayer: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    zIndex: 1,
  },
  frameLayer: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    zIndex: 2,
  },
  frame: {
    width: '100%',
    height: '100%',
  },
  slot: {
    position: 'absolute',
    overflow: 'hidden',
    // borderRadius: 6,
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 3 / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    width: '100%',
    aspectRatio: 3 / 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    fontSize: 32,
    color: '#6b4b2a',
  },
});

export default Frame;
