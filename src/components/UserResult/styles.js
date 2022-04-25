import styled from 'styled-components'

export const Overlay = styled.div`
  background: #0d1117;
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
  overflow: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #21262d;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: white;
  }
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
    font-size: 2rem;
    color: red;
    margin-bottom: 3.5rem;
    background: none;
  }
  p {
    font-size: 1.25rem;
    width: 50vw;
    border-radius: 5px;
    background: white;
    border: 1px;
  }
`

export const Button = styled.button`
  width: 5rem;
  height: 2rem;
  background: white;
  border-radius: 0.5rem;
  border: none;
  font-size: 1.2rem;
`

export const CloseButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  background: transparent;
  border: 0;
`
