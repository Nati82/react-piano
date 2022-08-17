import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { useInstrument } from "../../state/Instrument/Context";
import { Keyboard } from "../Keyboard/Keyboard";
import { withInstrument } from "../../adapters/Soundfont/withInstrument";

const WrappedKeyboard = withInstrument(Keyboard);
export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();
  return (
    <WrappedKeyboard AudioContext={AudioContext} instrument={instrument} />
  );
};
