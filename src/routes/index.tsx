import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Qwik Pizza</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik Pizza",
  meta: [
    {
      name: "description",
      content: "Qwik Pizza",
    },
  ],
};
