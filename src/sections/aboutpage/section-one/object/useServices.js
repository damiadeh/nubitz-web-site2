/* --------------------------- internal Dependency -------------------------- */
import servicesObject from "./servicesObject";

const useServices = async (service) => {
	await localStorage.setItem(
		"currentServiceItem",
		JSON.stringify(servicesObject.items[service])
	);

	return window.location.replace("/services");
};

export default useServices;
