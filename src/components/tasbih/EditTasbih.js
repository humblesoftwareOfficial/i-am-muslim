import { View, Text } from "react-native";
import React, { useState } from "react";
import { TASBIH_FORM_STYLE } from "../../styling/tasbih";
import {
  formatNumber,
  isFieldWithValue,
  onlyContainsNumber,
} from "../../utils/system";
import DefaultInput from "../inputs/DefaultInput";
import CustomButton from "../buttons/CustomButton";
import { APP_COLORS } from "../../styling/system";

export default function EditTasbih({ onValidate, onAbort }) {
  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [hasError, setHasError] = useState("");

  const handleCountValue = (newValue = "") => {
    const value = newValue?.replace(/ /g, "");
    if (onlyContainsNumber(value) || value?.length === 0) {
      setCount(value);
    }
  };

  const onConfirm = () => {
    try {
      if (isFieldWithValue(name) && isFieldWithValue(count)) {
        const countValue = +count;
        if (countValue) {
          onValidate(name, countValue);
        } else {
          setHasError(true);
        }
      } else {
        setHasError(true);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <View style={TASBIH_FORM_STYLE.container}>
      <Text style={TASBIH_FORM_STYLE.title}>Nouveau Tasbih</Text>
      <View style={{ marginTop: 10 }}>
        <DefaultInput
          value={name}
          placeholder="Nom du tasbi"
          maxLength={100}
          onValueChange={(value) => {
            setName(value);
          }}
          hasError={!isFieldWithValue(name) && hasError}
        />
        <DefaultInput
          value={formatNumber(count)}
          placeholder="Objectif (Ex: 100)"
          maxLength={6}
          onValueChange={handleCountValue}
          hasError={!isFieldWithValue(count) && hasError}
          keyboardType="numeric"
        />
        <CustomButton
          label="Enregistrer"
          onClick={onConfirm}
          bgColor="transparent"
          textColor={APP_COLORS.PRIMARY_COLOR.color}
          borderColor={APP_COLORS.PRIMARY_COLOR.color}
          borderWidth={1}
        />
        <CustomButton
          label="Annuler"
          onClick={onAbort}
          bgColor="transparent"
          textColor={APP_COLORS.RED_COLOR.color}
          borderColor={APP_COLORS.RED_COLOR.color}
          borderWidth={1}
        />
      </View>
    </View>
  );
}
