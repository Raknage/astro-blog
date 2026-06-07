// import { useState } from "preact/hooks";
import { useState } from "react";

import { Button } from "@/components/ui/button";

type Messages = {
  messages: string[];
};

export default function Greeting({ messages }: Messages) {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <Button variant={"default"} onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </Button>
      {/* <button onClick={() => setGreeting(randomMessage())}>New Greeting</button> */}
    </div>
  );
}
