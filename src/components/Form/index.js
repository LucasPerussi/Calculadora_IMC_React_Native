import React, { useState } from "react";
import { TextInput, Text, View, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {
  // Definição dos estados iniciais, para caso nao tenham sido informadas
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [keyboardOpen, setKeyboardOpen] = useState(false);


  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
    // To fixed, define o limite de casas decimais em js
  }

   // Função para fechar o teclado
   const dismissKeyboard = () => {
    Keyboard.dismiss();
    setKeyboardOpen(false);
  };

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é igual: ");
      setTextButton("Calcular Novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preecha o peso e altura");
  }
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura (m)</Text>
        <TextInput
          style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.87"
          keyboardType="numeric"
        />

        <Text style={styles.formLabel}>Peso (kg)</Text>
        <TextInput
          style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 75.87"
          keyboardType="numeric"
        />

        <TouchableOpacity 
            style={styles.ButtonCalculator}
            onPress={() => validationImc() && dismissKeyboard()}
        >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>

      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
    </TouchableWithoutFeedback>
  );
}
