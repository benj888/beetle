import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  visible?: boolean;
};

export interface Actions {
  handleSetVisible: (visible: boolean) => void;
}

const initialState: State = {
  visible: false,
};

export const useDrawerStore = create(
  immer<State & Actions>((set, get) => ({
    ...initialState,
    handleSetVisible: (visible: boolean) => {
      set({ visible });
    },
  }))
);