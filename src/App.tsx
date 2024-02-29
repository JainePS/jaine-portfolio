import React from "react";
import Main from "./pages/Main";

const App = () => {
  return (
    <div className="App">
      <section className="bg-white dark:bg-gray-900">
        <div className="flex flex-col justify-between items-center gap-4 p-5 md:mx-56 lg:py-16 lg:px-6 ">
          <Main />
        </div>
      </section>
    </div>
  );
};

export default App;
