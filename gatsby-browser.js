// import { makeServer } from "./src/mirage/server";

// export const wrapRootElement = () => {
// makeServer(process.env.NODE_ENV);
// };

// =========================================== //
// ↓↓↓ Log & Add Previous and Current Path ↓↓↓ //
// =========================================== //

// exports.onRouteUpdate = ({ location, prevLocation }) => {
// 	// console.log("New Pathname:", location.pathname);
// 	// console.log("Old Pathname:", prevLocation ? prevLocation.pathname : null);

// 	const oldPath = prevLocation ? prevLocation.pathname : null;
// 	const newPath = location.pathname;

// 	if (oldPath && oldPath !== newPath) {
// 		localStorage.pathChange = true;
// 	} else {
// 		localStorage.pathChange = false;
// 	}
// };
