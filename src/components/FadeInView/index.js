import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

/**
 * FadeIn Compoment for animate some components
 *
 * @param {style} object Allow incluide adicional styles
 * @param {children} array All components to animate
 */
export const FadeInView = ({ style, children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...style,
        opacity: fadeAnim,
      }}
    >
      {children}
    </Animated.View>
  );
};
