import { Text, View, Vibration } from "react-native";
import React, { useState, useCallback, useRef, useEffect } from "react";
import { TASBIH_STYLE } from "../../styling/tasbih";
import { APP_COLORS, APP_STYLE } from "../../styling/system";
import TasbihPearl from "./TasbihPearl";
import { TouchableOpacity } from "react-native";
import AnimatedLottieView from "lottie-react-native";
import { limiTasbihDefaultValue } from "../../utils/system";
import { ANIMATION_STYLE } from "../../styling/animation";
import CONGRATULATION_ANIMATION from "../../assets/animations/congrats.json";
import CustomButton from "../buttons/CustomButton";

export default function TasbihView({ limitTasbih = 10 }) {
  const [pearlColor, setPearlColor] = useState(APP_COLORS.BLACK_COLOR.color);
  const [counter, setCounter] = useState(0);
  const [congratulate, setCongratulate] = useState(false);
  const [pearls, setPearls] = useState(limiTasbihDefaultValue(limitTasbih));
  const [pearlToRemoveFromView, setPearlToRemoveFromView] = useState(null);
  const [endOfTasbih, setEndOfTasbih] = useState(false);
  const animationCongratulate = useRef(null);

  useEffect(() => {
    if (congratulate) {
      activeCongratsAnimation();
    }
  }, [congratulate]);

  const activeCongratsAnimation = () => {
    animationCongratulate.current.play(0, 50);
  };

  useEffect(() => {
    if (pearls.length) {
    }
  }, [pearls]);

  const renderPearls = useCallback(
    () =>
      pearls.map((o, _i) =>
        pearlToRemoveFromView !== null && pearlToRemoveFromView >= 0 ? (
          o.key > pearlToRemoveFromView ? null : (
            <TasbihPearl
              value={_i}
              key={o.key}
              pearlColor={pearlColor}
              goOut={pearlToRemoveFromView === o.key}
              move
            />
          )
        ) : (
          <TasbihPearl
            value={_i}
            key={o.key}
            pearlColor={pearlColor}
            move={false}
          />
        )
      ),
    [pearlToRemoveFromView]
  );

  const onTap = () => {
    try {
      if (pearls.length) {
        const tmpPearls = [...pearls].reverse();
        const pearlToRemove = tmpPearls[counter];
        if (
          pearlToRemove &&
          (pearlToRemoveFromView === null || pearlToRemoveFromView > 0)
        ) {
          const newPearlsValue = [...pearls];
          const firstPearlInArray = pearls[0];
          if (pearls.length < limitTasbih) {
            newPearlsValue.unshift({
              key: firstPearlInArray.key - 1,
            });
            setPearls(newPearlsValue);
          }
          if (pearlToRemove.key) {
            setPearlToRemoveFromView(pearlToRemove.key);
            setCounter(counter + 1);
          }
          const isTasbihEnd = tmpPearls[counter + 1] ? false : true;
          setCongratulate(isTasbihEnd);
          setEndOfTasbih(isTasbihEnd);
        } else {
          Vibration.vibrate();
          setCongratulate(true);
        }
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const onRelaunchTasbih = () => {
    setPearls(limiTasbihDefaultValue(limitTasbih));
    setPearlToRemoveFromView(null);
    setCounter(0);
    setEndOfTasbih(false);
  }

  return (
    <TouchableOpacity
      style={TASBIH_STYLE.container}
      activeOpacity={0.9}
      onPress={onTap}
    >
      <View style={TASBIH_STYLE.header}>
        <View style={TASBIH_STYLE.tasbih_options}>
          <Text style={APP_STYLE.title}>Tasbih</Text>
          <View style={TASBIH_STYLE.right_header}>
            <CustomButton
              label="Nouveau tasbih"
              textColor={APP_COLORS.PRIMARY_DARK_COLOR.color}
              borderWidth={2}
              bgColor={APP_COLORS.LIGHT_COLOR.color}
              padding={12}
              // onClick={() => onClickChallenge && onClickChallenge(challenge)}
            />
          </View>
        </View>
        <View style={TASBIH_STYLE.tasbih_counter}>
          <Text style={TASBIH_STYLE.current_counter_value}>{counter}</Text>
          <Text style={TASBIH_STYLE.tasbih_limit}>{`/ ${limitTasbih}`}</Text>
          {endOfTasbih && (
            <CustomButton
            label="Relancer"
            onClick={onRelaunchTasbih}
          />
          )}
        </View>
      </View>
      <View style={TASBIH_STYLE.tasbih_chaplet_container}>
        <View style={TASBIH_STYLE.line}></View>
        {renderPearls()}
      </View>
      {congratulate && (
        <View style={ANIMATION_STYLE.animationHeart}>
          <AnimatedLottieView
            ref={animationCongratulate}
            source={CONGRATULATION_ANIMATION}
            style={ANIMATION_STYLE.animationLottie}
            autoPlay={false}
            loop={false}
            onAnimationFinish={() => setCongratulate(false)}
            speed={0.5}
          />
        </View>
      )}
    </TouchableOpacity>
  );
}
