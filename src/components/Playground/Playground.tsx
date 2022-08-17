import { InstrumentContextProvider } from "../../state/Instrument/Provider";
import { InstrumentSelector } from "../InstrumentSelector/InstrumentSelector";
import { KeyboardWithInstrument } from "../Keyboard/WithInstrument";

import styles from "./Playground.module.css";

export const Playground = () => {
  return (
    <InstrumentContextProvider>
      <div className={styles.playground} >
        <KeyboardWithInstrument />
        <InstrumentSelector />
      </div>
    </InstrumentContextProvider>
  );
};
