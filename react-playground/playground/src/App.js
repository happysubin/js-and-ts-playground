import styled from "styled-components"

const Father = styled.div`
  display: flex;
`

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`

const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`

const Text = styled.span`
  color: white;
`

const Circle = styled(Box)`
  border-radius: 50px;
`

const Button = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`

const Link = styled(Button)``

const Input = styled.input.attrs({required:true, minLength:10 })`
  background-color: blue;
`

function App() {
  return (
    <Father as = "header">
      <Box bgColor="teal">
        <Text>Hello</Text>
      </Box>
      <Circle bgColor="tomato"/>
      <Button as="a" href="/">Login</Button>  //a 태그로 활용됨
      <Input></Input>
    </Father>
  )
 
}

export default App;
