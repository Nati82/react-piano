import { useEffect } from "react";

import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { useSoundfont } from "../../adapters/Soundfont/useSoundfont";
import { useInstrument } from "../../state/Instrument/Context";
import { Keyboard } from "../Keyboard/Keyboard";
import { SoundfontProvider } from "../../adapters/Soundfont/SoundfontProviderClass";

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();
  const { loading, current, play, stop, load } = useSoundfont({
    AudioContext,
  });
  useEffect(() => {
    if (!loading && instrument !== current) load(instrument);
  }, [load, loading, current, instrument]);
  return (
    <SoundfontProvider
      AudioContext={AudioContext}
      instrument={instrument}
      render={(props) => <Keyboard {...props} />}
    />
  );
};
