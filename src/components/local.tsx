import { createUserTheme } from "../start";
export function Repro() {
	const [userTheme, setUserTheme] = createUserTheme();
	return <>{userTheme()}</>;
}
