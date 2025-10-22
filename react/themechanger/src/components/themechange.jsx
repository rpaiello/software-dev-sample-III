function ThemeChange(colorprop) {
    return(
        <button style={{backgroundColor: colorprop.color}} className="theme" onClick={colorprop.onclick}></button>
    )
}

export default ThemeChange;