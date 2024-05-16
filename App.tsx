import React, {useState} from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

function App(): React.JSX.Element {
  const [unit, setUnit] = useState(0);
  const [meter, setMeter] = useState(0);
  const [unitText, setUnitText] = useState('');

  const handleTextInputChange = (meter: number) => {
    setMeter(meter);
    console.log(meter, typeof meter);
    console.log(unit, typeof unit);
  };

  // converterFunction
  const convertFromMeterToCentimeter = () => {
    return [setUnit(Number(meter) * 100), setUnitText('Centimeter')];
  };
  const convertFromMeterToMilimeter = () => {
    return [setUnit(Number(meter) * 1000), setUnitText('Millimeter')];
  };
  const convertFromMeterToInch = () => {
    return [setUnit(Number(meter) * 39.36), setUnitText('Inch')];
  };
  const convertFromMeterToKilometer = () => {
    return [setUnit(Number(meter) / 1000), setUnitText('Kilometer')];
  };
  const convertFromMeterToMile = () => {
    return [setUnit(Number(meter) / 1609), setUnitText('Mile')];
  };
  const convertFromMeterToFoot = () => {
    return [setUnit(Number(meter) * 3.280839895), setUnitText('Foot')];
  };

  // reset values
  const reset = () => {
    setUnit(0);
    setMeter(0);
    setUnitText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.headingText}>Unit Converter</Text>
        <Text style={styles.output}>
          {meter <= 0
            ? 'Please Enter Your Meter Value'
            : `${meter} Meter = ${unit.toFixed(4)} ${unitText}`}
        </Text>

        <TextInput
          placeholder="Enter Your Value in Meter"
          keyboardType="numeric"
          style={styles.inputField}
          onChangeText={handleTextInputChange}
          value={meter}
        />
      </View>
      <View style={styles.converterContainer}>
        <Pressable onPress={convertFromMeterToCentimeter}>
          <View style={[styles.converterCard, styles.card1]}>
            <Text style={styles.converterCardText}>Centimeter</Text>
          </View>
        </Pressable>
        <Pressable onPress={convertFromMeterToMilimeter}>
          <View style={[styles.converterCard, styles.card2]}>
            <Text style={styles.converterCardText}>Milimeter</Text>
          </View>
        </Pressable>
        <Pressable onPress={convertFromMeterToInch}>
          <View style={[styles.converterCard, styles.card3]}>
            <Text style={styles.converterCardText}>Inch</Text>
          </View>
        </Pressable>
        <Pressable onPress={convertFromMeterToKilometer}>
          <View style={[styles.converterCard, styles.card4]}>
            <Text style={styles.converterCardText}>Kilometer</Text>
          </View>
        </Pressable>
        <Pressable onPress={convertFromMeterToMile}>
          <View style={[styles.converterCard, styles.card5]}>
            <Text style={styles.converterCardText}>Mile</Text>
          </View>
        </Pressable>
        <Pressable onPress={convertFromMeterToFoot}>
          <View style={[styles.converterCard, styles.card6]}>
            <Text style={styles.converterCardText}>Foot</Text>
          </View>
        </Pressable>
      </View>
      <Pressable onPress={reset} style={styles.resetBtn}>
        <Text style={styles.resetText}>Reset</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 30,
    fontWeight: '600',
    color: 'indianred',
    marginVertical: 10,
  },
  output: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 10,
    color: '#000000',
    backgroundColor: 'lightgreen',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    width: 350,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#222222',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    color: '#181818',
    fontSize: 18,
  },
  converterContainer: {
    marginTop: 20,
    marginLeft: 35,
    display: 'flex',
    flexDirection: 'row',
    columnGap: 20,
    rowGap: 20,
    flexWrap: 'wrap',
  },
  converterCard: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
  card1: {
    backgroundColor: '#AF8260',
  },
  card2: {
    backgroundColor: '#803D3B',
  },
  card3: {
    backgroundColor: '#503C3C',
  },
  card4: {
    backgroundColor: '#FFC26F',
  },
  card5: {
    backgroundColor: '#967E76',
  },
  card6: {
    backgroundColor: '#643A6B',
  },
  converterCardText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '500',
  },
  resetBtn: {
    backgroundColor: '#E74646',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  resetText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
});

export default App;
