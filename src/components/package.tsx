import { createUserTheme } from "@solid-primitives/start";
export function Repro() {
	const [userTheme, setUserTheme] = createUserTheme();
	return <>{userTheme()}</>;
}
