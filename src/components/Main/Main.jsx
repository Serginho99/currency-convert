import CurrenciesInput from 'components/CurrenciesInput/CurrenciesInput';
import { useEffect, useState, useRef } from 'react';

import currency from '../../currency/currency';
import currencyConverter from '../fetchApi/fetchApi';

import useInput from '../hooks/useInput';
import { Wrapper, Text, WrapperText } from './Main.styled';

export default function Convert() {
  const [fromValue, setFromValue] = useState(100);
  const [toValue, setToValue] = useState('');
  const [currencies, setCurrencies] = useState();
  const [results, setResults] = useState({ result: '' });
  const [usd, setUsd] = useState();
  const [eur, setEur] = useState();

  const fromRef = useRef();
  const toRef = useRef();

  const fromInp = useInput(fromRef, 'USD');
  const toInp = useInput(toRef, 'UAH');

  const round = value => {
    return Number(Math.round(value + 'e' + 3) + 'e-' + 3);
  };

  useEffect(() => {
    async function getData() {
      try {
        const result = await currencyConverter();
        setUsd(result.USD);
        setEur(result.EUR);

        let from = result[fromInp.value];
        let to = result[toInp.value];

        const calc = round(from / to) * fromValue;
        setResults({ result: calc });

        setCurrencies(result);
      } catch (error) {}
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!currencies) {
      return;
    }

    let from = currencies[fromInp.value];
    let to = currencies[toInp.value];
    const check = fromInp.value.length === 3 && toInp.value.length === 3;

    if (check) {
      if (!from || !to) {
        return;
      }
      const calc = round((from / to) * fromValue);
      setResults({ result: calc });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromValue, fromInp.value, toInp.value]);

  useEffect(() => {
    if (!currencies) {
      return;
    }

    let from = currencies[fromInp.value];
    let to = currencies[toInp.value];

    const calc = toValue / (from / to);
    setFromValue(calc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toValue]);

  const cc = currency.map((el, idx) => {
    return (
      <option value={el.cc} key={idx}>
        {el.cc} {el.txt}
      </option>
    );
  });

  return (
    <Wrapper>
      <WrapperText>
        <Text>USD: {usd}</Text>
        <Text>EUR: {eur}</Text>
      </WrapperText>
      <CurrenciesInput
        round={round}
        fromValue={fromValue}
        setFromValue={setFromValue}
        fromRef={fromRef}
        fromInp={fromInp}
        results={results}
        setToValue={setToValue}
        cc={cc}
        toRef={toRef}
        toInp={toInp}
      />
    </Wrapper>
  );
}
