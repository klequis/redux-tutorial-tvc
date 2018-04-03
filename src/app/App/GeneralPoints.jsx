import React from 'react'
import Section from 'elements/Section'
import H1 from 'elements/H1'
import H2 from 'elements/H2'
import P from 'elements/P'
import Pre from 'elements/Pre'
import Code from 'elements/Code'
import Callout from 'elements/Callout'
import A from 'elements/A'

const GeneralPoints = () => {
  return (
    <div>
      <Section>
        <H1>Additional Points</H1>
        <H2>Reducers Must be Pure</H2>
        <ul>
          <li>Don't mutate the reducers arguments.</li>
          <li>don't perform side effects like API calls</li>
          <li>Don't call non-pure functions like <Code code="Date.new()" /> or <Code code="Math.random()" /></li>
        </ul>
        <Callout info cite={<A href='https://en.wikipedia.org/wiki/Pure_function'>Wikipedia</A>}>
          <p>In computer programming, a function may be considered a pure function if both of the following statements about the function hold:</p>
          <ol>
            <li>The function always evaluates the same result value given the same argument value(s). The function result value cannot depend on any hidden information or state that may change while program execution proceeds or between different executions of the program, nor can it depend on any external input from I/O devices (usually—see below).</li>
            <li>Evaluation of the result does not cause any semantically observable side effect or output, such as mutation of mutable objects or output to I/O devices (usually—see below).</li>
          </ol>
          <p>The result value need not depend on all (or any) of the argument values. However, it must depend on nothing other than the argument values. The function may return multiple result values and these conditions must apply to all returned values for the function to be considered pure. If an argument is passed by reference, any parameter mutation will alter the value of the argument outside the function, which will render the function impure.</p>
        </Callout>
      </Section>
      <Section>
        <H2>Don't Mutate State</H2>
        <ul>
          <li>Under the hood, React does a shallow compare to see if state has changed and a re-render needs to be performed. Essentially, Redux asks if the object returned from your reducer is the same as the object passed to your reducer. If it isn't, components are told to re-render.</li>
          <li>Some UI actions depend on checking if what the state was before the state change that triggered the current render. For example, you could have a true/false named showItem: property to toggle a UI element and toggle its value. When setting state, React will pass you the previous state. In the below example, the new value of showItem is based on the previous state's value. If you mutated state then the previous state would be changed and the toggle would not work.</li>
          <Pre
            language='js'
            code={[
              "this.setState((prevState, props) => {",
              "  return {showItem: !prevState.showItem};",
              "});",
            ]}
          />
        </ul>
      </Section>
    </div>
  )
}
export default GeneralPoints
