import { useSelector } from 'react-redux'
import { UserState } from '../../reducers/userReducers'
import { RootState } from '../../store'
import { Link } from 'react-router-dom'
import {useTranslation} from "react-i18next";
import styled, { ThemeProvider } from "styled-components"
import { useState, useEffect } from 'react';
import "./homeScreen.css"

// const themeDefault = {
//   id: "default",
//   colorPrimary: "aqua",
//   colorSecondary: "rgb(255, 132, 0)",
//   colorText: "black"
// }
// const themeLight = {
//   id: "light",
//   colorBackground: "white",
//   colorText:"black",
// }

// const themeDark = {
//   id: "dark",
//   colorBackground: "black",
//   colorPrimary: "rgb(255, 132, 0)",
//   colorText:"white",
// }

// const StyledH1 = styled.h1`
//   background: ${(p)=>p.theme.colorPrimary};
// `;

// const StyledButton = styled.button`
//   background: ${(p)=>p.theme.colorPrimary};
//   color: ${(p)=>p.theme.colorText}
// `;

// const StyledWrapper = styled.div`
// transition: background 0.5s;
// `

const HomeScreen = () => {
  const {t, i18n} = useTranslation()
  const userLogin = useSelector<RootState, UserState>(
    (state: RootState) => state.userLogin
  )

  const { userInfo } = userLogin
  const email = userInfo ? userInfo.email : null

  // const [theme, setTheme] = useState(themeDefault)

  // const handleTheme = () =>{
  //   if (theme.id === "dark"){
  //     setTheme({
  //       ...themeDefault,
  //       ...themeLight,
  //     })
  //     localStorage.setItem("theme", theme.id )
  //   } else {
  //     setTheme({
  //       ...themeDefault,
  //       ...themeDark,
  //     })
  //     localStorage.setItem("theme", theme.id )
  //   }

  // }

  // useEffect(() => {
  //   setTheme({
  //     ...themeDefault, ...themeLight
  //   })
  // }, [])
  

  // const newTheme = { ...themeDefault, ...themeLight}

  
  

  return(
    // <ThemeProvider theme={theme}><StyledWrapper className="main-div"><StyledH1 data-testid="password-exist" >{t<string>('home')}</StyledH1> <StyledButton className='theme-toggle' onClick={handleTheme}>Change Theme</StyledButton><StyledWrapper className="centering-div"><StyledH1 className='h1-padding'>TCL-CPAAS {t<string>('home')}</StyledH1></StyledWrapper></StyledWrapper>
    // </ThemeProvider>
    <><div className="main-div"><h1 data-testid="password-exist" className="homescreen-text" >{t<string>('home')}</h1><div className="centering-div"><h1 className='h1-padding'>TCL-CPAAS {t<string>('home')}</h1></div></div>
    </>
  )
} 

export default HomeScreen