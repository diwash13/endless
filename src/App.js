import React from "react";

import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { HowItWorks } from "./components/HowItWorks/HowItWorks";

import { getData } from "./services/api";
import { sortComparatorOnSteps, sortComparatorEffectiveDate } from "./utils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    getData()
      .then(data => data.slice().sort(sortComparatorOnSteps))
      .then(this.sortVersionContentOnEffectiveDate)
      .then(data => this.setState({ data, isLoaded: true }));
  }

  sortVersionContentOnEffectiveDate = data =>
    data.map(d => ({
      ...d,
      versionContent: d.versionContent.sort(sortComparatorEffectiveDate)
    }));

  render() {
    const { data, isLoaded } = this.state;
    console.log(data);
    return (
      <main className="App">
        <Header />
        <Hero />
        {isLoaded && <HowItWorks data={data} />}
      </main>
    );
  }
}

export default App;
