import * as Font from "expo-font";

const useFonts = async () =>
    await Font.loadAsync({
        'MS Sans Serif': require('../assets/fonts/ms_sans_serif.otf'),
        'MS Sans Serif Bold': require('../assets/fonts/ms_sans_serif_bold.otf'),
    });
export default useFonts;