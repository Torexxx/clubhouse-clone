import "../styles/globals.scss";

function App({ Component, pageProps }) {

  return (
    <div className={"main-wrapper-of-the-app"}>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
