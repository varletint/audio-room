import { MyControlsPanel } from "./MyControlsPanel";
import { MyDesPanel } from "./MyDesPanel";
import { MyParticipantsPanel } from "./MyParticipantsPanel";

export const MyUILayout = () => {
  return (
    <div className='ui-layout'>
      <MyDesPanel />
      <MyParticipantsPanel />
      <MyControlsPanel />
    </div>
  );
};
