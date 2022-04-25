import styled from 'styled-components'

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  background: #f5f5f5;
  width: 70vw;
  height: 80vh;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;
  header {
    font-size: 1.75rem;
    font-weight: 600;
    color: #00f;
  }
  strong {
    font-size: 2.25rem;
    color: red;
    margin-bottom: 3.5rem;
    background: none;
  }
  p {
    font-size: 1.25rem;
    color: #faf;
    margin-top: 0.25rem;
  }
`
export const RenderColumn = styled.div`
  margin-bottom: 3.5rem;
  width: 60vw;
  height: 20vh;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;
  header {
    font-size: 1.75rem;
    font-weight: 600;
    color: #00f;
  }
  strong {
    font-size: 1.25rem;
    color: red;
    margin-bottom: 3.5rem;
    background: none;
  }
  p {
    font-size: 1.25rem;
    color: #faf;
    margin-top: 0.25rem;
  }
`

export const InputGithub = styled.input`
  background: #0d1117;
  color: white;
  font-size: 1.5em;
  border-color: aqua;
  border: 2px solid #21262d;
  border-radius: 3px;
  margin: 15px;
  padding: 15px;

  $:Focus,
  $:Active{
    outline: aqua,
    box-shadow: red,
  }
`

export const SearchButton = styled.button`
  width: 80px;
  height: 12vh;
  background: white;
  border: 0;
  border-radius: 3px;
`
