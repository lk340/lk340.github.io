import * as React from "react";

import * as Wrappers from "@/wrappers";
import * as Components from "@/components";
import * as Lib from "@/views/lib";

export default () => (
	<Wrappers.Layout>
		<Components.SEO title="Info" />
		<Lib.Info />
	</Wrappers.Layout>
);
