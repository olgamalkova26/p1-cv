// Prop drilling 

const Comp4 = (a, b) => <p>{a} + {b}</p>

const Container3 = (a, b) => <Comp4 a={a} b={b} />

const Container2 = (a, b) => <Container3 a={a} b={b} />