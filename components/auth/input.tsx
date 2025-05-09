import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Animated,
  TouchableOpacity,
  TextInputProps,
  TextStyle,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  MaterialIcons,
} from '@expo/vector-icons';
import {
  Controller,
  Control,
  RegisterOptions,
  FieldValues,
  Path,
} from 'react-hook-form';

type IconType = 'Ionicons' | 'FontAwesome' | 'MaterialIcons' | 'AntDesign';

interface FloatingLabelInputProps<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  showLabel?: boolean;
  placeholder?: string;
  iconName?: string;
  iconType?: IconType;
  iconPosition?: 'left' | 'right';
  eyeIcon?: boolean;
  arrow?: boolean;
  secureTextEntry?: boolean;
  onIconPress?: () => void;
  onEyeIconPress?: (visible: boolean) => void;
  rules?: RegisterOptions<T, Path<T>>;
}

function FloatingLabelInput<T extends FieldValues>({
  control,
  name,
  label,
  showLabel = true,
  placeholder,
  iconName = 'add',
  iconType = 'Ionicons',
  iconPosition,
  eyeIcon = false,
  arrow = false,
  secureTextEntry = false,
  onIconPress,
  onEyeIconPress,
  rules,
  ...rest
}: FloatingLabelInputProps<T>) {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const animatedLabel = useRef(new Animated.Value(0)).current;
  const inputRef = useRef<TextInput>(null);
  const screenWidth = Dimensions.get('window').width;

  const renderIcon = () => {
    const iconProps = {
      name: iconName as any,
      size: 20,
      color: '#858383',
      style: [styles.icon, { color: iconPosition === 'left' ? '#FFC70B' : '#c2c2c2' }],
    };

    switch (iconType) {
      case 'Ionicons':
        return <Ionicons {...iconProps} />;
      case 'FontAwesome':
        return <FontAwesome {...iconProps} />;
      case 'MaterialIcons':
        return <MaterialIcons {...iconProps} />;
      case 'AntDesign':
        return <AntDesign {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
        useEffect(() => {
          Animated.timing(animatedLabel, {
            toValue: isFocused || !!value ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
          }).start();
        }, [isFocused, value]);

        const labelStyle: Animated.WithAnimatedObject<TextStyle> = {
          position: 'absolute',
          left: 40,
          top: animatedLabel.interpolate({
            inputRange: [0, 1],
            outputRange: [15, 0],
          }),
          fontSize: animatedLabel.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 12],
          }),
          color: '#888',
        };

        return (
          <>
            <TouchableWithoutFeedback
              onPress={() => {
                if (inputRef.current?.isFocused()) {
                  Keyboard.dismiss();
                  inputRef.current?.blur();
                } else {
                  setIsFocused(true);
                  inputRef.current?.focus();
                }
              }}
            >
              <View style={[styles.container, error && { borderColor: 'red' }]}>
                {iconPosition === 'left' && (
                  <TouchableOpacity onPress={onIconPress}>
                    {renderIcon()}
                  </TouchableOpacity>
                )}

                {showLabel && (
                  <Animated.Text style={labelStyle}>
                    {label ?? placeholder}
                  </Animated.Text>
                )}

                <TextInput
                  numberOfLines={1}
                  multiline={false}
                  ref={inputRef}
                  value={value}
                  onChangeText={onChange}
                  onBlur={() => {
                    onBlur();
                    setIsFocused(false);
                  }}
                  onFocus={() => setIsFocused(true)}
                  secureTextEntry={eyeIcon && !isPasswordVisible}
                  style={[
                    styles.input,
                    {
                      width: screenWidth - 80,
                      textAlign: 'left',
                      textAlignVertical: 'center',
                      height: 40,
                    },
                  ]}
                  placeholder={showLabel ? placeholder : placeholder}
                  placeholderTextColor={showLabel ? 'transparent' : '#858383'}
                  {...rest}
                />

                {iconPosition === 'right' && (
                  <TouchableOpacity onPress={onIconPress}>
                    {renderIcon()}
                  </TouchableOpacity>
                )}

                {eyeIcon && (
                  <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => {
                      const newState = !isPasswordVisible;
                      setIsPasswordVisible(newState);
                      onEyeIconPress?.(newState);
                    }}
                  >
                    <Ionicons
                      name={isPasswordVisible ? 'eye' : 'eye-off'}
                      size={24}
                      color="#888"
                    />
                  </TouchableOpacity>
                )}

                {arrow && (
                  <TouchableOpacity>
                    <AntDesign
                      name="right"
                      size={15}
                      color="#000"
                      style={styles.arrow}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </TouchableWithoutFeedback>

            {error && (
              <View style={styles.errorContainer}>
                <Ionicons
                  name="information-circle-outline"
                  size={20}
                  color="#FFC70B"
                />
                <Text style={styles.errorText}>{error.message}</Text>
              </View>
            )}
          </>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#c2c2c2',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 4,
    justifyContent: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    color: '#c2c2c2',
  },
  input: {
    includeFontPadding: false,
    paddingLeft: 5,
    color: '#000',
    textAlignVertical: 'center',
    flex: 1,
  },
  eyeIcon: {},
  arrow: {
    alignSelf: 'flex-end',
    backgroundColor: '#FFC70B',
    padding: 4,
    borderRadius: 40,
    position: 'absolute',
    bottom: 12,
    right: 10,
  },
  errorContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingLeft: 20,
    marginTop: 10,
  },
  errorText: {
    marginLeft: 5,
    fontSize: 14,
    paddingTop: 3,
    color: '#FF5A5F',
  },
});

export default FloatingLabelInput;
