import { themeAction } from "../Context/themeActions";
import { useThemeDispatch, useThemeState } from "../Context/themeContext";
import "./../App.css";

const Theme = () => {
  const dispacth = useThemeDispatch();
  const { isDark } = useThemeState();

  const handleChengeTheme = () => {
    //Hard Code !
    if (isDark === true) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      dispacth({
        type: themeAction.LIGHT,
      });
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      dispacth({
        type: themeAction.DARK,
      });
    }
  };
  return (
    <>
      <div className="container">
        <div className="board">
          <div className="switch">
            <button
              style={isDark ? { top: "10%" } : { top: "0%" }}
              className="button"
              onClick={handleChengeTheme}
            ></button>
          </div>
        </div>
        <h3> {!isDark ? "LIGHT" : "DARK"} </h3>
      </div>
    </>
  );
};

export default Theme;
