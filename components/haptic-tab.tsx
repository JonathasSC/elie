import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';
import React, { useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

export function HapticTab(props: BottomTabBarButtonProps) {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const focused = props.accessibilityState?.selected;

  const animateIn = () => {
    if (process.env.EXPO_OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

    Animated.spring(scaleValue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const animateOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <PlatformPressable
      {...props}
      style={styles.pressable}
      onPressIn={animateIn}
      onPressOut={animateOut}
    >
      <Animated.View 
        style={[
          styles.circle, 
          { 
            backgroundColor: focused ? '#333' : 'transparent',
            transform: [{ scale: scaleValue }] 
          }
        ]}
      >
        {props.children}
      </Animated.View>
    </PlatformPressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});