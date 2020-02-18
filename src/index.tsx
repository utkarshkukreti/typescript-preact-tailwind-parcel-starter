import * as Preact from 'preact';
import { useState } from 'preact/hooks';

const Button = ({ text }: { text: string }) => {
  const [count, setCount] = useState(0);
  return (
    <button
      class="px-6 sm:px-10 py-5 bg-white font-semibold text-purple-600 sm:text-lg rounded-full shadow-lg focus:outline-none transition duration-150 transform hover:-translate-y-1 hover:bg-gray-300 hover:scale-105"
      onClick={() => setCount(count + 1)}
    >
      {text.replace(/{}/g, `${count}`)}
    </button>
  );
};

const Main = () => (
  <div class="pt-16 mx-8 flex flex-col items-center">
    <Button text="You've clicked this button {} times!" />
  </div>
);

Preact.render(<Main />, document.querySelector('main')!);
