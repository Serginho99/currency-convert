import { Select, TextField } from '@mui/material';
import { Wrapper } from './CurrenciesInput.styled';

export default function CurrenciesInput({
  round,
  fromValue,
  setFromValue,
  fromRef,
  fromInp,
  results,
  cc,
  setToValue,
  toRef,
  toInp,
}) {
  return (
    <>
      <Wrapper>
        <TextField
          style={{ width: '70%' }}
          variant="outlined"
          type="number"
          value={round(fromValue)}
          onChange={e => setFromValue(e.target.value)}
          autoComplete="off"
        />
        <Select
          native
          ref={fromRef}
          {...fromInp}
          style={{ marginLeft: '10px' }}
        >
          {cc}
        </Select>
      </Wrapper>

      <Wrapper>
        <TextField
          style={{ width: '70%' }}
          variant="outlined"
          type="number"
          value={results.result}
          onChange={e => setToValue(e.target.value)}
          autoComplete="off"
        />
        <Select native ref={toRef} {...toInp} style={{ marginLeft: '10px' }}>
          {cc}
        </Select>
      </Wrapper>
    </>
  );
}
