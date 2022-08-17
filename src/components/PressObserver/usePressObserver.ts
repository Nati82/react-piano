import { useEffect, useState } from "react";

import { Key as KeyLabel } from "../../domain/keyboard";

type IsPressed = boolean;
type EventCode = string;
type CallbackFunction = () => void;
type Settings = {
  watchKey: KeyLabel;
  onStartPress: CallbackFunction;
  onFinishPress: CallbackFunction;
};
