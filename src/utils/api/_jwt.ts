import axios from "axios";

import * as API from "@/utils/api";

type JWTAccessTokenPayload = {
	exp: number;
	jti: string;
	token_type: string;
	user_id: number;
};

export function decryptAccessToken(accessToken: string): JWTAccessTokenPayload {
	return JSON.parse(atob(accessToken.split(".")[1]));
}

// You only ever need to call checkRefreshJWT() whenever you're
// making an API call that requires an authorization header.

export async function checkRefresh(): Promise<void> {
	try {
		const accessToken = localStorage.access;
		const refreshToken = localStorage.refresh;

		if (accessToken && refreshToken) {
			const _accessTokenExp = decryptAccessToken(accessToken).exp;
			const accessTokenExpirationDate = new Date(_accessTokenExp * 1000);
			const dateTimeRightNow = new Date();
			const accessTokenExpired = accessTokenExpirationDate < dateTimeRightNow;

			// console.log("Access Token Expiration Date:", accessTokenExpirationDate);
			// console.log("Date Time Right Now:", dateTimeRightNow);
			// console.log("Access token expire?", accessTokenExpired);

			if (accessTokenExpired) {
				const endpoint = "/api/token/refresh/";
				const data = { refresh: refreshToken };
				const validateStatus = API.validateStatus;

				const response = await axios.post(endpoint, data, { validateStatus });

				// Success
				if (response.status < 400) {
					// console.log("JWT Refresh Success:", response);
					localStorage.access = response.data.access;
				}
				// Failure
				else {
					// If we enter this area, it means that the refresh token has expired.
					// In that case, we're going to have to remove the tokens from local storage.
					// User must sign in again manually.
					localStorage.removeItem("access");
					localStorage.removeItem("refresh");
					// console.log("JWT Refresh Failure", response);
				}
			}
		}
	} catch (error) {
		// Dev debug log
		console.log(error);
	}
}
