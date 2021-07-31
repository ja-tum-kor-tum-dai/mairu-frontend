import css from 'styled-jsx/css'

export default css.global`
  main {
    position: relative;
    overflow: hidden !important;
    padding-bottom: 110px;
  }

  main::before {
    content: '';
    position: absolute;
    background: conic-gradient(
      from -5.39deg at 50% 50%,
      rgba(255, 255, 255, 0) -18.81deg,
      #fec6ff 35.67deg,
      #a3fcab 147.09deg,
      #8598d9 219.49deg,
      #e9ddba 308.98deg,
      rgba(255, 255, 255, 0) 341.19deg,
      #fec6ff 395.67deg
    );
    width: 600%;
    height: 600%;
    top: -250%;
    left: -250%;
    animation: rotating-gradient 20s linear infinite;
    z-index: -1;
  }

  @keyframes rotating-gradient {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  nav {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
  }
`
