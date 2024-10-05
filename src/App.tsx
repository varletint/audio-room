import {
  StreamVideo,
  StreamVideoClient,
  StreamCall,
  User,
} from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "./App.css";

const apiKey = "mmhfdzb5evj2";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0Jhc3RpbGFfU2hhbiIsInVzZXJfaWQiOiJCYXN0aWxhX1NoYW4iLCJ2YWxpZGl0eV9pbl9zZWNvbmRzIjo2MDQ4MDAsImlhdCI6MTcyODA4Mjk1OSwiZXhwIjoxNzI4Njg3NzU5fQ.jvKx36N7dfFOxwhzNzxalSS_94pS7VgU0DG2sVAo6k8";
const userId = "Bastila_Shan";
const callId = "jdPQJDVHaqEq";

const user: User = {
  id: userId,
  name: "varletint",
  image: "https://getstream.io/random_svg/?id=oliver&name=Oliver",
};

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call("audio", callId);
call.join({
  create: true,
  data: {
    members: [{ user_id: "john_smith" }, { user_id: "jane_doe" }],
    custom: {
      title: "React audio room",
      description: "Talking about React",
    },
  },
});

export default function App() {
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>yes</StreamCall>
    </StreamVideo>
  );
}
