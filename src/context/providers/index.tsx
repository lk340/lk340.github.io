import * as React from "react";

import * as Context from "@/context";

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Context.Theme.Provider>
				<Context.Windows.Provider>
					<Context.Scroll.Provider>
						<Context.Mouse.Provider>
							<Context.Location.Provider>
								<Context.UserAgent.Provider>
									<Context.AuthForm.Provider>
										<Context.Loading.Provider>
											<Context.Info.Provider>
												<Context.Skills.Provider>{children}</Context.Skills.Provider>
											</Context.Info.Provider>
										</Context.Loading.Provider>
									</Context.AuthForm.Provider>
								</Context.UserAgent.Provider>
							</Context.Location.Provider>
						</Context.Mouse.Provider>
					</Context.Scroll.Provider>
				</Context.Windows.Provider>
			</Context.Theme.Provider>
		</>
	);
};
