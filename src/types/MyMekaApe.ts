type MyMekaApe = {
  id: string;
  level?: number | null | undefined;
  oogaType?: number | null | undefined;
  health?: string | null | undefined;
  inCrew:
    | {
        id: string;
      }
    | null
    | undefined;
};

export default MyMekaApe;
