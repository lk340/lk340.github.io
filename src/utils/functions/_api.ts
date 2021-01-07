import axios from "axios";

import * as API from "@/utils/api";

const validateStatus = API.validateStatus;

async function handleReduxResponse(
	endpoint: string,
	setter: any,
	errorSetter: any,
): Promise<void> {
	const response = await axios.get(endpoint, { validateStatus });

	// Success
	if (response.status < 400) setter(response.data);
	// Failure
	else errorSetter(response.data);
}
